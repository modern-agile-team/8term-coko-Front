import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import formatDate from '@utils/formatDate';
import { useHover } from '@modern-kit/react';
import {
  CHALLENGE_TYPE_LABELS,
  EVENT_CHALLENGE_GROUP,
} from '@features/user/constants';
import type {
  ChallengeItem,
  BaseChallengeType,
  EventChallengeType,
} from '@features/user/types';

export default function ChallengeBadge({
  challengeItem,
}: {
  challengeItem: ChallengeItem;
}) {
  const { challenge, completed, completedDate } = challengeItem;
  const { badgeName, content, challengeType } = challenge;

  const badgeUrl = getImageUrl(`뱃지-${badgeName}.svg`);
  const { ref, isHovered } = useHover<HTMLDivElement>();

  const displayChallengeType: BaseChallengeType =
    EVENT_CHALLENGE_GROUP.includes(challengeType as EventChallengeType)
      ? 'EVENT'
      : (challengeType as BaseChallengeType);

  return (
    <S.BadgeWrapper ref={ref}>
      <S.BadgeItem $completed={completed}>
        <img src={badgeUrl} alt={badgeName} />
      </S.BadgeItem>

      <S.BadgeName $type={displayChallengeType}>{content}</S.BadgeName>

      {isHovered && (
        <S.BadgePopover>
          <img src={badgeUrl} alt={badgeName} />
          <S.BadgePopoverContent>
            <S.BadgeLabel $type={displayChallengeType}>
              {CHALLENGE_TYPE_LABELS[displayChallengeType]}
            </S.BadgeLabel>
            <S.BadgeDescription>{content}</S.BadgeDescription>
            <S.BadgeEarnedDate>{formatDate(completedDate)}</S.BadgeEarnedDate>
          </S.BadgePopoverContent>
        </S.BadgePopover>
      )}
    </S.BadgeWrapper>
  );
}
