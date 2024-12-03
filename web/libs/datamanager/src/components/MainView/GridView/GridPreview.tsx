import { observer } from "mobx-react";
import type { PropsWithChildren } from "react";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { modal } from "../../Common/Modal/Modal";
import styles from "./GridPreview.module.scss";

type Task = {
  id: number,
  data: Record<string, string>,
};

type GridViewContextType = {
  tasks: Task[],
  currentTaskId: number | null,
  setCurrentTaskId: (id: number | null) => void,
};

type TaskModalProps = GridViewContextType;

export const GridViewContext = createContext<GridViewContextType>({
  tasks: [],
  currentTaskId: null,
  setCurrentTaskId: () => {},
});

const TaskModal = observer(({ tasks, currentTaskId, setCurrentTaskId }: TaskModalProps) => {
  const index = tasks.findIndex(task => task.id === currentTaskId);
  const task = tasks[index];

  const goToNext = () => {
    if (index < tasks.length - 1) {
      setCurrentTaskId(tasks[index + 1].id);
    }
  };

  const goToPrev = () => {
    if (index > 0) {
      setCurrentTaskId(tasks[index - 1].id);
    }
  };

  if (!task) {
    return null;
  }

  return (
    <div>
      <div className={styles.controls}>
        <button type="button" onClick={goToPrev} disabled={index === 0}>Previous</button>
        {/* @todo other controls */}
        <button type="button" onClick={goToNext} disabled={index === tasks.length - 1}>Next</button>
      </div>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={task.data.image ?? task.data[0]}
          alt="Task Preview"
        />
      </div>
    </div>
  );
});

type GridViewProviderProps = PropsWithChildren<{
  data: Task[];
}>;

export const GridViewProvider: React.FC<GridViewProviderProps> = ({ children, data }) => {
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);
  const modalRef = useRef<{ update: (props: object) => void, close: () => void } | null>();

  const onClose = useCallback(() => {
    modalRef.current = null;
    setCurrentTaskId(null);
  }, []);

  useEffect(() => {
    if (currentTaskId === null) {
      modalRef.current?.close();
      return;
    }

    if (!modalRef.current) {
      modalRef.current = modal({
        title: "Task Preview",
        style: { width: 800 },
        children: <TaskModal tasks={data} currentTaskId={currentTaskId} setCurrentTaskId={setCurrentTaskId} />,
        onHidden: onClose,
      });
    } else {
      modalRef.current.update({
        children: <TaskModal tasks={data} currentTaskId={currentTaskId} setCurrentTaskId={setCurrentTaskId} />,
      });
    }
  }, [currentTaskId, data, onClose]);

  return (
    <GridViewContext.Provider value={{ tasks: data, currentTaskId, setCurrentTaskId }}>
      {children}
    </GridViewContext.Provider>
  );
};