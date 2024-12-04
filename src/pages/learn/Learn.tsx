import { useEffect, useMemo } from 'react';
import { Wrapper, LeftSection, RightSection, Layout } from '../../style/style';
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
import useUserStore from '@store/useUserStore';
import sectionsQuery from '@/queries/sectionsQuery';

export default function Learn() {
  const { setUser } = useUserStore();

  useEffect(() => {
    setUser({ id: 3, nickname: 'admin', level: 1 });
  }, []);

  const showComponents = useScrollVisibility();
  const isImageLoading = usePreloadImages({
    imageUrls: [
      '코코-멘트1.svg',
      '코코-멘트2.svg',
      '코코-멘트3.svg',
      '코코-멘트4.svg',
      '코코-멘트5.svg',
      '키캡1.svg',
      '키캡2.svg',
      '키캡3.svg',
      '키캡4.svg',
    ],
  });

  // Section 데이터 가져오기
  const { data: section, isLoading, error } = sectionsQuery.get(1);

  // 이전 버튼 수 누적 계산
  const previousPartsCounts = useMemo(() => {
    const counts: number[] = [];
    let sum = 0;

    counts.push(sum);
    sum += section.part.length;

    return counts;
  }, [section]);

  if (isImageLoading) return <div>Loading</div>;

  const progress = 30;
  const maxProgress = 100;

  return (
    <>
      <Wrapper>
        <LeftSection>
          <CokoLogo />
          <MenuBar />
        </LeftSection>
        <RightSection>
          <Header />
          <DailyQuest />
          <KeycapAdventureIntro />
        </RightSection>
      </Wrapper>
      <Layout>
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
      </Layout>
    </>
  );
}
