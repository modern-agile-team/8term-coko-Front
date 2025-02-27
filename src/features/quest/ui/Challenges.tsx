import QuestSection from './QuestSection';
import * as S from './styles';
import { useUserChallengesQuery } from '@/features/user/queries';
import { ChallengeItem } from '@/features/quest/types';
import { getImageUrl } from '@utils/getImageUrl';

export default function Challenge() {
  const { data, isLoading, error } = useUserChallengesQuery.getChallenges();

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;

  const { contents } = data;

  return (
    <QuestSection title="도전과제" isLearn={false} isQuest={true}>
      <S.ChallengeGrid>
        {contents.map((item: ChallengeItem) => (
          <ChallengeBadge key={item.id} challengeItem={item} />
        ))}
      </S.ChallengeGrid>
    </QuestSection>
  );
}

function ChallengeBadge({ challengeItem }: { challengeItem: ChallengeItem }) {
  const { challenge, completed } = challengeItem;
  const { badgeName, content } = challenge;

  const badgeUrl = getImageUrl(`뱃지-${badgeName}.svg`);

  return (
    <S.BadgeItem $completed={completed}>
      <img src={badgeUrl} alt={badgeName} />
      <S.BadgeName>{content}</S.BadgeName>
    </S.BadgeItem>
  );
}
