import { useEffect, useMemo } from 'react';
import * as globalS from '@/style/style';
import { ScrollableContainer } from './style';
import { useScrollVisibility } from '@hooks/useScrollVisibility';
import MenuBar from '@common/layout/MenuBar';
import CokoLogo from '@common/layout/CokoLogo';
import Header from '@common/layout/Header';
import DailyQuest from '@features/quest/ui/DailyQuest';
import ProgressBar from '@features/progress/ui/ProgressBar';
import SelectSection from '@features/learn/ui/SelectSection';
import QuizSection from '@features/quiz/ui/QuizSection';
import KeycapAdventureIntro from '@features/learn/ui/KeycapAdventureIntro';
import PartNavContainer from '@features/quiz/ui/PartNavContainer';
import usePreloadImages from '@hooks/usePreloadImages';
import { sectionsQuery } from '@/features/learn/queries';
import { PRELOAD_IMAGES } from '@features/learn/constants';

export default function Learn() {
  const showComponents = useScrollVisibility();
  const isImageLoading = usePreloadImages({
    imageUrls: PRELOAD_IMAGES,
  });

  // Section 데이터 가져오기
  const { data: section, isLoading, error } = sectionsQuery.get(2);

  // 이전 버튼 수 누적 계산
  const previousPartsCounts = useMemo(() => {
    if (!section || !section.part) return [];
    const counts: number[] = [];
    let sum = 0;

    counts.push(sum);
    sum += section.part.length;

    return counts;
  }, [section]);

  if (isImageLoading) return <div>Loading...</div>;

  const progress = 30;
  const maxProgress = 100;

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <CokoLogo />
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <Header />
          <DailyQuest />
          <KeycapAdventureIntro />
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <ProgressBar
          $progress={progress}
          $maxProgress={maxProgress}
          $maxWidth="639px"
          $height="16px"
          $boxBgColor="#85705F"
          $innerBgColor="#BFD683"
          style={{ position: 'fixed', marginTop: '36px' }}
        />
        <ScrollableContainer $show={showComponents}>
          <SelectSection />
        </ScrollableContainer>
        <QuizSection>
          <PartNavContainer
            section={section}
            previousPartsCounts={previousPartsCounts}
            isLoading={isLoading}
            error={error}
          />
        </QuizSection>
      </globalS.Layout>
    </>
  );
}
