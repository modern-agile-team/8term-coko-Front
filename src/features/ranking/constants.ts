export const RANKING_OPTIONS = {
  레벨순: {
    icon: '레벨.svg',
    dataField: 'level', // 레벨 기준
  },
  '포인트 보유순': {
    icon: '포인트.svg',
    dataField: 'point', // 포인트 기준
  },
  '총 출석일순': {
    icon: '출석체크.svg',
    dataField: 'totalAttendance', // 총 출석일수 기준
  },
  '총 정답수순': {
    icon: '정답.svg',
    dataField: 'totalCorrectAnswer', // 총 정답수 기준
  },
} as const;

export const PRELOAD_IMAGES = ['금통.svg', '은통.svg', '동통.svg'];
