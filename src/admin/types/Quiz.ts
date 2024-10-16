export default interface Quiz {
  id?: number;
  part: 'EASY' | 'NORAML' | 'HARD' | 'VERY_HARD';
  sectionId: number;
  title: string;
  question: string;
  answer: string[];
  category: 'Combination' | 'MultipleChoice' | 'OXSelector' | 'ShortAnswer';
  answerChoice?: string[];
}
