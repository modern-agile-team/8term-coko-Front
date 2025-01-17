import { findDirection } from '@/features/tutorial/service/utils';
import { PopupPosition } from '@/features/tutorial/types';
import { css, keyframes, styled } from 'styled-components';

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
  > p {
    position: absolute;
    top: 30px;
    background-color: transparent;
  }
  > img {
    position: absolute;
    z-index: 101;
  }
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
  background-color: rgba(0, 0, 0, 0.7);
  mix-blend-mode: hard-light;
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

export const TutorialPopupWrapper = styled.div<{
  $popupPosition: DOMRect | null;
}>`
  position: absolute;
  z-index: 1001;
  pointer-events: none;
  user-select: none;
  ${({ $popupPosition }) => {
    if ($popupPosition) {
      return css`
        ${findDirection($popupPosition)}
      `;
    }
  }}
  > p {
    white-space: pre-line;
    position: absolute;
    top: 150px;
    left: 120px;
  }
  > img {
    width: 300px;
    height: 280px;
  }
`;
