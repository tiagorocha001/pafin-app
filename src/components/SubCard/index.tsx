import { Flex } from "@mantine/core";
import { CheckCircle } from "@phosphor-icons/react";
import styles from "./style.module.css";

export const SubCard = () => {
  return (
    <div className={styles.container}>
      <Flex
        gap="8px"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
        className={styles.header}
      >
        <CheckCircle size={20} color="#38C97C" weight="fill" style={{marginTop: "4px"}} />
        <div>
          <h3>取引所 / ブロックチェーンを選択しましょう</h3>
          <span className={styles.alert}>13 取引所/ブロックチェーン選択済み</span>
        </div>
      </Flex>
    </div>
  );
};
