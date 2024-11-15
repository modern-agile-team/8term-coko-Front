import { Wrapper, LeftSection, RightSection, Layout } from '../../style/style';
import MenuBar from '../../common/layout/MenuBar';
import CokoLogo from '../../common/layout/CokoLogo';
import Header from '../../common/layout/Header';
import DailyQuest from '../../features/Quest/ui/DailyQuest';
import ProgressBar from '../../features/Progress/ui/ProgressBar';
import SelectSection from '../../features/Learn/ui/SelectSection';
import QuizSection from '../../features/quiz/ui/QuizSection';
import KeycapAdventureIntro from '../../features/Learn/ui/KeycapAdventureIntro';
import PartNavContainer from '../../features/quiz/ui/PartNavContainer';
import usePreloadImages from '../../hooks/usePreloadImages';

export default function Learn() {
  const isImageLoading = usePreloadImages({
    imageUrls: [
      '코코-멘트1.svg',
      '코코-멘트2.svg',
      '코코-멘트3.svg',
      '코코-멘트4.svg',
      '코코-멘트5.svg',
    ],
  });
  if (isImageLoading) return <div>Loading</div>;

  // 데이터베이스에서 가져온 것으로 가정
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
        <SelectSection />
        <QuizSection>
          <PartNavContainer />
        </QuizSection>
      </Layout>
    </>
  );
}
