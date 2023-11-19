import { Flex } from "@mantine/core";
import styles from './style.module.css';

export const Card = () => {
  return (
    <div className={styles.container}>
      <Flex
        gap="16px"
        justify="space-between"
        align="flex-end"
        direction="row"
        wrap="wrap"
      >
        <div>
            <h4>Card Test</h4>
        </div>
        <div>
            2
        </div>
      </Flex>
    </div>
  );
};
