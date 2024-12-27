import { ProgressBox, InnerProgress } from '../style';
import { CSSProperties } from 'react';

interface ProgressBarProps {
  $progress: number;
  $maxProgress: number;
  $maxWidth?: string;
  $height?: string;
  $boxBgColor?: string;
  $innerBgColor?: string;
  $borderRadius?: string;
  style?: CSSProperties;
}

/**
 * @example
 * <ProgressBar
      $progress={progress}
      $maxProgress={maxProgress}
      $maxWidth="200px"
      $height="15px"
      $boxBgColor="#FFFFFF"
      $innerBgColor="#FF0000"
      $borderRadius="10px"
      style={{ Property: 'value' }}
    />
 */

export default function ProgressBar({
  $progress,
  $maxProgress,
  $maxWidth,
  $height,
  $boxBgColor,
  $innerBgColor,
  $borderRadius,
  style,
}: ProgressBarProps) {
  const normalizedProgress = ($progress / $maxProgress) * 100;

  return (
    <ProgressBox
      $maxWidth={$maxWidth}
      $height={$height}
      $boxBgColor={$boxBgColor}
      $borderRadius={$borderRadius}
      style={style}
    >
      <InnerProgress
        $progress={normalizedProgress}
        $innerBgColor={$innerBgColor}
        $borderRadius={$borderRadius}
      />
    </ProgressBox>
  );
}
