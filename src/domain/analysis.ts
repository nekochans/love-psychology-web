export interface Question {
  id: number;
  text: string;
}

export interface Answer {
  value: string;
  text: string;
}

export const fetchQuestions = (): Question[] => {
  return [
    {
      id: 1,
      text: '私にとって○○さんとの関係よりも大切なものなど他にはない',
    },
    {
      id: 2,
      text: '私と○○さんとの関わりは揺るぎないものである',
    },
    {
      id: 3,
      text: '○○さんは私にとって非常に魅力的な人だ',
    },
    {
      id: 4,
      text: '○○さんとの関係は居心地のよいものである',
    },
    {
      id: 5,
      text: '○○さんについて空想にふけることがある',
    },
    {
      id: 6,
      text: '○○さんなしの生活など考えられない',
    },
    {
      id: 7,
      text: '○○さんを見るだけでドキドキしてしまう',
    },
    {
      id: 8,
      text: '○○さんとの関わりは何ものにも邪魔されないものである',
    },
    {
      id: 9,
      text: '私は必要なときには○○さんを頼る事ができる',
    },
    {
      id: 10,
      text: '○○さんとの関係を終わらせることなど私には考えられない',
    },
    {
      id: 11,
      text:
        'ロマンチックな映画を見たり本を読んだりすると、つい○○さんのことを考えてしまう',
    },
    {
      id: 12,
      text: '○○さんとはうまくコミュニケーションをとれている',
    },
    {
      id: 13,
      text: 'ふと気がつくと○○さんの事を考えているときがよくある',
    },
    {
      id: 14,
      text: '私と○○さんの関係は温かいものである',
    },
    {
      id: 15,
      text: '○○さんは必要なときには私を頼ることができる',
    },
  ];
};

export const fetchAnswers = (): Answer[] => {
  return [
    { value: '1', text: 'とても当てはまる' },
    { value: '2', text: '' },
    { value: '3', text: 'やや当てはまる' },
    { value: '4', text: '' },
    { value: '5', text: 'どちらともいえない' },
    { value: '6', text: '' },
    { value: '7', text: 'あまり当てはまらない' },
    { value: '8', text: '' },
    { value: '9', text: '全く当てはまらない' },
  ];
};
