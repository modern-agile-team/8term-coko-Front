import styled from 'styled-components';

interface ScrollableContainerProps {
  $show: boolean;
}

export const ScrollableContainer = styled.div<ScrollableContainerProps>`
  transform: ${({ $show }) => ($show ? 'translateY(0)' : 'translateY(-100%)')};
  transition: transform 0.5s ease;
  position: fixed;
  display: inline-flex;
  width: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Learn 페이지 퀴즈들 감싸는 박스
export const QuizBox = styled.div`
  width: 693px;
  margin-top: 270px;
  border: none;
`;

export const ScreenReaderOnlyTitle = styled.h1`
  position: fixed;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
