import styles from "./Card.module.scss";

type CardProps = {
  header?: React.ReactNode;
  extra?: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Card = ({ header, extra, children, style }: CardProps) => {
  return (
    <div className={styles.card} style={style}>
      {(header || extra) && (
        <div className={styles.card__header}>
          <div className={styles["card__header-content"]}>{header}</div>

          {extra && <div className={styles["card__header-extra"]}>{extra}</div>}
        </div>
      )}
      <div className={styles.card__content}>{children}</div>
    </div>
  );
};
