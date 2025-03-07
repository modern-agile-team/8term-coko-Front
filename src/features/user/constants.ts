export const DEFAULT_POINT = 1500;

export const MAX_RETRIES = 3;

export const OPINIONS_OPTIONS = [
  { label: '버그 제보', id: 1 },
  { label: '기능 추가', id: 2 },
  { label: '직접 입력', id: 3 },
] as const;

export const ERROR_MESSAGES = {
  REQUIRED_CONTENT: '내용은 필수 입력 사항입니다.',
  CONTENT_TOO_LONG: '내용은 255자 이하로 입력해주세요.',
  REQUIRED_TITLE: '제목을 입력해주세요.',
  REQUIRED_QUIZ: '퀴즈를 선택해주세요.',
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
} as const;

export const CHALLENGE_TYPE_COLORS = {
  SECTION_CLEAR: '#73d2ff', // 밝은 하늘색
  LEVEL_CLEAR: '#ffdf4a', // 노란색
  ATTENDANCE_STREAK: '#ff6b6b', // 빨간색
  LEVEL_RANKING_ATTAIN: '#ff9800', // 주황색
  POINT_RANKING_ATTAIN: '#4caf50', // 초록색
  ATTENDANCE_RANKING_ATTAIN: '#9c27b0', // 보라색
  CORRECT_ANSWER_RANKING_ATTAIN: '#3f51b5', // 남색
  EVENT: '#795548', // 갈색
} as const;

export const EVENT_CHALLENGE_GROUP = [
  'ALL_SECTIONS_CLEAR',
  'FIRST_ITEM_PURCHASE',
  'FIRST_WRONG_ANSWER',
  'FIRST_404_VISIT',
] as const;
