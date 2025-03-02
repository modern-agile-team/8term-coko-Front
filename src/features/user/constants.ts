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
