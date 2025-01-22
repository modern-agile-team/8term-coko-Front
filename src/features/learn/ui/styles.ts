import styled from 'styled-components';
import { media } from '@style/media';

export const SectionBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 45px;

  ${media.mobile} {
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

  ${media.mobile} {
    width: calc(100vw - 80px);
    max-width: 599px;
    height: calc((100vw - 80px) * 0.33);
    max-height: 197px;
    min-width: 350px;
    min-height: 130px;
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

  ${media.mobile} {
    gap: 5px;
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

  img {
    width: 100%;
    height: auto;
    max-width: 80px;
    max-height: 80px;
    ${media.mobile} {
      max-width: 70px;
      max-height: 70px;
    }
  }

  span {
    margin-top: 3px;
    font-size: 14px;
    color: #333;

    ${media.mobile} {
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

  ${media.mobile} {
    width: 18px;
    height: 18px;
    margin-top: 50px;
  }

  img {
    width: 25px;
    height: 25px;

    ${media.mobile} {
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

  ${media.mobile} {
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

  ${media.mobile} {
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

  ${media.mobile} {
    display: none;
  }
`;
