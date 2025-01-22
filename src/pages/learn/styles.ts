import styled from 'styled-components';
import { media } from '@style/media';

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

export const SectionGroup = styled.div`
  width: 693px;
  margin-top: 270px;
  border: none;

  ${media.mobile} {
    width: 100%;
    max-width: 693px;
    padding: 0 20px;
    margin-top: 200px;
  }
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

export const ProgressBarWrapper = styled.div`
  position: fixed;
  top: 36px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 639px;

  ${media.mobile} {
    top: 60px;
    margin: 0 50px;
    width: calc(100% - 100px);
  }
`;
