import styled, { keyframes } from 'styled-components';
import { MEDIA } from '@style/constants';

// TogglePaperImg 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 1;
    transform: scale(0.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const TogglePaperImg = styled.img<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  margin-top: 140px;
  margin-right: 35px;
  cursor: pointer;
  animation: ${({ $isOpen }) => ($isOpen ? fadeIn : null)} 0.3s ease-in-out;

  ${MEDIA.mobile} {
    display: none;
  }
`;

export const QuestBackViewCoko = styled.img`
  width: 251px;
  height: 206px;
  position: fixed;
  bottom: 0;
  margin-right: 29px;
  margin-bottom: 35px;

  ${MEDIA.mobile} {
    display: none;
  }
`;
