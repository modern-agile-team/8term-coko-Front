export default interface Quiz {
  id: number;
  partId: number;
  sectionId: number;
  title: string;
  question: string;
  answer: string[];
  category: 'COMBINATION' | 'MULTIPLE_CHOICE' | 'OX_SELECTOR' | 'SHORT_ANSWER';
  answerChoice: string[];
}
