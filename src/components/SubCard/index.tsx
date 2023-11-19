import { Flex, Button } from "@mantine/core";
import { CheckCircle, ArrowRight, CircleDashed } from "@phosphor-icons/react";
import styles from "./style.module.css";

export interface SubCardProps {
  title: string;
  alert: string;
  description: string;
  active: boolean;
  button: string;
  completed: boolean;
}

export const SubCard = ({
  title,
  alert,
  description,
  active,
  button,
  completed,
}: SubCardProps) => {
  return (
    <div className={styles.container} style={{ opacity: active ? 1 : 0.5 }}>
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
        <div>
          <Flex
            gap="8px"
            justify="space-between"
            align="center"
            direction="row"
          >
            <div>
              <h3>{title}</h3>
              {!!alert.length && <span className={styles.alert}>{alert}</span>}
              <div className={styles.description}>{description}</div>
            </div>
            <Button rightSection={<ArrowRight size={16} color="#fff" />}>
              {button}
            </Button>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};
