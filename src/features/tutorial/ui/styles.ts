import { keyframes, styled } from 'styled-components';

export const EmphasizedItemDiv = styled.div`
  position: absolute;
  display: flex;
  > p {
    position: absolute;
    top: 55%;
    left: 40%;
    z-index: 101;
  }
  > img {
    position: relative;
    z-index: 100;
  }
`;
export const TutorialOverRayDiv = styled.div`
  top: -60px;
  left: 150px;
  width: 130px;
  height: 130px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 5;
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
