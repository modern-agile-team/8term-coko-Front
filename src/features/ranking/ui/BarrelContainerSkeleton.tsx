import Skeleton from '@common/layout/Skeleton';
import { isMobile } from '@modern-kit/utils';

export default function BarrelContainerSkeleton() {
  return (
    <>
      {!isMobile() && (
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
      )}
    </>
  );
}
