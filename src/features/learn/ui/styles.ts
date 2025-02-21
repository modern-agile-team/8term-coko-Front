import styled from 'styled-components';
import { getImageUrl } from '@utils/getImageUrl';
import { MEDIA, ANIMATIONS, Z_INDEX } from '@/style/constants';

export const SectionBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${MEDIA.mobile} {
    margin-top: 65px;
    gap: 5px;
  }
`;

export const SelectSectionBox = styled.div`
  position: relative;
  width: 599px;
  height: 197px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${MEDIA.mobile} {
    width: calc(100vw - 80px);
    max-width: 599px;
    height: calc((100vw - 80px) * 0.33);
    max-height: 197px;
    min-width: 240px;
    min-height: 80px;
  }
`;

export const SelectSectionImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const SectionButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  z-index: 2;

  ${MEDIA.mobile} {
  }
`;

export const SectionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 10px;
  width: 100px;
  height: 120px;

  img {
    width: 100px;
    height: 120px;

    ${MEDIA.mobile} {
      width: calc((100vw - 80px) * 0.15);
      height: calc((100vw - 80px) * 0.15);
      min-width: 40px;
      min-height: 40px;
      max-width: 70px;
      max-height: 70px;
    }
  }

  span {
    margin-top: 3px;
    font-size: 14px;
    color: #333;

    ${MEDIA.mobile} {
      font-size: 12px;
    }
  }

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;

export const ArrowButton = styled.button<{
  $isHidden: boolean;
}>`
  background: none;
  border: none;
  width: 25px;
  height: 25px;
  margin-top: 80px;
  visibility: ${({ $isHidden }) => ($isHidden ? 'hidden' : 'visible')};
  pointer-events: ${({ $isHidden }) => ($isHidden ? 'none' : 'auto')};

  ${MEDIA.mobile} {
    width: 18px;
    height: 18px;
    margin-top: 50px;
  }

  img {
    width: 25px;
    height: 25px;

    ${MEDIA.mobile} {
      width: 18px;
      height: 18px;
    }
  }
`;

export const CompassText = styled.p<{ $isHidden: boolean }>`
  font-weight: 700;
  font-size: 18px;
  margin: 80px 10px 0 10px;
  visibility: ${({ $isHidden }) => ($isHidden ? 'hidden' : 'visible')};
  pointer-events: ${({ $isHidden }) => ($isHidden ? 'none' : 'auto')};

  ${MEDIA.mobile} {
    display: none;
  }
`;

export const LegendKeycapMessageImg = styled.img`
  width: 178px;
  height: 145px;
  position: fixed;
  bottom: 0;
  margin-bottom: 170px;
  margin-right: 72px;
  transition: opacity 0.3s ease;

  ${MEDIA.mobile} {
    display: none;
  }
`;

export const HandsUpCokoImg = styled.img`
  width: 178px;
  height: 143px;
  position: fixed;
  bottom: 0;
  margin-bottom: 30px;
  margin-right: 72px;

  ${MEDIA.mobile} {
    display: none;
  }
`;

// 지도 윗 부분 이미지
export const UpperBackgroundImg = styled.div`
  width: 693px;
  height: 147px;
  background-image: url(${getImageUrl('배경1.webp')});
  display: flex;
  align-items: end;

  ${MEDIA.mobile} {
    display: none;
  }
`;

// 버튼 섹션 전체를 감싸는 Wrapper (백그라운드 이미지 고정)
export const EntireSectionContainer = styled.div<{
  $isActiveBubble?: boolean;
}>`
  background-image: url(${getImageUrl('배경2.webp')});
  padding-bottom: ${({ $isActiveBubble }) =>
    $isActiveBubble ? '80px' : '0px'};
  transition: margin-bottom 0.3s ease;

  ${MEDIA.mobile} {
    background-image: none;
    padding-bottom: ${({ $isActiveBubble }) =>
      $isActiveBubble ? '160px' : '60px'};
  }
`;

// 섹션 하나를 감싸는 Wrapper
export const SectionWrapper = styled.div`
  padding-bottom: 20px;
`;

// 퀴즈 튜토리얼 링크 감싸는 Wrapper
export const QuizTutorialLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

// 섹션 제목(이름)
export const SectionTitle = styled.h2`
  width: 693px;
  font-size: 20px;
  color: #ffffff;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${MEDIA.mobile} {
    color: #5f5f5f;
    text-shadow: none;
    font-size: 20px;
    max-width: 693px;
    width: 100%;
  }

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: #ffffff;
    margin: 0 55px;
    max-width: 200px;

    ${MEDIA.mobile} {
      background: #5f5f5f;
      margin: 0 35px;
      max-width: 120px;
    }
  }
`;

// 버튼 배치를 위한 Wrapper (그리드 레이아웃)
export const ButtonGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  ${MEDIA.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// 앉은-코코 이미지
export const SittingCoko = styled.img`
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  width: 147px;
  height: 120px;
  animation: ${ANIMATIONS.fadeInAndDrop} 0.3s ease-out forwards;
`;

export const KeyboardButtonWrapper = styled.div`
  position: relative;
`;

// 키캡(키보드 스위치) 버튼
export const KeyboardButton = styled.button<{ $isLocked: boolean }>`
  width: auto;
  height: auto;
  padding: 0;
  border: none;
  background-color: transparent;
  margin-bottom: 20px;
  cursor: ${({ $isLocked }) => ($isLocked ? 'not-allowed' : 'pointer')};

  img {
    width: 138.6px;
    height: 72.68px;
    display: block;
    filter: ${({ $isLocked }) => ($isLocked ? 'grayscale(85%)' : 'none')};
    opacity: ${({ $isLocked }) => ($isLocked ? 0.5 : 1)};
  }
`;

// 파트 눌렀을 때 나오는 말풍선 (예시: 식별자)
export const SpeechBubble = styled.div<{ $bgColor: string }>`
  position: absolute;
  background: ${({ $bgColor }) => $bgColor};
  border-radius: 0.8em;
  padding: 0.8em 1em;
  width: 110px;
  color: #ffffff;
  text-align: center;
  z-index: ${Z_INDEX.popover};
  gap: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);

  &:after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 0;
    height: 0;
    border: 0.8em solid transparent;
    border-bottom-color: ${({ $bgColor }) => $bgColor};
    transform: translateX(-50%);
  }

  h3 {
    font-size: 18px;
    font-weight: 300;
  }

  ${MEDIA.mobile} {
    width: 110px;
    padding: 0.6em 0.8em;
    top: calc(90%);
    left: 50%;
    right: auto;
    transform: translateX(-50%);

    &:after {
      display: block;
      top: -20px;
      border-bottom-color: ${({ $bgColor }) => $bgColor};
      border-top-color: transparent;
    }

    h3 {
      font-size: 16px;
    }
  }
`;

// /quiz로 보내는 버튼
export const GoToQuizButton = styled.button<{ $fontColor: string }>`
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.4em;
  background-color: #ffffff;
  color: ${({ $fontColor }) => $fontColor};
  font-weight: 700;
`;

// 로딩 스피너 감싸는 Wrapper
export const LoadingSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
