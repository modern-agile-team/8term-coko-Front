import { calculateTutorialPopupPosition } from '@/features/intro/service/utils';
import { MEDIA, ANIMATIONS, Z_INDEX } from '@/style/constants';
import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';

export const FocusedItemDiv = styled.div`
  position: absolute;
  background-color: rgb(128, 128, 128);
`;

export const TutorialClearWrapper = styled.div`
  width: 608px;
  height: 255px;
  animation: ${ANIMATIONS.fadeInScaleUpForCenter} 0.7s ease-out;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #eacfa4;
  border-bottom: 6px solid #d4b383;
  border-radius: 40px;
  padding: 20px;
  font-weight: 700;

  ${MEDIA.mobile} {
    width: 85%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;

    ${MEDIA.mobile} {
      margin-left: 0;
    }
  }

  > img {
    width: 232px;
    height: 187px;

    ${MEDIA.mobile} {
      display: none;
    }
  }

  > div > p {
    font-size: 20px;
    color: #000000;
    text-align: center;
    white-space: pre-line;
    margin-bottom: 20px;
  }

  > div > a {
    width: 210px;
    height: 40px;
    font-size: 17px;
    color: #ffffff;
    border-radius: 10px;
    background: #49c0f8;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 0 4px #38a6dc;

    &:hover {
      background: #7fd6fa;
    }

    &:active {
      box-shadow: none;
      transform: translateY(3px);
    }
  }
`;

export const RedHighlight = styled.span`
  color: #fe0f0f;
  font-weight: 700;
`;

export const BlueHighlight = styled.span`
  color: #00dbe8;
  font-weight: 700;
`;

export const GreenHighlight = styled.span`
  color: #2ad363;
  font-weight: 700;
`;

export const YellowHighlight = styled.span`
  color: #ffb53d;
  font-weight: 700;
`;

export const TutorialPopupWrapper = styled.div<{
  $popupPosition: DOMRect | null;
}>`
  position: absolute;
  z-index: ${Z_INDEX.tutorial};
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
    color: #ffffff;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
    white-space: pre-wrap;
    position: absolute;
    font-weight: 700;
    top: 150px;
    left: 120px;
  }
  > img {
    width: 300px;
    height: 280px;
  }
  ${MEDIA.mobile} {
    > img {
      display: none;
    }
    > p {
      position: relative;
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
  $centerImageOnMobile?: boolean;
}>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
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
      animation: ${ANIMATIONS.slideIn} 1s ease-out;
    `}
  ${MEDIA.mobile} {
    position: relative;
    gap: 0px;
    flex-direction: column;
    > img {
      position: absolute;
      width: 100%;
      height: 300px;
      left: ${({ $orderChange, $centerImageOnMobile }) => {
        if ($centerImageOnMobile) return 'unset';
        return $orderChange ? '20%' : '-20%';
      }};

      ${({ $orderChange }) =>
        $orderChange &&
        css`
          align-items: flex-start;
          text-align: start;
        `};
    }
    > div {
      width: 80%;
      height: 100vh;
      order: -1;
      align-items: flex-end;
      text-align: end;
      ${({ $orderChange }) =>
        !$orderChange &&
        css`
          align-items: flex-start;
          text-align: start;
        `}
    }
  }
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
export const BadgeList = styled.ul<{ $isPaused: boolean }>`
  display: flex;
  animation: ${ANIMATIONS.scrollAnimation} 18s linear infinite;
  animation-play-state: ${({ $isPaused }) =>
    $isPaused ? 'paused' : 'running'};
  ::-webkit-scrollbar {
    display: none;
  }

  > li {
    margin: 0 21px;
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

export const TutorialPromptModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const quizModalStyles = css`
  width: 456px;
  height: 227px;
  background: #eacfa4;
  border-radius: 30px;
  border-bottom: 6px solid #d4b383;
`;

const defaultModalStyles = css`
  width: 562px;
  height: 341px;
  background: #fff;
  border-radius: 25px;
  border-bottom: 6px solid #e5e5e5;
`;

const quizTitleStyles = css`
  font-size: 24px;
  font-family: Maplestory;
  color: #000000;

  ${MEDIA.mobile} {
    font-size: 22px;
  }
