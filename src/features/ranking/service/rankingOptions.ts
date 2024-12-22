interface RankingOption {
  icon: string;
  dataField: 'level' | 'point';
}

const rankingOptions: Record<string, RankingOption> = {
  '포인트 보유순': {
    icon: '포인트.svg',
    dataField: 'point', // 포인트 기준
  },
  '레벨순': {
    icon: '과일바구니.svg',
    dataField: 'level', // 레벨 기준
  },
};

export default rankingOptions;