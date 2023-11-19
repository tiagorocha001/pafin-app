import { Flex, Progress } from "@mantine/core";
import { UserCircleGear } from "@phosphor-icons/react";
import { SubCard } from "../SubCard";
import styles from "./style.module.css";

interface Props {
  title: string;
  description: string;
  progress: number;
}

const arrowIcon = "\u276E";

export const Card = ({ title, description, progress }: Props) => {
  return (
    <div className={styles.container}>
      <Flex
        gap="16px"
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
        className={styles.header}
      >
        <Flex justify="flex-start" gap={8}>
          <UserCircleGear size={32} color="#4299E1" weight="duotone" />
          <h2>{title}</h2>
        </Flex>
        <div>
          <Flex
            justify="flex-start"
            align="center"
            gap={10}
            className={styles.progress}
          >
            <div style={{ width: "60px" }}>
              <Progress color="#38C97C" size="sm" value={progress} />
            </div>
            <div>1/2ステップ</div>
            <button role="button" className={styles.arrow}>
              {arrowIcon}
            </button>
          </Flex>
        </div>
      </Flex>
      <div className={styles.description}>{description}</div>
      <SubCard />
    </div>
  );
};
