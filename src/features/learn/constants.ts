export const PRELOAD_IMAGES = [
  '코코-멘트1.svg',
  '코코-멘트2.svg',
  '코코-멘트3.svg',
  '코코-멘트4.svg',
  '코코-멘트5.svg',
  '키캡1.svg',
  '키캡2.svg',
  '키캡3.svg',
  '키캡4.svg',
  '키캡1-선택.svg',
  '키캡2-선택.svg',
  '키캡3-선택.svg',
  '키캡4-선택.svg',
  '섬1.svg',
  '섬2.svg',
  '섬3.svg',
  '섬4.svg',
  '섬5.svg',
  '앉은-코코.svg',
];

export const COLORS = [
  '#007BFF', // 파란색
  '#FAC608', // 노란색
  '#F05650', // 빨간색
  '#2DB400', // 초록색
] as const;

export const PROGRESS_COLORS = {
  global: {
    boxBg: '#85705F',
    innerBg: '#BFD683',
    text: '#5A4A3C',
    icon: '🌍',
  },
  part: {
    boxBg: '#9E8874',
    innerBg: '#A3C989',
    text: '#4A3C2E',
    icon: '📌',
  },
} as const;

export const MAX_ATTEMPTS = 5 as const;
