import { Container, Flex } from "@mantine/core";
import { Card, CardProps } from "../components/Card";

const cardData1: CardProps = {
  title: "取引の情報を入力しましょう",
  description: "仮想通貨の損益計算には過去すべての取引履歴が必要になります。",
  progress: 50,
  subCardsData: [
    {
      title: "取引所 / ブロックチェーンを選択しましょう",
      alert: "13 取引所/ブロックチェーン選択済み",
      description:
        "取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。",
      active: true,
      button: "選択する",
      completed: true,
    },
    {
        title: "取引履歴を反映させましょう",
        alert: "",
        description: "ファイルやAPI連携で履歴を反映させることができます。DeFiの取引はウォレットアドレスを入力することで取引内容まで自動識別することができます。",
        active: true,
        button: "追加する",
        completed: false,
      },
  ],
};

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
            title={cardData1.title}
            description={cardData1.description}
            progress={cardData1.progress}
            subCardsData={cardData1.subCardsData}
          />
        </div>
        <div className="right-panel">2</div>
      </Flex>
    </Container>
  );
};
