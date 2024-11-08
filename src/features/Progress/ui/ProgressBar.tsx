import { ProgressBox, InnerProgress } from '../style';
import { CSSProperties } from 'react';

interface ProgressBarProps {
  $progress: number;
  $maxWidth?: string;
  $height?: string;
  $boxBgColor?: string;
  $innerBgColor?: string;
  style?: CSSProperties;
}

/**
 * @example
 * <ProgressBar
      $progress={progress}
      $maxWidth="200px"
      $height="15px"
      $boxBgColor="#FFFFFF"
      $innerBgColor="#FF0000"
      style={{ Property: 'value' }}
    />
 */

export default function ProgressBar({
  $progress,
  $maxWidth,
  $height,
  $boxBgColor,
  $innerBgColor,
  style,
}: ProgressBarProps) {
  return (
    <ProgressBox
      $maxWidth={$maxWidth}
      $height={$height}
      $boxBgColor={$boxBgColor}
      style={style}
    >
      <InnerProgress $progress={$progress} $innerBgColor={$innerBgColor} />
    </ProgressBox>
  );
}
