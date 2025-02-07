import { calculateTutorialPopupPosition } from '@/features/intro/service/utils';
import { animations } from '@/style/animations';
import { media } from '@/style/media';
import { css, styled } from 'styled-components';

export const FocusedItemDiv = styled.div`
  position: absolute;
  background-color: rgb(128, 128, 128);
`;

export const TutorialClearWrapper = styled.div`
  animation: ${animations.fadeInScaleUpForCenter} 0.7s ease-out;
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
        ${calculateTutorialPopupPosition($popupPosition)}
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
  ${media.mobile} {
    > img {
      display: none;
    }
    > p {
      position: relative;
      color: #fff;
      top: initial;
      left: initial;
    }
  }
`;
