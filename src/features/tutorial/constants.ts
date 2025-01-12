import { Quiz } from '@/features/quiz/types';

export const TUTORIAL_QUIZZES: Quiz[] = [
  {
    id: 1,
    answer: ['코코'],
    answerChoice: ['안녕', '코코'],
    category: 'COMBINATION',
    partId: 1,
    question: '안녕 , #empty#',
    sectionId: 1,
    title: '빈칸을 채우시오.',
  },
  {
    id: 2,
    answer: ['코코'],
    answerChoice: ['안녕', '코코'],
    category: 'MULTIPLE_CHOICE',
    partId: 1,
    question: '',
    sectionId: 1,
    title: '다음 중 틀린것은?',
  },
] as const;
