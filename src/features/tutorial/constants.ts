import { Quiz } from '@/features/quiz/types';

export const TUTORIAL_ID = 1 as const;

export const TUTORIAL_QUIZZES: Quiz[] = [
  {
    id: 1,
    answer: ['코코'],
    answerChoice: ['안녕', '코코', '슝슝'],
    category: 'COMBINATION',
    partId: TUTORIAL_ID,
    question: '안녕 , #empty#',
    sectionId: TUTORIAL_ID,
    title: '',
  },
  {
    id: 2,
    answer: ['코코'],
    answerChoice: ['캬캬', '코코', '키키', '퓨퓨'],
    category: 'MULTIPLE_CHOICE',
    partId: TUTORIAL_ID,
    question: '사이트 마스코트의 이름은?',
    sectionId: TUTORIAL_ID,
    title: '다음 중 틀린것은?',
  },
  {
    id: 3,
    answer: ['O'],
    answerChoice: [],
    category: 'OX_SELECTOR',
    partId: TUTORIAL_ID,
    question: '코코는 유형별로 자바스크립트 문제를 풀 수 있는 사이트에요',
    sectionId: TUTORIAL_ID,
    title: '다음 문장이 맞으면 O, 틀리면 X를 선택하세요.',
  },
  {
    id: 4,
    answer: ['cokoedu.com'],
    answerChoice: [],
    category: 'SHORT_ANSWER',
    partId: TUTORIAL_ID,
    question: '사이트의 주소는?',
    sectionId: TUTORIAL_ID,
    title: '알맞은 단어를 채워주세요.',
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
