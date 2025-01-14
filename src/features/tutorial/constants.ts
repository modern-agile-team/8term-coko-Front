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
    question: '사이트 마스코트의 이름은?',
    sectionId: 1,
    title: '다음 중 틀린것은?',
  },
  {
    id: 3,
    answer: ['O'],
    answerChoice: [],
    category: 'OX_SELECTOR',
    partId: 1,
    question: '코코는 유형별로 자바스크립트 문제를 풀 수 있는 사이트에요',
    sectionId: 1,
    title: '다음 문장이 맞으면 O, 틀리면 X를 선택하세요.',
  },
  {
    id: 4,
    answer: ['O'],
    answerChoice: [],
    category: 'SHORT_ANSWER',
    partId: 1,
    question: '',
    sectionId: 1,
    title: '알맞은 단어를 채워주세요',
  },
] as const;

export const CATEGORY_STEP: Record<
  Exclude<Quiz['category'], 'COMBINATION'>,
  string
> = {
  MULTIPLE_CHOICE: '객관식 설명',
  OX_SELECTOR: 'OX 설명',
  SHORT_ANSWER: '단답형 설명',
} as const;
