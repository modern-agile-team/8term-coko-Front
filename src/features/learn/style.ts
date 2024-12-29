import styled from 'styled-components';
import { media } from '@/style/media';

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

export const SectionBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 45px;
`;

export const SelectSectionBox = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 599px;
  height: 197px;
  margin-top: 30px;
  background-image: url(${imgUrl}섹션-선택-섬.svg);
  background-repeat: no-repeat;
`;

export const TextOverlay = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin: 80px 10px 0 10px;
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
  };
`;

export const HandsUpCokoImg = styled.img`
  width: 178px;
  height: 143px;
  position: fixed;
  bottom: 0;
  margin-bottom: 30px;
  margin-right: 72px;
`;

export const ArrowButton = styled.button<{ direction: 'left' | 'right' }>`
  background: none;
  border: none;
  width: 25px;
  height: 25px;
  margin-top: 80px;
  img {
    width: 100%;
    height: auto;
  }
`;
