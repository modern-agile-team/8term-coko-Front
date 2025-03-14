import Skeleton from '@common/layout/Skeleton';
import * as S from './styles';

export default function ChallengeListContentSkeleton() {
  return (
    <S.ChallengeGrid>
      {Array.from({ length: 4 }).map((_, index) => (
        <S.BadgeWrapper key={index}>
          <S.BadgeItem $completed={false}>
            <Skeleton width="104px" height="104px" />
          </S.BadgeItem>
          <Skeleton width="80px" height="20px" style={{ marginTop: '8px' }} />
        </S.BadgeWrapper>
      ))}
    </S.ChallengeGrid>
  );
}
