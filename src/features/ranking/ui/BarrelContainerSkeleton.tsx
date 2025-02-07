import Skeleton from '@common/layout/Skeleton';

export default function BarrelContainerSkeleton() {
  return (
    <Skeleton
      width="170px"
      height="155px"
      style={{
        margin: '237px 87px',
        position: 'fixed',
        zIndex: '-1',
        borderRadius: '30px',
      }}
    />
  );
}
