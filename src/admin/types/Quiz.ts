export default interface Quiz {
  id?: number;
  part: 'EASY' | 'NORAML' | 'HARD' | 'VERY_HARD';
  sectionId: number;
  title: string;
  question: string;
  answer: string[];
  category: 'COMBINATION' | 'MULTIPLE_CHOICE' | 'OXSELECTOR' | 'SHORTANSWER';
  answerChoice?: string[];
}
