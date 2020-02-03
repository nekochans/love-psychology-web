export type LoveType = {
  type: string;
  description: string;
  message: string;
};

export const fetchResult = (): LoveType => {
  return {
    type: '非愛タイプ',
    description: '全ての要素が足りない。表面的な人間関係',
    message:
      '恋愛タイプに関するメッセージ等を記載する。あああああああああああああああああああああああああああああああああああああああああああああああ。',
  };
};