`;

const defaultTitleStyles = css`
  font-size: 30px;
  font-family: goorm Sans;
  color: #00dbe8;

  ${MEDIA.mobile} {
    font-size: 28px;
  }
`;

const quizButtonStyles = css`
  width: 102px;
  height: 40px;
  font-size: 17px;
  font-family: Maplestory;
  border-radius: 10px;

  ${MEDIA.mobile} {
    font-size: 15px;
    width: 102px;
  }
`;

const defaultButtonStyles = css`
  width: 326px;
  height: 50px;
  font-size: 20px;
  font-family: goorm Sans;
  border-radius: 20px;

  ${MEDIA.mobile} {
    font-size: 18px;
    width: min(70vw, 326px);
  }
`;

const quizFirstButtonStyles = css`
  background: #ff3f3d;
  box-shadow: 0 4px #eb0000;
  color: #fff;
  &:hover {
    background: #ff6b69;
  }
`;

const defaultFirstButtonStyles = css`
  background: #fff;
  box-shadow: 0 4px #e5e5e5;
  color: #000;
  &:hover {
    background: #f0f0f0;
  }
`;

const quizSecondButtonStyles = css`
  background: #2ad363;
  box-shadow: 0 4px #00bc37;
  color: #fff;
  &:hover {
    background: #4ce387;
  }
`;

const defaultSecondButtonStyles = css`
  background: #00d9e9;
  box-shadow: 0 4px #00b6c0;
  color: #fff;
  &:hover {
    background: #33e0f0;
  }
`;

const quizContentDivStyles = css`
  flex-direction: row;
  gap: 60px;
  margin-top: 20px;
`;

const defaultContentDivStyles = css`
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

export const TutorialPromptModalContent = styled.div<{
  $isQuizTutorialPage: boolean;
}>`
  ${({ $isQuizTutorialPage }) =>
    $isQuizTutorialPage ? quizModalStyles : defaultModalStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  animation: ${ANIMATIONS.fadeInScaleUpForCenter} 0.7s ease-out;

  ${MEDIA.mobile} {
    width: 85%;
  }

  > h2 {
    font-weight: 700;
    margin-top: 60px;
    line-height: 30px;
    ${({ $isQuizTutorialPage }) =>
      $isQuizTutorialPage ? quizTitleStyles : defaultTitleStyles};
  }

  > div {
    display: flex;
    ${({ $isQuizTutorialPage }) =>
      $isQuizTutorialPage ? quizContentDivStyles : defaultContentDivStyles};
  }

  > div > button {
    margin: 5px 0;
    border: none;
    font-weight: 700;
    ${({ $isQuizTutorialPage }) =>
      $isQuizTutorialPage ? quizButtonStyles : defaultButtonStyles};

    &:nth-child(1) {
      ${({ $isQuizTutorialPage }) =>
        $isQuizTutorialPage ? quizFirstButtonStyles : defaultFirstButtonStyles};
    }

    &:nth-child(2) {
      ${({ $isQuizTutorialPage }) =>
        $isQuizTutorialPage
          ? quizSecondButtonStyles
          : defaultSecondButtonStyles};
    }

    &:active {
      box-shadow: none;
      transform: translateY(3px);
    }
  }
`;

export const IntroHeaderWrapper = styled.header`
  width: 100%;
  height: 79px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 52px 0 61px;
  justify-content: space-between;
  box-shadow: 0px 4px #e5e5e5;

  img {
    width: 65px;
    height: 52px;
    cursor: pointer;
  }

  > div {
    display: flex;
    gap: 40px;
  }
  ${MEDIA.mobile} {
    img {
      display: none;
    }
    > div {
      gap: 10px;
    }
  }
`;

export const IntroHeaderLink = styled(Link)<{ $active: boolean }>`
  background: #fff;
  text-align: center;
  font-family: 'goorm Sans OTF';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.16px;
  border: none;
  background-color: inherit;
  text-decoration: none;
  color: ${({ $active }) => ($active ? '#00D9E9' : '#000')};
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 20px;
  button {
    width: 100%;
    height: 100%;
  }
  ul {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  li {
    width: 100%;
    display: flex;
    border: 1px solid #000;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
