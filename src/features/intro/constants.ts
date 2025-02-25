import { TutorialStep } from '@/features/intro/types';
import type { Quiz } from '@/features/quiz/types';
import type { Section, SectionWithoutParts } from 'features/learn/types';
import {
  RedHighlight,
  BlueHighlight,
  GreenHighlight,
  YellowHighlight,
} from '@features/intro/ui/styles';

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
];

export const CATEGORY_STEP: Record<
  Exclude<Quiz['category'], 'COMBINATION'>,
  string
> = {
  MULTIPLE_CHOICE: '객관식 설명',
  OX_SELECTOR: 'OX 설명',
  SHORT_ANSWER: '단답형 설명',
};

export const markersMap = {
  '*R*': RedHighlight,
  '*B*': BlueHighlight,
  '*G*': GreenHighlight,
  '*Y*': YellowHighlight,
} as const;

export const QUIZ_TUTORIAL_STEP: TutorialStep[] = [
  {
    name: '진행도 설명1',
    id: 'progress-bar',
    nextStep: '진행도 설명2',
    description: '이건 *Y*퀴즈*Y* 페이지의 *R*진행 표시줄*R*이야.',
  },
  {
    name: '진행도 설명2',
    id: 'progress-bar',
    nextStep: '목숨 설명',
    description: '얼마나 문제를 *B*풀었고,*B*\n*B*남았는지*B* 알 수 있지',
  },
  {
    name: '목숨 설명',
    id: 'header-item-과일바구니',
    nextStep: '포인트 설명',
    description:
      '이 과일은 *R*목숨*R*이고\n*R*문제를 틀리면*R* 하나씩 *B*감소*B*해',
  },
  {
    name: '포인트 설명',
    id: 'header-item-포인트',
    nextStep: '조합형 설명',
    description:
      '이건 *Y*포인트*Y*야\n*B*파트*B*를 *Y*클리어하면*Y*\n얻을 수 있어!',
  },
  {
    name: '조합형 설명',
    id: 'combination',
    nextStep: '스킵 설명',
    description:
      '*B*조합형 문제*B*는 *R*요소를 클릭*R*하거나\n*G*마우스로 끌어다 놓으면*G* 돼!',
  },
  {
    name: '스킵 설명',
    id: 'skip-button',
    nextStep: '제출 설명',
    description: '*R*모르는 문제*R*는\n*G*스킵 버튼*G*을 눌러서 넘길 수 있어!',
  },
  {
    name: '제출 설명',
    id: 'submit-button',
    nextStep: '',
    description:
      '정답을 입력하고 *B*이 버튼*B*을 누르면\n*Y*다음 문제*Y*로 넘어가!',
  },
  {
    name: '객관식 설명',
    id: 'multiple-choice',
    nextStep: '',
    description:
      '*B*객관식 문제*B*는 *Y*4지선다형*Y*으로\n*G*문제에 맞는 답*G*을 선택하면 돼!',
  },
  {
    name: 'OX 설명',
    id: 'ox-selector',
    nextStep: '',
    description:
      '문제를 보고 *G*O*G* 또는 *R*X*R* 중에서\n*Y*정답을 선택*Y*하면 돼!',
  },
  {
    name: '단답형 설명',
    id: 'short-answer',
    nextStep: '',
    description: '*B*단답형 문제*B*는 여기에 *G*정답을 써넣으면*G* 돼!',
  },
];

