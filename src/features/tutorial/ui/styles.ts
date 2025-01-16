import { keyframes, styled } from 'styled-components';

const slideInFromSide = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
export const EmphasizedItemDiv = styled.div`
  position: absolute;
  display: flex;
  width: 100px;
  height: 100px;
  background-color: rgb(128, 128, 128);
`;

export const TutorialOverRayDiv = styled.div`
  mix-blend-mode: hard-light;
  position: absolute;
  display: flex;
  justify-content: center;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); // 딤드 영역을 어둡게 처리
  mix-blend-mode: hard-light; // 반드시 추가
  z-index: 100;
`;
const fadeInScaleUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8); 
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1); 
  }
`;
export const TutorialClearWrapper = styled.div`
  animation: ${fadeInScaleUp} 0.7s ease-out;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 747.42px;
  height: 372.04px;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 11px #e5e5e5;
`;
