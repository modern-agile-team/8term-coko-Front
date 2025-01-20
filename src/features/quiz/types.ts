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

export type ModalType =
  | 'result'
  | 'loginPrompt'
  | 'login'
  | 'totalResult'
  | 'partClear'
  | 'goBack';
