import * as S from './styles';
import QuestSection from '@features/quest/ui/QuestSection';
import ChallengeBadge from '@features/quest/ui/ChallengeBadge';
import { useState } from 'react';
import { objectKeys } from '@modern-kit/utils';
import { useUserChallengesQuery } from '@/features/user/queries';
import {
  CHALLENGE_TYPE_COLORS,
  CHALLENGE_TYPE_LABELS,
} from '@/features/quest/constants';
import type { ChallengeType } from '@/features/quest/types';

export default function Challenge() {
  const [selectedType, setSelectedType] = useState<ChallengeType | undefined>(
    undefined
  );

  const { data, isLoading, error } = useUserChallengesQuery.getChallenges({
    page: 1,
    limit: 1000,
    challengeType: selectedType,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;

  return (
    <QuestSection title="도전과제" isLearn={false} isQuest>
      <S.FilterContainer>
        {objectKeys(CHALLENGE_TYPE_LABELS).map(challengeType => (
          <S.FilterButton
            key={challengeType}
            $active={selectedType === challengeType}
            onClick={() =>
              setSelectedType(
                selectedType === challengeType ? undefined : challengeType
              )
            }
            $color={CHALLENGE_TYPE_COLORS[challengeType].border}
          >
            {CHALLENGE_TYPE_LABELS[challengeType]}
          </S.FilterButton>
        ))}
      </S.FilterContainer>

      <S.ChallengeGrid>
        {data.contents.map(item => (
          <ChallengeBadge key={item.id} challengeItem={item} />
        ))}
      </S.ChallengeGrid>
    </QuestSection>
  );
}
