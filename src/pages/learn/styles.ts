import styled from 'styled-components';
import { MEDIA, Z_INDEX } from '@style/constants';
import { PROGRESS_COLORS } from '@features/learn/constants';
interface ScrollableContainerProps {
  $show?: boolean;
  $isLoggedIn?: boolean;
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
  z-index: ${Z_INDEX.learnHeader};
  margin-top: ${({ $isLoggedIn }) => ($isLoggedIn ? '45px' : '25px')};

  ${MEDIA.mobile} {
    margin-top: ${({ $isLoggedIn }) => ($isLoggedIn ? '0' : '-20px')};
  }
`;

export const SectionGroup = styled.div`
  width: 693px;
  margin-top: 270px;
  border: none;

  ${MEDIA.mobile} {
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
  top: 20px;
  left: calc(100vw / 2 - 319.5px);
  width: 639px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: ${Z_INDEX.learnHeader};

  ${MEDIA.mobile} {
    top: 35px;
    width: calc(100vw - 100px);
    left: 50%;
    transform: translateX(-50%);
    max-width: 639px;
  }
`;

export const ProgressLabel = styled.span<{ $isPart?: boolean }>`
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

  ${MEDIA.mobile} {
    font-size: 13px;
  }
`;

export const ProgressText = styled.span`
  font-size: 12px;
  color: ${PROGRESS_COLORS.global.text};
  text-align: right;

  ${MEDIA.mobile} {
    font-size: 11px;
  }
`;
