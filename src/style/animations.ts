import { keyframes } from 'styled-components';

export const animations = {
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
  fadeInScaleUpForCenter: keyframes`
  from {
    opacity: 0; 
    transform: translate(-50%, -50%) scale(0.5); 
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1); 
  }`,
  float: keyframes`
  0% {
    transform: translateY(0); 
  }
  50% {
    transform: translateY(-10px); 
  }
  100% {
    transform: translateY(0); 
}
`,
} as const;
