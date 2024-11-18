import styled from 'styled-components';

interface ProgressBoxProps {
  $maxWidth?: string;
  $height?: string;
  $boxBgColor?: string;
}

interface InnerProgressProps {
  $progress: number;
  $innerBgColor?: string;
}

export const ProgressBox = styled.section<ProgressBoxProps>`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth};
  height: ${({ $height }) => $height};
  background-color: ${({ $boxBgColor }) => $boxBgColor};
  border-radius: 8px;
`;

export const InnerProgress = styled.div<InnerProgressProps>`
  width: ${({ $progress }) => $progress}%;
  height: 100%;
  background-color: ${({ $innerBgColor }) => $innerBgColor};
  border-radius: 8px;
  transition: width 0.3s ease;
`;
