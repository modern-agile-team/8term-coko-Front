import { getImageUrl } from '@/utils/getImageUrl';
import * as S from './styles';
import Skeleton from '@common/layout/Skeleton';
import { useMediaQuery } from '@modern-kit/react';
import { MEDIA_QUERY_MAP } from '@/style/constants';

export default function BadgeContainerSkeleton() {
  const isMobile = useMediaQuery(MEDIA_QUERY_MAP.mobile);

  const skeletonCount = isMobile ? 1 : 4;

  const skeletonSize = {
    width: isMobile ? '160px' : '133px',
    height: isMobile ? '165px' : '141px',
  };

  return (
    <S.BadgeWrapper>
      <S.PaginationButton $isHidden={false}>
        <S.PaginationIcon src={getImageUrl('뱃지-다음버튼.svg')} />
      </S.PaginationButton>

      <ul>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <S.BadgeListItem key={index}>
            <Skeleton
              width={skeletonSize.width}
              height={skeletonSize.height}
              style={{ borderRadius: '8px' }}
            />
            <Skeleton
              width={skeletonSize.width}
              height="27.2px"
              style={{ borderRadius: '8px' }}
            />
          </S.BadgeListItem>
        ))}
      </ul>

      <S.PaginationButton $isHidden={false}>
        <S.PaginationIcon
          src={getImageUrl('뱃지-다음버튼.svg')}
          $rotate="180deg"
        />
      </S.PaginationButton>
    </S.BadgeWrapper>
  );
}
