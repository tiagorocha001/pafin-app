import { Flex, Button } from "@mantine/core";
import {
  CheckCircle,
  ArrowRight,
  CircleDashed,
  Info,
} from "@phosphor-icons/react";
import styles from "./style.module.css";

export interface SubCardProps {
  title: string;
  alert: string;
  alertSecondary?: string;
  description: string;
  active: boolean;
  button: string;
  completed: boolean;
}

export const SubCard = ({
  title,
  alert,
  alertSecondary,
  description,
  active,
  button,
  completed,
}: SubCardProps) => {
  return (
    <div className={active ? styles.container : styles.containerInactive}>
      <Flex
        gap="8px"
        justify="flex-start"
        align="flex-start"
        direction="row"
        className={styles.header}
      >
        {completed ? (
          <CheckCircle
            size={28}
            color="#38C97C"
            weight="fill"
            style={{ marginTop: "2px" }}
          />
        ) : (
          <CircleDashed
            size={24}
            color="#A7AEB4"
            style={{ marginTop: "2px" }}
          />
        )}
        <Flex
          gap="8px"
          justify="space-between"
          align="center"
          direction="row"
          className={styles.content}
        >
          <div>
            <h3>{title}</h3>
            {!!alert && <span className={styles.alert}>{alert}</span>}
            <div className={styles.description}>{description}</div>
            {!!alertSecondary && (
              <Flex
                gap="8px"
                justify="flex-start"
                align="flex-start"
                direction="row"
                className={styles.alertSecondary}
              >
                <Info size={16} color="#276EF1" style={{ marginTop: "2px" }} />{" "}
                {alertSecondary}
              </Flex>
            )}
          </div>
          <Button rightSection={<ArrowRight size={16} color="#fff" />}>
            {button}
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};
