import { Container, Flex } from "@mantine/core";
import { Card } from "../components/Card";

export const Home = () => {
  return (
    <Container size="1200px" className="main">
      <Flex
        gap="16px"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        <div>
            <h1>クリプタクトで計算を始めてみましょう</h1>
        </div>
        <div className="left-panel">
            <Card />
        </div>
        <div className="right-panel">
            2
        </div>
      </Flex>
    </Container>
  );
};
