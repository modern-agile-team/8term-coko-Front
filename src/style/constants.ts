import { keyframes } from 'styled-components';

export const ANIMATIONS = {
  fadeIn: keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `,
  slideIn: keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  `,
  fadeInScaleUp: keyframes`
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  `,
  fadeInSlideUp: keyframes`
    0% { opacity: 0; transform: translate(-50%, 10px); }
    100% { opacity: 1; transform: translate(-50%, 0); }
  `,
  slideInFromLeft: keyframes`
    0% { transform: translateX(-100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  `,
  fadeInAndDrop: keyframes`
    0% { opacity: 0; transform: translate(-50%, -20px); }
    100% { opacity: 1; transform: translate(-50%, 0); }
  `,
  fadeOutScaleDown: keyframes`
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.9); }
  `,
  bounce: keyframes`
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-30px); }
    60% { transform: translateY(-15px); }
  `,
  rotate: keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `,
  shake: keyframes`
    0%, 100% { transform: translateX(0); }
    25%, 75% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
  `,
  jump: keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-50px); }
    100% { transform: translateY(0); }
  `,
  shimmerLoading: keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  `,
  fadeInScaleUpForCenter: keyframes`
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`,
  float: keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
`,
  slamDown: keyframes`
  0% { transform: translateY(-100%) scale(0.9); opacity: 0;}
  70% { transform: translateY(0) scale(1.2); opacity: 1; }
  100% { transform: translateY(0) scale(1); }
`,
  scrollAnimation: keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`,
} as const;

export const Z_INDEX = {
  overlay: 10000,
  tutorial: 10001,
  learnHeader: 1000,
  AttendanceDayCell: 1000,
  menu: 99,
  header: 1001,
  popover: 101,
  loading: 9999,
  defaultCosmeticItem: 30,
  footwear: 20,
  frame: 20,
} as const;

export const MEDIA = {
  desktop: '@media (min-width: 1280px)',
  tablet: '@media (min-width: 768px) and (max-width: 1279px)',
  mobile: '@media (max-width: 767px)',
} as const;

export const MEDIA_QUERY_MAP = {
  mobile: '(max-width: 768px)',
  tablet: '(min-width: 769px) and (max-width: 1279px)',
  desktop: '(min-width: 1280px)',
} as const;
