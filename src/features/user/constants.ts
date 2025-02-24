export const DEFAULT_POINT = 1500;

export const MAX_RETRIES = 3;

export const OPINIONS_OPTIONS = {
  '버그 제보': {
    dataField: 'bug',
  },
  '기능 추가': {
    dataField: 'feature',
  },
  퀴즈: {
    dataField: 'quiz',
  },
  '직접 입력': {
    dataField: 'etc',
  },
} as const;