export const LEARN_TUTORIAL_STEP: TutorialStep[] = [
  {
    name: '코코 자기소개1',
    id: 'screen-reader-start',
    nextStep: '코코 자기소개2',
    description: '안녕!\n내 이름은 *B*코코*B*야!',
  },
  {
    name: '코코 자기소개2',
    id: 'screen-reader-start',
    nextStep: '전체 & 파트 진행도 설명1',
    description:
      "지금부터 내가\n우리의 *B*'코코'*B* *Y*사이트*Y*에 대해\n설명 해줄게!",
  },
  {
    name: '전체 & 파트 진행도 설명1',
    id: 'learn-progress-bar',
    nextStep: '전체 & 파트 진행도 설명2',
    description: '이건 *B*학습*B* 페이지의 *R*진행 표시줄*R*이야!',
  },
  {
    name: '전체 & 파트 진행도 설명2',
    id: 'learn-progress-bar',
    nextStep: '섹션 선택 버튼 설명1',
    description:
      '*Y*퀴즈 전체*Y* 또는 *B*하나의 파트*B*에서\n*G*몇 문제를 맞혔는지*G* 확인할 수 있어!',
  },
  {
    name: '섹션 선택 버튼 설명1',
    id: 'select-section-button',
    nextStep: '섹션 선택 버튼 설명2',
    description: '이 섬은 각 *G*섹션*G*을 나타내.',
  },
  {
    name: '섹션 선택 버튼 설명2',
    id: 'select-section-button',
    nextStep: '키캡 버튼 설명1',
    description:
      '원하는 *G*섹션*G*을 선택하면\n해당 *G*섹션*G*으로 *B*이동할 수 있어!*B*',
  },
  {
    name: '키캡 버튼 설명1',
    id: 'keycap-button',
    nextStep: '키캡 버튼 설명2',
    description: '이 *Y*키캡*Y*은 각 *B*파트*B*를 나타내.',
  },
  {
    name: '키캡 버튼 설명2',
    id: 'keycap-button',
    nextStep: '퀴즈 팝오버 설명1',
    description:
      '*Y*키캡을 누르면*Y*\n해당 *B*파트*B*에 대한\n*G*주제가 담긴 말풍선*G*이 나타나!',
  },
  {
    name: '퀴즈 팝오버 설명1',
    id: 'quiz-popover',
    nextStep: '퀴즈 팝오버 설명2',
    description:
      "이런 식으로 *B*파트의 이름*B*과\n*R*'시작'*R* 버튼이 표시 되지.",
  },
  {
    name: '퀴즈 팝오버 설명2',
    id: 'quiz-popover',
    nextStep: '키캡 버튼 설명3',
    description:
      "*R*'시작'*R* 버튼을 누르면\n*Y*해당*Y* *B*파트*B*의 *Y*퀴즈들을 풀 수 있어!*Y*",
  },
  {
    name: '키캡 버튼 설명3',
    id: 'locked-keycap-button',
    nextStep: '키캡 버튼 설명4',
    description: '하지만 이렇게 *Y*키캡*Y*이\n*R*잠겨있는 상태*R*라면,',
  },
  {
    name: '키캡 버튼 설명4',
    id: 'keycap-button',
    nextStep: '퀴즈 팝오버 설명3',
    description:
      '*Y*이전*Y* *B*파트*B*를\n*Y*먼저 풀어야만 열 수 있어!*Y*\n기억해 둬!',
  },
  {
    name: '퀴즈 팝오버 설명3',
    id: 'quiz-popover',
    nextStep: '',
    description:
      '그럼 이제 이 *G*버튼을 눌러*G*\n*Y*퀴즈를 푸는 방법*Y*에 대해 알아보자!',
  },
];

export const LEARN_TUTORIAL_POPOVER_STEPS = new Set([
  '퀴즈 팝오버 설명1',
  '퀴즈 팝오버 설명2',
  '퀴즈 팝오버 설명3',
]);

export const LEARN_TUTORIAL_SECTIONS_PARTS: Section[] = [
  {
    id: 1,
    name: '변수',
    parts: [
      {
        id: 10,
        sectionId: 2,
        name: '튜토리얼!',
        status: 'STARTED',
      },
      {
        id: 13,
        sectionId: 2,
        name: '표현식',
        status: 'LOCKED',
      },
      {
        id: 4,
        sectionId: 2,
        name: '변수란 무엇인가?',
        status: 'LOCKED',
      },
    ],
  },
  {
    id: 2,
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
  {
    id: 3,
    name: '연산자',
    parts: [
      {
        id: 35,
        sectionId: 3,
        name: '할당 연산자',
        status: 'STARTED',
      },
      {
        id: 37,
        sectionId: 3,
        name: '논리 연산자',
        status: 'LOCKED',
      },
    ],
  },
];

export const LEARN_TUTORIAL_SECTIONS: SectionWithoutParts[] = [
  {
    id: 1,
    name: '변수',
  },
  {
    id: 2,
    name: '자료형',
  },
  {
    id: 3,
    name: '연산자',
  },
];

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
];

export const COKO_TEAM_INFO: { label: string; createBy: string[] }[] = [
  { label: '만든 사람들', createBy: ['모던애자일 8기'] },
  { label: '프론트엔드', createBy: ['구도윤', '신현성'] },
  { label: '백엔드', createBy: ['홍대경', '이건우', '전희나'] },
  { label: '디자인', createBy: ['이채영'] },
];

export const BADGE_IMAGE_LIST = [
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

export const MEMBER_DETAILS: Record<
  string,
  { team: string; description: string }
> = {
  홍대경: {
    team: 'BACKEND',
    description:
      'API 설계부터 성능 최적화까지! 백엔드 개발을 책임지고 있습니다.',
  },
  이건우: {
    team: 'BACKEND',
    description: '데이터베이스와 서버 로직을 튼튼하게! 백엔드 개발자입니다.',
  },
  전희나: {
    team: 'BACKEND',
    description: '안정적인 서비스 운영을 목표로 백엔드를 개발하고 있어요.',
  },
  구도윤: {
    team: 'FRONTEND',
    description:
      '멋진 UI와 부드러운 UX를 위해 끊임없이 고민하는 프론트엔드 개발자!',
  },
  신현성: {
    team: 'FRONTEND',
    description: '사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.',
  },
  이채영: {
    team: 'DESIGNER',
    description: '감각적인 디자인과 트렌디한 UI를 만들어가는 디자이너입니다.',
  },
};
