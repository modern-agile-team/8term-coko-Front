import * as globalS from '@style/styles';
import * as S from './styles';
import { SectionGroup } from './styles';
import { PRELOAD_IMAGES } from '@features/learn/constants';
import { PROGRESS_COLORS } from '@features/learn/constants';
import { useState, useCallback } from 'react';
import { useUserProgressQuery } from '@features/user/queries';
import { isLoggedIn } from '@features/user/service/authUtils';
import useScrollVisibility from '@hooks/useScrollVisibility';
import usePreloadImages from '@hooks/usePreloadImages';
import useUserStore from '@store/useUserStore';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import DailyQuest from '@features/quest/ui/DailyQuest';
import ProgressBar from '@features/progress/ui/ProgressBar';
import SelectSection from '@features/learn/ui/SelectSection';
import KeycapAdventureIntro from '@features/learn/ui/KeycapAdventureIntro';
import PartNavContainer from '@features/learn/ui/PartNavContainer';
import type { Section, Part } from '@features/learn/types';

export default function Learn() {
  const showComponents = useScrollVisibility();

  // 선택된 파트와 섹션 ID 상태 관리
  const [selectedPartId, setSelectedPartId] = useState<Part['id'] | null>(null);
  const [selectedSectionId, setSelectedSectionId] = useState<
    Section['id'] | null
  >(null);

  const { user } = useUserStore();
  // 로그인된 경우에만 user(자신)와 progress의 관계 데이터를 가져오기
  const { data: progressData } = isLoggedIn(user)
    ? useUserProgressQuery.getProgress({
        partId: selectedPartId ?? undefined,
        sectionId: selectedSectionId ?? undefined,
      })
    : { data: null };

  // PartNavContainer에 전달할 핸들러 함수 정의
  const handleFetchProgress = useCallback(
    (partId?: Part['id'], sectionId?: Section['id']) => {
      // undefined가 전달되면 상태 초기화
      setSelectedPartId(partId ?? null);
      setSelectedSectionId(sectionId ?? null);
    },
    []
  );
  usePreloadImages({ imageUrls: PRELOAD_IMAGES });

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <title>코코- 자바스크립트 코딩 문제풀이</title>
          <Header />
          <DailyQuest />
          <KeycapAdventureIntro />
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <S.ScreenReaderOnlyTitle>
          코코와 함께 코딩 마스터하기!
        </S.ScreenReaderOnlyTitle>
        {isLoggedIn(user) && (
          <S.ProgressBarWrapper>
            <S.ProgressLabel $isPart={!!selectedPartId}>
              {selectedPartId ? '파트 진행도' : '전체 진행도'}
            </S.ProgressLabel>
            <ProgressBar
              $progress={progressData?.correctUserProgressCount || 0}
              $maxProgress={Math.max(progressData?.totalQuizCount || 0, 1)}
              $maxWidth="639px"
              $height="16px"
              $boxBgColor={
                selectedPartId
                  ? PROGRESS_COLORS.part.boxBg
                  : PROGRESS_COLORS.global.boxBg
              }
              $innerBgColor={
                selectedPartId
                  ? PROGRESS_COLORS.part.innerBg
                  : PROGRESS_COLORS.global.innerBg
              }
              $borderRadius="8px"
            />
            <S.ProgressText>
              {!progressData
                ? '로딩 중...'
                : selectedPartId
                ? `${progressData.correctUserProgressCount}/${progressData.totalQuizCount} 문제`
                : `총 ${progressData.totalQuizCount}문제 중 ${progressData.correctUserProgressCount}문제 완료`}
            </S.ProgressText>
          </S.ProgressBarWrapper>
        )}
        <S.ScrollableContainer
          $show={showComponents}
          $isLoggedIn={isLoggedIn(user)}
        >
          <SelectSection />
        </S.ScrollableContainer>
        <SectionGroup>
          <PartNavContainer onFetchProgress={handleFetchProgress} />
        </SectionGroup>
      </globalS.Layout>
    </>
  );
}
