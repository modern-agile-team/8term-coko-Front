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
  z-index: 10001;
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
    color: #19191b;
    white-space: pre-line;
    position: absolute;
    font-weight: 700;
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
      background: #ffefaa;
      top: initial;
      left: initial;
    }
  }
`;

export const IntroImage = styled.img`
  width: 787px;
  height: 497px;
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: scale(1.07);
  }
`;

export const PageIntroWrapper = styled.section<{
  $orderChange: boolean;
  $backgroundColor: string;
  $isVisible: boolean;
}>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  gap: 70px;

  > div {
    ${({ $orderChange }) => ($orderChange ? 'order: 2;' : '')}
  }
  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${animations.slideIn} 1s ease-out;
    `}
`;

export const IntroCard = styled.div<{ $alignItems: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $alignItems }) => $alignItems};
  white-space: pre-line;
  > h1 {
    color: #00d9e9;
  }
  > h3 {
    color: #00d9e9;
    font-weight: 600;
  }
  > p {
    margin-top: 24px;
    color: #19191b;
    font-family: 'Wanted Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    white-space: pre-line;
  }
`;

export const BadgeContainer = styled.div`
  width: 100vw;
  display: flex;
  overflow-x: auto;
  height: 247px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const BadgeList = styled.ul`
  display: flex;
  gap: 43px;
  ::-webkit-scrollbar {
    display: none;
  }

  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 232.986px;
    border-radius: 8px;
    border: 2px solid #ffe161;
    background: #ffefaa;
    padding: 30px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
