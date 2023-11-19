import styles from "./style.module.css";

export interface AlertProps {
  title: string;
  description: string;
}

export const Alert = ({ title, description }: AlertProps) => {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
