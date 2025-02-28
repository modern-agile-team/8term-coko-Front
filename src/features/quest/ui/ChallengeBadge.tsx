import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import type { ChallengeItem, ChallengeType } from '@/features/quest/types';

export default function ChallengeBadge({
  challengeItem,
}: {
  challengeItem: ChallengeItem;
}) {
  const { challenge, completed } = challengeItem;
  const { badgeName, content, challengeType } = challenge;

  const badgeUrl = getImageUrl(`뱃지-${badgeName}.svg`);

  return (
    <S.BadgeWrapper>
      <S.BadgeItem $completed={completed}>
        <img src={badgeUrl} alt={badgeName} />
      </S.BadgeItem>

      <S.BadgeName $type={challengeType as ChallengeType}>
        {content}
      </S.BadgeName>
    </S.BadgeWrapper>
  );
}
