import {
  type MutableRefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { debounce } from "@humansignal/core";

export const RootSymbol = Symbol("$$root");
export const IndexedSymbol = Symbol("$$indexed");
export const IdDelimiter = "-";

export interface IndexedNode {
  [IndexedSymbol]?: boolean;
}

export interface TreeNodeProps extends IndexedNode {
  id: string;
  label: string;
  searchBy: string[];
  children: TreeNodeProps[];
  parentChecked?: boolean;
}

export interface Action<T = unknown, A = string> {
  id: string | typeof RootSymbol;
  action: A;
  value: T;
}

export type TreeAction =
  | Action<boolean, "select">
  | Action<boolean, "expand">
  | Action<{ query: string; results: TreeSearchMatch }, "search">
  | Action<boolean, "toggleselect">;

interface TreeContextProps {
  data: MutableRefObject<TreeNodeProps[]>;
  selected: MutableRefObject<string[]>;
  expanded: MutableRefObject<string[]>;
  allNodeIds: MutableRefObject<string[]>;
  notify: (path: string | Symbol, change: TreeAction) => void;
  subscribe: (path: string | Symbol, callback: Function) => () => void;
  search: (query: string) => void;
  searchIndexed: boolean;
  searchQuery: MutableRefObject<string>;
  searchResults: MutableRefObject<TreeSearchMatch>;
  getLabel: (id: string) => string;
}

const TreeContext = createContext<TreeContextProps>({} as TreeContextProps);

export const useTreeContext = () => useContext(TreeContext);

export interface MultiTreeSelectSchema {
  id: string;
  label: string;
  searchBy?: string[];
  children?: string | Record<string, MultiTreeSelectSchema>;
}

export interface MultiTreeSelectProviderProps {
  children?: ReactNode;
  dataRef: MutableRefObject<TreeNodeProps[]>;
  searchIndexRef: MutableRefObject<TreeSearchIndex>;
  searchIndexed: boolean;
  selected?: string[];
  expanded?: string[];
  schema?: MultiTreeSelectSchema;
  allSelectedDefault?: boolean;
  onChange?: (data: TreeNodeProps[], selected: string[]) => void;
  onSearch?: (query: string, results: TreeSearchMatch) => void;
  onExpand?: (id: string | Symbol, expanded: string[]) => void;
}

export type MultiTreeSelectProps = Omit<
  MultiTreeSelectProviderProps,
  "children" | "data" | "dataRef" | "searchIndexRef" | "searchIndexed"
> & {
  data: unknown[];
  children?: ReactNode;
  placeholder?: string;
  searchPlaceholder?: string;
  allLabel?: string;
  allSelectedDefault?: boolean;
  RootLevelIcon?: ReactNode;
  options?: unknown[];
};

/**
 * Get all children ids of a node as a flat array of strings
 */
export const getChildrenIds = (node: TreeNodeProps): string[] => {
  let childrenIds: string[] = [];
  if (node.children.length > 0) {
    childrenIds = node.children.map((child) => child.id);
    node.children.forEach((child) => {
      childrenIds = childrenIds.concat(getChildrenIds(child));
    });
  }
  return childrenIds;
};

export class TreeSearchMatch {
  private matches: Map<string, Set<string>> = new Map();

  set(id: string) {
    if (!this.matches.has(id)) {
      this.matches.set(id, new Set());
    }
  }

  add(id: string, TreeSearch: string) {
    this.matches.get(id)!.add(TreeSearch);
  }

  get(id: string) {
    return this.matches.get(id);
  }

  some(fn: (id: string) => void) {
    return Array.from(this.matches.keys()).some(fn);
  }

  size() {
    return this.matches.size;
  }
}

export class TreeSearchIndex {
  private index: Map<string, Set<string>> = new Map();

  get size() {
    return this.index.size;
  }

  add(_text: string, id: string) {
    const text = _text.toLowerCase();

    if (!this.index.has(text)) {
      this.index.set(text, new Set());
    }
    this.index.get(text)!.add(id);
  }

  search(_query: string) {
    const query = _query.toLowerCase();
    const results = new TreeSearchMatch();

    const matchingKeys = Array.from(this.index.keys()).filter((key) => key.includes(query));

    matchingKeys.forEach((key) => {
      for (const id of this.index.get(key)!) {
        results.set(id);
        results.add(id, key);
      }
    });
    return results;
  }
}

export const MultiTreeSelectProvider = ({
  children,
  dataRef,
  searchIndexRef,
  searchIndexed,
  selected: initialSelected,
  allSelectedDefault = false,
  onChange,
  onSearch,
  onExpand,
}: MultiTreeSelectProviderProps) => {
  const searchQueryRef = useRef("");
  const searchResultsRef = useRef<TreeSearchMatch>(new TreeSearchMatch());
  const selectedRef = useRef(initialSelected ?? []);
  const expandedRef = useRef<Array<string>>([]);
  const expandedCacheRef = useRef<Array<string> | null>(null);
  const subscribersRef = useRef<Map<string | Symbol, Set<Function>>>(new Map());
  const allNodeIdsRef = useRef<Array<string>>([]);

  const subscribe = (path: string | Symbol, callback: Function) => {
    if (!subscribersRef.current.has(path)) {
      subscribersRef.current.set(path, new Set());
    }
    subscribersRef.current.get(path)!.add(callback);

    return () => {
      subscribersRef.current.get(path)!.delete(callback);
    };
  };

  const notify = (path: string | Symbol, change: TreeAction) => {
    if (subscribersRef.current.has(path)) {
      for (const cb of subscribersRef.current.get(path)!) {
        cb(change);
      }
    }
  };

  const search = (query: string) => {
    const previousQuery = searchQueryRef.current;

    searchQueryRef.current = query;
    searchResultsRef.current = searchIndexRef.current.search(query);

    // Capture the pre-search expanded state
    if (!expandedCacheRef.current && query.trim().length > 2) {
      expandedCacheRef.current = [...expandedRef.current];
    }

    // Restore the pre-search expanded state
    if (previousQuery.trim().length !== 0 && query.trim().length === 0) {
      expandedRef.current = [...(expandedCacheRef.current ?? [])];
      expandedCacheRef.current = null;
    }

    notify(RootSymbol, { id: "", action: "search", value: { query, results: searchResultsRef.current } });
  };

  const getLabel = (id: string) => {
    const nestedId = id.split(IdDelimiter);
    let currentId = nestedId[0];
    let node = dataRef.current.find((node) => node.id === currentId);
    let label = node ? node.label : "";
    for (let i = 1; i < nestedId.length; i++) {
      if (!node) break;
      currentId = `${currentId}${IdDelimiter}${nestedId[i]}`;
      node = node.children.find((child) => child.id === currentId);
      label = node ? node.label : "";
    }
    return label;
  };

  useEffect(() => {
    return subscribe(
      RootSymbol,
      debounce(
        (change: TreeAction) => {
          if (onChange && change.action === "select") onChange(dataRef.current, selectedRef.current);
          if (onSearch && change.action === "search") onSearch(change.value.query, change.value.results);
          if (onExpand && change.action === "expand") onExpand(change.id, expandedRef.current);
        },
        16,
        false,
      ),
    );
  }, [onChange, onSearch, onExpand]);

  useEffect(() => {
    if (searchIndexed && !allNodeIdsRef.current.length) {
      allNodeIdsRef.current = getChildrenIds({ id: RootSymbol.toString(), label: "All", children: dataRef.current });

      if (allSelectedDefault && !selectedRef.current.length) {
        selectedRef.current = [...allNodeIdsRef.current];
      }
    }
  }, [searchIndexed]);

  return (
    <TreeContext.Provider
      value={{
        data: dataRef,
        allNodeIds: allNodeIdsRef,
        selected: selectedRef,
        expanded: expandedRef,
        notify,
        subscribe,
        search,
        searchIndexed,
        searchResults: searchResultsRef,
        searchQuery: searchQueryRef,
        getLabel,
      }}
    >
      {children}
    </TreeContext.Provider>
  );
};

export const useMultiTreeSelectProvider = ({
  selected,
  onChange,
  onExpand,
  onSearch,
  schema: rootSchema,
  allSelectedDefault,
  data,
}: MultiTreeSelectProps) => {
  const [searchIndexed, setSearchIndexed] = useState(false);
  const searchIndexRef = useRef<TreeSearchIndex>(new TreeSearchIndex());
  const dataRef = useRef<TreeNodeProps[]>([]);

  /**
   * Build a search index for the tree data
   */
  const buildSearchIndex = useCallback(
    (data: TreeNodeProps[], parentId = "", _schema = rootSchema) => {
      // Skip data that has already been indexed
      if ((data as IndexedNode)[IndexedSymbol]) return data;

      for (let i = 0; i < data.length; i++) {
        const node = data[i];

        // Skip nodes that have already been indexed
        if (node[IndexedSymbol]) continue;

        // Allow a schema to be passed to the provider
        // to define how to traverse the tree data
        // and what properties to use for id, label, and children
        let schema = _schema;
        if (schema) {
          node.id = (node as unknown as Record<string, TreeNodeProps["id"]>)[schema.id];
          node.label = (node as unknown as Record<string, TreeNodeProps["label"]>)[schema.label];
          node.searchBy = schema.searchBy?.map(
            (k: string) => (node as unknown as Record<string, TreeNodeProps["label"]>)[k],
          ) || [node.label];
          let children: TreeNodeProps[] = [];
          if (schema.children && typeof schema.children === "string") {
            children = (node as unknown as Record<string, TreeNodeProps["children"]>)[schema.children];
            // Reset the schema to undefined so the children schema is used if present, defaulting back to the root level schema
            schema = undefined;
          } else if (schema.children && typeof schema.children === "object") {
            const schemaKeys = Object.keys(schema.children);
            while (schemaKeys.length > 0) {
              const key = schemaKeys.shift();
              if (!key) break;
              schema = (schema.children as Record<string, MultiTreeSelectSchema>)[key];
              children = (node as unknown as Record<string, TreeNodeProps["children"]>)[key];
            }
          } else {
            // If no schema is provided, assume the data is already in the correct format
            schema = undefined;
          }

          if (children) {
            node.children = children;
          }
        }

        const fullId = parentId ? `${parentId}${IdDelimiter}${node.id}` : node.id.toString();

        node.id = fullId;

        // Mark the node as indexed so it is not indexed again
        node[IndexedSymbol] = true;

        // Add the node to the search index by the searchBy properties which fallback to using the label
        node.searchBy.forEach((searchBy) => searchIndexRef.current.add(searchBy, node.id));

        node.children = node.children || [];

        // Recursively build the search index for children
        if (node.children.length > 0) {
          node.children = buildSearchIndex(node.children, fullId, schema);
        }
      }

      // Mark the data as indexed
      Object.assign(data, { [IndexedSymbol]: true });

      return data;
    },
    [rootSchema],
  );

  useEffect(() => {
    // If the data requires indexing, build the search index and notify the provider that the data requires indexing
    if (!(data as IndexedNode)[IndexedSymbol] && searchIndexed) {
      setSearchIndexed(false);
    }

    // Data index is still valid, no need to rebuild
    if ((data as IndexedNode)[IndexedSymbol]) return;

    dataRef.current = buildSearchIndex(data as unknown[] as TreeNodeProps[]);
    setSearchIndexed(true);
  }, [data, searchIndexed]);

  return {
    dataRef,
    searchIndexRef,
    searchIndexed,
    Provider: (props: { children: ReactNode }) => (
      <MultiTreeSelectProvider
        dataRef={dataRef}
        searchIndexRef={searchIndexRef}
        searchIndexed={searchIndexed}
        selected={selected}
        onChange={onChange}
        onSearch={onSearch}
        onExpand={onExpand}
        allSelectedDefault={allSelectedDefault}
      >
        {props.children}
      </MultiTreeSelectProvider>
    ),
  };
};
