export default interface Quiz {
  id: number;
  partId: number;
  sectionId: number;
  title: string;
  question: string;
  answer: string[];
  category: 'Combination' | 'MultipleChoice' | 'OXSelector' | 'ShortAnswer';
  answerChoice: string[];
}
