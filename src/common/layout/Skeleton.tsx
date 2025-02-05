import { CSSProperties } from 'react';
import { SkeletonBase } from './styles';

interface SkeletonProps {
  width?: string;
  height?: string;
  style?: CSSProperties;
}

export default function Skeleton({ width, height, style }: SkeletonProps) {
  return <SkeletonBase width={width} height={height} style={style} />;
}
