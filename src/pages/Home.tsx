import { Container, Flex } from "@mantine/core";
import { Card, CardProps } from "../components/Card";

const cardData1: CardProps = {
  title: "取引の情報を入力しましょう",
  description: "仮想通貨の損益計算には過去すべての取引履歴が必要になります。",
  progress: 50,
  type: "user",
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
      description:
        "ファイルやAPI連携で履歴を反映させることができます。DeFiの取引はウォレットアドレスを入力することで取引内容まで自動識別することができます。",
      active: true,
      button: "追加する",
      completed: false,
    },
  ],
};

const cardData2: CardProps = {
  title: "足りていない情報を追加しましょう",
  description: "情報が不足していると計算が完了しません。必ず追加してください。",
  progress: 0,
  type: "config",
  subCardsData: [
    {
      title: "DeFi取引における「要識別」を解消しましょう",
      alert: "",
      alertSecondary:
        "お客様はDeFi 取引が無い為、完了したものとして認識しました。",
      description:
        "必要な情報が足りていないため、自動で識別できなかった取引や、DeFi取引以外の入出金取引については、「要識別」として分類されます。このページで取引種類を選択し、計算ができる状態にしてください。",
      active: false,
      button: "選択する",
      completed: false,
    },
    {
      title: "未分類取引を解消しましょう",
      alert: "",
      description:
        "アップロードされた全ての取引を集計する過程で、クリプタクトが処理出来なかった取引は、「未分類取引」として分類されます。未分類取引は損益計算から除外されるため、ウィザード機能を活用し必ず解消してください。",
      active: false,
      button: "追加する",
      completed: false,
    },
  ],
};

const cardData3: CardProps = {
  title: "計算結果を確認しましょう",
  description:
    "計算結果の最終的なチェックを行って確定申告に必要な情報を確認しましょう。最後にデータをダウンロードできます。",
  progress: 0,
  type: "todo",
  subCardsData: [],
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
            type={cardData1.type}
          />
          <Card
            title={cardData2.title}
            description={cardData2.description}
            progress={cardData2.progress}
            subCardsData={cardData2.subCardsData}
            type={cardData2.type}
          />
          <Card
            title={cardData3.title}
            description={cardData3.description}
            progress={cardData3.progress}
            subCardsData={cardData3.subCardsData}
            type={cardData3.type}
          />
        </div>
        <div className="right-panel">2</div>
      </Flex>
    </Container>
  );
};
