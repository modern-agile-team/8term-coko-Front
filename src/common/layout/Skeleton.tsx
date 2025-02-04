import { FC, CSSProperties } from 'react';
import { SkeletonBase } from './styles';

interface SkeletonProps {
  width?: string;
  height?: string;
  style?: CSSProperties;
}

const Skeleton: FC<SkeletonProps> = ({ width, height, style }) => {
  return <SkeletonBase width={width} height={height} style={style} />;
};

export default Skeleton;
