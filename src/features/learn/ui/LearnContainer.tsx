import * as globalS from '@style/styles';
import * as S from '@/pages/learn/styles';
import { SectionGroup } from '@/pages/learn/styles';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import DailyQuest from '@features/quest/ui/DailyQuest';
import ProgressBar from '@features/progress/ui/ProgressBar';
import SelectSection from '@features/learn/ui/SelectSection';
import KeycapAdventureIntro from '@features/learn/ui/KeycapAdventureIntro';
import PartNavContainer from '@features/learn/ui/PartNavContainer';
import { PRELOAD_IMAGES, PROGRESS_COLORS } from '@features/learn/constants';
import useScrollVisibility from '@hooks/useScrollVisibility';
import usePreloadImages from '@hooks/usePreloadImages';
import useUserStore from '@store/useUserStore';
import { isLoggedIn } from '@features/user/service/authUtils';
import withSections from '@features/learn/hocs/withSections';
import withUserProgress from '@features/learn/hocs/withUserProgress';
import type { Section, Part } from '@features/learn/types';

interface LearnContainerProps {
  // withSections HOC에서 주입
  sections: Section[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;

  // withUserProgress HOC에서 주입
  progressData: {
    correctUserProgressCount: number;
    totalQuizCount: number;
  } | null;
  selectedPartId: Part['id'] | null;
  selectedSectionId: Section['id'] | null;
  onFetchProgress: (partId?: Part['id'], sectionId?: Section['id']) => void;
}

function LearnContainer({
  sections,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,

  progressData,
  selectedPartId,
  selectedSectionId,
  onFetchProgress,
}: LearnContainerProps) {
  const showComponents = useScrollVisibility();
  const { user } = useUserStore();

  // 이미지 프리로드
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

        {/* 로그인한 유저라면 진행도 표시 */}
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

        {/* 상단 SelectSection */}
        <S.ScrollableContainer
          $show={showComponents}
          $isLoggedIn={isLoggedIn(user)}
        >
          <SelectSection />
        </S.ScrollableContainer>

        {/* 섹션 + 파트 목록 */}
        <SectionGroup>
          <PartNavContainer
            sections={sections}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
            onFetchProgress={onFetchProgress}
          />
        </SectionGroup>
      </globalS.Layout>
    </>
  );
}

export default withUserProgress(withSections(LearnContainer));
