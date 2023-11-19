import { Container, Flex } from "@mantine/core";
import { Card } from "../components/Card";
import { Alert } from "../components/Alert";
import { cardData1, cardData2, cardData3, alerts } from "../_mockData/data";

export const Home = () => {
  return (
    <Container size="90%" className="main">
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
          <Card
            {...cardData1}
          />
          <Card
            {...cardData2}
          />
          <Card
            {...cardData3}
          />
        </div>
        <div className="right-panel">
            <h5>クイックアクセス</h5>
            {alerts.length > 0 && (
                alerts.map((item) => <Alert key={item.title} {...item} />)
            )}
        </div>
      </Flex>
    </Container>
  );
};
