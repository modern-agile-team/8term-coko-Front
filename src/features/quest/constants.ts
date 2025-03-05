export const CHALLENGE_TYPE_COLORS = {
  SECTION_CLEAR: { border: '#73d2ff', background: '#e0f7ff' },
  LEVEL_CLEAR: { border: '#ffdf4a', background: '#fff5c1' },
  ATTENDANCE_STREAK: { border: '#ff6b6b', background: '#ffdfdf' },
  LEVEL_RANKING_ATTAIN: { border: '#ff9800', background: '#ffe0b2' },
  POINT_RANKING_ATTAIN: { border: '#4caf50', background: '#c8e6c9' },
  ATTENDANCE_RANKING_ATTAIN: { border: '#9c27b0', background: '#e1bee7' },
  CORRECT_ANSWER_RANKING_ATTAIN: { border: '#3f51b5', background: '#c5cae9' },
  EVENT: { border: '#795548', background: '#d7ccc8' },
  ALL_SECTIONS_CLEAR: { border: '#a07aff', background: '#e6dcff' },
  FIRST_ITEM_PURCHASE: { border: '#00c853', background: '#b9f6ca' },
  FIRST_WRONG_ANSWER: { border: '#e91e63', background: '#ffc1e3' },
  FIRST_404_VISIT: { border: '#795548', background: '#d7ccc8' },
} as const;

export const CHALLENGE_TYPE_LABELS = {
  SECTION_CLEAR: '섹션',
  LEVEL_CLEAR: '레벨',
  ATTENDANCE_STREAK: '출석',
  LEVEL_RANKING_ATTAIN: '레벨 랭킹',
  POINT_RANKING_ATTAIN: '포인트 랭킹',
  ATTENDANCE_RANKING_ATTAIN: '출석 랭킹',
  CORRECT_ANSWER_RANKING_ATTAIN: '정답 랭킹',
  EVENT: '이벤트',
  ALL_SECTIONS_CLEAR: '섹션 완료',
  FIRST_ITEM_PURCHASE: '아이템 구매',
  FIRST_WRONG_ANSWER: '첫 오답',
  FIRST_404_VISIT: '404 방문',
} as const;

export const EVENT_CHALLENGE_TYPES = [
  'ALL_SECTIONS_CLEAR',
  'FIRST_ITEM_PURCHASE',
  'FIRST_WRONG_ANSWER',
  'FIRST_404_VISIT',
] as const;
