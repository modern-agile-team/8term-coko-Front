import * as globalS from '@style/styles';
import * as S from './styles';
import { SectionGroup } from './styles';
import { PRELOAD_IMAGES } from '@features/learn/constants';
import useScrollVisibility from '@hooks/useScrollVisibility';
import usePreloadImages from '@hooks/usePreloadImages';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import DailyQuest from '@features/quest/ui/DailyQuest';
import ProgressBar from '@features/progress/ui/ProgressBar';
import SelectSection from '@features/learn/ui/SelectSection';
import KeycapAdventureIntro from '@features/learn/ui/KeycapAdventureIntro';
import PartNavContainer from '@features/learn/ui/PartNavContainer';

export default function Learn() {
  const showComponents = useScrollVisibility();
  const progress = 30;
  const maxProgress = 100;

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
        <SectionGroup>
          <PartNavContainer />
        </SectionGroup>
      </globalS.Layout>
    </>
  );
}
