import { TutorialStep } from '@/features/intro/types';
import type { Quiz } from '@/features/quiz/types';
import type { Section } from 'features/learn/types';

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

export const QUIZ_TUTORIAL_STEP: TutorialStep[] = [
  {
    name: '진행도 설명1',
    id: 'progress-bar',
    nextStep: '진행도 설명2',
    description: '이건 진행바야.',
  },
  {
    name: '진행도 설명2',
    id: 'progress-bar',
    nextStep: '목숨 설명',
    description: `얼마나 문제를 풀었고 
    얼마나 남았는지 알 수 있지`,
  },
  {
    name: '목숨 설명',
    id: 'header-item-과일바구니',
    nextStep: '포인트 설명',
    description: `이 과일은 목숨이고
            문제를 틀리면 하나씩 감소해`,
  },
  {
    name: '포인트 설명',
    id: 'header-item-포인트',
    nextStep: '조합형 설명',
    description: '이건 포인트야',
  },
  {
    name: '조합형 설명',
    id: 'combination',
    nextStep: '스킵 설명',
    description: `조합형의 문제는 요소를 클릭하거나
            마우스로 끌어다 놓으면 돼!`,
  },
  {
    name: '스킵 설명',
    id: 'skip-button',
    nextStep: '제출 설명',
    description: `스킵 버튼으로 
            모르는 문제는 넘길 수 있어!`,
  },
  {
    name: '제출 설명',
    id: 'submit-button',
    nextStep: '',
    description: `답을 입력하고 이 버튼을 누르면
            다음 문제로 넘어가`,
  },
  {
    name: '객관식 설명',
    id: 'multiple-choice',
    nextStep: '',
    description: `객관식 문제는 4지선다형으로
            문제에 맞는 답을 선택하면 돼!`,
  },
  {
    name: 'OX 설명',
    id: 'ox-selector',
    nextStep: '',
    description: `문제를 보고 O랑 X중에 옳은것을 선택하면 돼!`,
  },
  {
    name: '단답형 설명',
    id: 'short-answer',
    nextStep: '',
    description: `단답형 문제는 여기에 정답을 써넣으면 돼!`,
  },
] as const;

export const LEARN_TUTORIAL_STEP: TutorialStep[] = [
  {
    name: '전체 & 파트 진행도 설명',
    id: 'learn-progress-bar',
    nextStep: '섹션 선택 버튼 설명',
    description: `이건 퀴즈 전체 또는 각 파트의 몇 문제를 풀었는지 보여주는 진행바야!`,
  },
  {
    name: '섹션 선택 버튼 설명',
    id: 'select-section-button',
    nextStep: '키캡 버튼 설명',
    description: `이 섬은 섹션을 뜻해.
    선택하면 해당 섹션으로 이동하게 되지!`,
  },
  {
    name: '키캡 버튼 설명',
    id: 'keycap-button',
    nextStep: '퀴즈 팝오버 설명',
    description: `파트(키캡) 버튼을 누르면
            퀴즈를 풀 수 있는 화면으로 이동할 수 있어!`,
  },
  {
    name: '퀴즈 팝오버 설명',
    id: 'quiz-popover',
    nextStep: '',
    description: `이제 본격적으로 모험을 떠나기 전에 퀴즈를 푸는 방법에 대해 알아보자!`,
  },
] as const;

export const LEARN_TUTORIAL_SECTIONS: Section[] = [
  {
    id: 2,
    name: '변수',
    parts: [
      {
        id: 10,
        sectionId: 2,
        name: '식별자',
        status: 'COMPLETED',
      },
      {
        id: 13,
        sectionId: 2,
        name: '표현식',
        status: 'STARTED',
      },
      {
        id: 4,
        sectionId: 2,
        name: '변수란 무엇인가?',
        status: 'COMPLETED',
      },
      {
        id: 36,
        sectionId: 2,
        name: '변수 선언',
        status: 'LOCKED',
      },
    ],
  },
  {
    id: 3,
    name: '자료형',
    parts: [
      {
        id: 35,
        sectionId: 3,
        name: 'undefined 타입',
        status: 'STARTED',
      },
      {
        id: 37,
        sectionId: 3,
        name: '숫자 타입',
        status: 'LOCKED',
      },
      {
        id: 38,
        sectionId: 3,
        name: '문자 타입',
        status: 'LOCKED',
      },
    ],
  },
] as const;

export const PAGE_INTRO_DATA: {
  label: string;
  mainTitle: string;
  description: string;
  image: string;
  orderChange: boolean;
  backgroundColor: string;
}[] = [
  {
    label: 'QUEST',
    mainTitle: '매일 달라지는\n미션들',
    description: '공부에 의욕을 더해주는 미션들.',
    image: '소개-퀘스트.svg',
    orderChange: false,
    backgroundColor: '#fff',
  },
  {
    label: 'RANKING',
    mainTitle: '다른 회원들과\n실력 겨루기',
    description: '성취감과 성장을 도와주는\n다른 회원들과의 선의의 경쟁.',
    image: '소개-랭킹.svg',
    orderChange: false,
    backgroundColor: '#F7F7F7',
  },
  {
    label: 'STORE',
    mainTitle: '나만의\n캐릭터',
    description: '캐릭터를 자신만의 스타일로\n꾸밀 수 있는 상점까지.',
    image: '소개-상점.svg',
    orderChange: true,
    backgroundColor: '#F7F7F7',
  },
] as const;

export const BUTTON_LIST: { category: Quiz['category']; label: string }[] = [
  { category: 'COMBINATION', label: '조합형' },
  { category: 'MULTIPLE_CHOICE', label: '객관식' },
  {
    category: 'SHORT_ANSWER',
    label: '단답형',
  },
  { category: 'OX_SELECTOR', label: 'O, X' },
] as const;

export const COKO_TEAM_INFO: { label: string; createBy: string[] }[] = [
  { label: '만든 사람들', createBy: ['모던애자일 8기'] },
  { label: '프론트', createBy: ['구도윤', '신현성'] },
  { label: '백엔드', createBy: ['홍대경', '이건우', '전희나'] },
  { label: '디자인', createBy: ['이채영'] },
] as const;

export const BADGE_IMAGE_LIST: string[] = [
  '뱃지-파트클리어.svg',
  '뱃지-첫틀림.svg',
  '뱃지-첫아이템.svg',
  '뱃지-첫색상.svg',
  '뱃지-섹션1.svg',
  '뱃지-레벨10.svg',
  '뱃지-404방문.svg',
  '뱃지-일일-퀘스트.svg',
  '뱃지-메인-퀘스트.svg',
  '뱃지-랭킹1등.svg',
  '뱃지-랭킹2등.svg',
  '뱃지-랭킹3등.svg',
  '뱃지-7일출석.svg',
  '뱃지-14일출석.svg',
  '뱃지-30일출석.svg',
] as const;
