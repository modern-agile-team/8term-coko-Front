import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import { useHover } from '@modern-kit/react';
import { CHALLENGE_TYPE_LABELS } from '@features/quest/constants';
import type { ChallengeItem, ChallengeType } from '@features/quest/types';

export default function ChallengeBadge({
  challengeItem,
}: {
  challengeItem: ChallengeItem;
}) {
  const { challenge, completed } = challengeItem;
  const { badgeName, content } = challenge;
  const challengeType = challenge.challengeType as ChallengeType;

  const badgeUrl = getImageUrl(`뱃지-${badgeName}.svg`);
  const { ref, isHovered } = useHover<HTMLDivElement>();

  return (
    <S.BadgeWrapper ref={ref}>
      <S.BadgeItem $completed={completed}>
        <img src={badgeUrl} alt={badgeName} />
      </S.BadgeItem>

      <S.BadgeName $type={challengeType}>{content}</S.BadgeName>

      {isHovered && (
        <S.BadgePopover>
          <img src={badgeUrl} alt={badgeName} />
          <S.BadgePopoverContent>
            <S.BadgeLabel $type={challengeType}>
              {CHALLENGE_TYPE_LABELS[challengeType]}
            </S.BadgeLabel>
            <S.BadgeDescription>{content}</S.BadgeDescription>
          </S.BadgePopoverContent>
        </S.BadgePopover>
      )}
    </S.BadgeWrapper>
  );
}
