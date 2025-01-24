import * as globalS from '@style/styles';
import * as S from './styles';
import { useMemo, useEffect } from 'react';
import { useScrollVisibility } from '@hooks/useScrollVisibility';
import { useInView } from 'react-intersection-observer';
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

  // 무한 스크롤 데이터 가져오기
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    sectionsQuery.getByPage();

  // 스크롤 감지를 위한 Intersection Observer
  const { ref, inView } = useInView({
    threshold: 1.0, // 요소가 100% 화면에 보일 때
  });

  // 모든 섹션 데이터 가져오기
  const sections = useMemo(() => {
    if (!data?.pages) return [];
    const flattenedSections = data.pages.flatMap(page => page.sections || []);
    return flattenedSections;
  }, [data]);

  // 무한 스크롤 트리거
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  // 이전 버튼 수 누적 계산
  const previousPartsCounts = useMemo(() => {
    if (!sections || sections.length === 0) return [];
    const counts: number[] = [];
    let sum = 0;

    sections.forEach(section => {
      if (section?.parts) {
        counts.push(sum);
        sum += section.parts.length;
      }
    });

    return counts;
  }, [sections]);

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
          {sections.map((section, index) => (
            <PartNavContainer
              key={section?.id || index}
              section={section}
              previousPartsCounts={previousPartsCounts}
            />
          ))}
        </S.SectionGroup>
        {isFetchingNextPage && <p>더 많은 섹션을 로드하는 중입니다.</p>}
        {!hasNextPage && <p>더 이상 로드할 섹션이 없습니다.</p>}
        <div ref={ref} style={{ height: '1px' }} />
      </globalS.Layout>
    </>
  );
}
