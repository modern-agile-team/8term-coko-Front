import * as globalS from '@style/styles';
import * as S from './styles';
import { useMemo } from 'react';
import { useScrollVisibility } from '@hooks/useScrollVisibility';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import DailyQuest from '@features/quest/ui/DailyQuest';
import ProgressBar from '@features/progress/ui/ProgressBar';
import SelectSection from '@features/learn/ui/SelectSection';
import KeycapAdventureIntro from '@features/learn/ui/KeycapAdventureIntro';
import PartNavContainer from '@features/quiz/ui/PartNavContainer';
import usePreloadImages from '@hooks/usePreloadImages';
import { sectionsQuery } from '@/features/learn/queries';
import { PRELOAD_IMAGES } from '@features/learn/constants';

export default function Learn() {
  const showComponents = useScrollVisibility();
  usePreloadImages({ imageUrls: PRELOAD_IMAGES });

  // Section 데이터 가져오기
  const { data: section } = sectionsQuery.get(2);

  // 이전 버튼 수 누적 계산
  const previousPartsCounts = useMemo(() => {
    if (!section || !section.parts) return [];
    const counts: number[] = [];
    let sum = 0;

    counts.push(sum);
    sum += section.parts.length;

    return counts;
  }, [section]);

  const progress = 30;
  const maxProgress = 100;

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
        <S.ProgressBarWrapper>
          <ProgressBar
            $progress={progress}
            $maxProgress={maxProgress}
            $maxWidth="639px"
            $height="16px"
            $boxBgColor="#85705F"
            $innerBgColor="#BFD683"
          />
        </S.ProgressBarWrapper>
        <S.ScrollableContainer $show={showComponents}>
          <SelectSection />
        </S.ScrollableContainer>
        <S.SectionGroup>
          <PartNavContainer
            section={section}
            previousPartsCounts={previousPartsCounts}
          />
        </S.SectionGroup>
      </globalS.Layout>
    </>
  );
}
