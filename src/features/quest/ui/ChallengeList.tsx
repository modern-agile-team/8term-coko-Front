import * as S from './styles';
import { Suspense, useState } from 'react';
import QuestSection from '@features/quest/ui/QuestSection';
import ChallengeListContent from '@features/quest/ui/ChallengeListContent';
import ChallengeListContentSkeleton from '@/features/quest/ui/ChallengeListContentSkeleton';
import { objectKeys } from '@modern-kit/utils';
import { isLoggedIn } from '@features/user/service/authUtils';
import useUserStore from '@/store/useUserStore';
import {
  CHALLENGE_TYPE_COLORS,
  CHALLENGE_TYPE_LABELS,
} from '@/features/user/constants';
import type { BaseChallengeType } from '@/features/user/types';

export default function ChallengeList() {
  const { user } = useUserStore();
  const [selectedType, setSelectedType] = useState<
    BaseChallengeType | undefined
  >(undefined);

  const handleChallengeTypeClick = (challengeType: BaseChallengeType) => {
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
                onClick={() => handleChallengeTypeClick(challengeType)}
                $color={CHALLENGE_TYPE_COLORS[challengeType]}
              >
                {CHALLENGE_TYPE_LABELS[challengeType]}
              </S.FilterButton>
            ))}
          </S.FilterContainer>

          <Suspense fallback={<ChallengeListContentSkeleton />}>
            <ChallengeListContent selectedType={selectedType} />
          </Suspense>
        </>
      ) : (
        <S.QuestWrapper>
          <S.LoginRequiredMessage>
            로그인 후 도전과제를 확인해보세요!
          </S.LoginRequiredMessage>
        </S.QuestWrapper>
      )}
    </QuestSection>
  );
}
