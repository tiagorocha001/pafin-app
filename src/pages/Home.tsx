import { Container, Flex } from "@mantine/core";
import { Card } from "../components/Card";

const cardData1 = {
  title: "取引の情報を入力しましょう",
  description: "仮想通貨の損益計算には過去すべての取引履歴が必要になります。",
  progress: 50,
};

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
          <Card title={cardData1.title} description={cardData1.description} progress={cardData1.progress} />
        </div>
        <div className="right-panel">2</div>
      </Flex>
    </Container>
  );
};
