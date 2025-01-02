import styled from 'styled-components';
import { media } from '@/style/media';
import { getImageUrl } from '@/utils/getImageUrl';

export const SectionBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 45px;
`;

export const SectionButton = styled.button<{ $backgroundImage: string }>`
  width: 100px;
  height: 75px;
  margin-top: 75px;
  background: none;
  border: none;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
`;

export const SelectSectionBox = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 599px;
  height: 197px;
  margin-top: 30px;
  background-image: url(${getImageUrl('섹션-선택-섬.svg')});
  background-repeat: no-repeat;
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

  img {
    width: 100%;
    height: auto;
  }
`;

export const CompassText = styled.p<{ $isHidden: boolean }>`
  font-weight: 700;
  font-size: 18px;
  margin: 80px 10px 0 10px;
  visibility: ${({ $isHidden }) => ($isHidden ? 'hidden' : 'visible')};
  pointer-events: ${({ $isHidden }) => ($isHidden ? 'none' : 'auto')};
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
`;
