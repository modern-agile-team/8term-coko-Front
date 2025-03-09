import * as S from './styles';
import ChallengeBadge from '@features/quest/ui/ChallengeBadge';
import { usersChallengesQuery } from '@/features/user/queries';
import type { BaseChallengeType } from '@/features/user/types';

interface ChallengeListContentProps {
  selectedType?: BaseChallengeType;
}

export default function ChallengeListContent({
  selectedType,
}: ChallengeListContentProps) {
  const { data } = usersChallengesQuery.useGetChallenges({
    page: 1,
    limit: 1000,
    challengeType: selectedType,
  });

  return (
    <S.ChallengeGrid>
      {data?.contents.map(item => (
        <ChallengeBadge key={item.id} challengeItem={item} />
      ))}
    </S.ChallengeGrid>
  );
}
