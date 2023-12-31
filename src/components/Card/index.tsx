import { useState } from "react";
import { Flex, Progress } from "@mantine/core";
import { UserCircleGear, Gear, ListChecks } from "@phosphor-icons/react";
import { SubCard, SubCardProps } from "../SubCard";
import styles from "./style.module.css";

export interface CardProps {
  title: string;
  description: string;
  progress: number;
  type: "user" | "config" | "todo";
  expanded: boolean;
  subCardsData: SubCardProps[];
}

const arrowIcon = "\u276E";

export const Card = ({
  title,
  description,
  progress,
  type,
  expanded,
  subCardsData,
}: CardProps) => {
  const [isOpened, setIsOpened] = useState(expanded);

  // Check completed amount count
  function countCompletedItems(items: SubCardProps[]) {
    return items.filter((item: SubCardProps) => item.completed).length;
  }

  // Main title icon selector
  function titleIcon() {
    if (type === "user") {
      return <UserCircleGear size={32} color="#4299E1" weight="duotone" />;
    } else if (type === "config") {
      return <Gear size={32} color="#4299E1" weight="duotone" />;
    } else if (type === "todo") {
      return <ListChecks size={32} color="#4299E1" weight="duotone" />;
    }
  }

  const [completed] = useState(countCompletedItems(subCardsData));

  return (
    <div
      className={
        subCardsData.length > 0 ? styles.container : styles.containerNoSubCard
      }
    >
      <Flex
        gap="16px"
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
        className={styles.header}
      >
        <Flex justify="flex-start" gap={8}>
          {titleIcon()}
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
            <div>
              {completed}/{subCardsData.length} ステップ
            </div>
            <button
              role="button"
              className={isOpened ? styles.arrowUp : styles.arrowDown}
              onClick={() => setIsOpened((prev) => !prev)}
            >
              {arrowIcon}
            </button>
          </Flex>
        </div>
      </Flex>
      <div className={styles.description}>{description}</div>
      <div className={isOpened ? styles.open : styles.close}>
        {!!subCardsData.length &&
          subCardsData.map((item, index) => (
            <SubCard key={item.title + index} {...item} />
          ))}
      </div>
    </div>
  );
};
