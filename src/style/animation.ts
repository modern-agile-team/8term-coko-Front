// animations.js
import { keyframes } from 'styled-components';

// 흐르듯이 나타나는 애니메이션
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// 아래에서 위로 나타나는 애니메이션
export const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 페이드 인 및 스케일 업 애니메이션
export const fadeInScaleUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9); 
  }
  100% {
    opacity: 1;
    transform: scale(1); 
  }
`;

// 왼쪽에서 슬라이드 인 애니메이션
export const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// 페이드 아웃 및 스케일 다운 애니메이션
export const fadeOutScaleDown = keyframes`
  0% {
    opacity: 1;
    transform: scale(1); 
  }
  100% {
    opacity: 0;
    transform: scale(0.9); 
  }
`;

// 바운스 애니메이션
export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

// 회전 애니메이션
export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// 위아래 흔들림 애니메이션
export const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25%, 75% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
`;

// 점프 애니메이션
export const jump = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
`;
