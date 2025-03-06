import * as S from './styles';
import QuestSection from '@features/quest/ui/QuestSection';
import ChallengeBadge from '@features/quest/ui/ChallengeBadge';
import { useState } from 'react';
import { objectKeys } from '@modern-kit/utils';
import { isLoggedIn } from '@features/user/service/authUtils';
import { useUserChallengesQuery } from '@/features/user/queries';
import {
  CHALLENGE_TYPE_COLORS,
  CHALLENGE_TYPE_LABELS,
} from '@/features/quest/constants';
import type { BaseChallengeType } from '@/features/quest/types';
import useUserStore from '@/store/useUserStore';

export default function Challenge() {
  const { user } = useUserStore();

  const [selectedType, setSelectedType] = useState<
    BaseChallengeType | undefined
  >(undefined);

  const { data, isLoading } = useUserChallengesQuery.getChallenges({
    page: 1,
    limit: 1000,
    challengeType: selectedType,
  });

  const toggleSelectedType = (challengeType: BaseChallengeType) => {
    setSelectedType(prev =>
      prev === challengeType ? undefined : challengeType
    );
  };

  return (
    <QuestSection title="도전과제" isLearn={false} isQuest={true}>
      {isLoggedIn(user) ? (
        <>
          <S.FilterContainer>
            {objectKeys(CHALLENGE_TYPE_LABELS).map(challengeType => (
              <S.FilterButton
                key={challengeType}
                $active={selectedType === challengeType}
                onClick={() => toggleSelectedType(challengeType)}
                $color={CHALLENGE_TYPE_COLORS[challengeType]}
              >
                {CHALLENGE_TYPE_LABELS[challengeType]}
              </S.FilterButton>
            ))}
          </S.FilterContainer>

          <S.ChallengeGrid>
            {isLoading ? (
              <div>로딩 중...</div>
            ) : (
              data?.contents.map(item => (
                <ChallengeBadge key={item.id} challengeItem={item} />
              ))
            )}
          </S.ChallengeGrid>
        </>
      ) : (
        <S.QuestWrapper>
          <S.LoginRequiredMessage>로그인이 필요합니다.</S.LoginRequiredMessage>
        </S.QuestWrapper>
      )}
    </QuestSection>
  );
}
