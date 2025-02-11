import { memo, useEffect, useRef, useState } from "react";
import { IconSearch } from "../../assets/icons";
import { useTreeContext } from "./TreeContext";
import styles from "./MultiTreeSelect.module.scss";

export const TreeSearch = memo(({ placeholder = "Search..." }: { placeholder?: string }) => {
  const { search, searchQuery } = useTreeContext();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(() => searchQuery.current);

  useEffect(() => {
    setTimeout(() => {
      searchInputRef.current?.focus();
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
    search(e.currentTarget.value);
  };

  return (
    <div className={styles.search__container}>
      <IconSearch />
      <input
        ref={searchInputRef}
        name="search"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
});
