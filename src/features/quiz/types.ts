export interface Quiz {
  id: number;
  partId: number;
  sectionId: number;
  title: string;
  question: string;
  answer: string[];
  category: 'COMBINATION' | 'MULTIPLE_CHOICE' | 'OX_SELECTOR' | 'SHORT_ANSWER';
  answerChoice: string[];
}

export type CaseByModal =
  | '결과'
  | '로그인 유도'
  | '로그인'
  | '총결과'
  | '파트 클리어'
  | '뒤로가기';
