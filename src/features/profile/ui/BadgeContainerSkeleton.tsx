import * as S from './styles';
import Skeleton from '@common/layout/Skeleton';

export default function BadgeContainerSkeleton() {
  return (
    <S.BadgeWrapper>
      {Array.from({ length: 4 }).map((_, index) => (
        <S.BadgeListItem key={index}>
          <Skeleton width="104px" height="104px" />
        </S.BadgeListItem>
      ))}
    </S.BadgeWrapper>
  );
}
