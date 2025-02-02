import styled from 'styled-components';
import { media } from '@style/media';
import { PROGRESS_COLORS } from '@features/learn/constants';
interface ScrollableContainerProps {
  $show: boolean;
  $isLoggedIn: boolean;
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
  margin-top: ${({ $isLoggedIn }) => ($isLoggedIn ? '45px' : '25px')};

  ${media.mobile} {
    margin-top: ${({ $isLoggedIn }) => ($isLoggedIn ? '0' : '-20px')};
  }
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
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${media.mobile} {
    top: 60px;
    margin: 0 50px;
    width: calc(100% - 100px);
  }
`;

export const ProgressLabel = styled.span<{ $isPart: boolean }>`
  font-size: 14px;
  color: ${({ $isPart }) =>
    $isPart ? PROGRESS_COLORS.part.text : PROGRESS_COLORS.global.text};
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;

  &::before {
    content: ${({ $isPart }) =>
      $isPart
        ? `"${PROGRESS_COLORS.part.icon}"`
        : `"${PROGRESS_COLORS.global.icon}"`};
    font-size: 16px;
  }

  ${media.mobile} {
    font-size: 13px;
  }
`;

export const ProgressText = styled.span`
  font-size: 12px;
  color: ${PROGRESS_COLORS.global.text};
  text-align: right;

  ${media.mobile} {
    font-size: 11px;
  }
`;
