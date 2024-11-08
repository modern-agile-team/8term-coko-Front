import { Wrapper, LeftSection, RightSection, Layout } from '../../style/style';
import MenuBar from '../../common/layout/MenuBar';
import CokoLogo from '../../common/layout/CokoLogo';
import Header from '../../common/layout/Header';
import DailyQuest from '../../features/Quest/ui/DailyQuest';
import ProgressBar from '../../features/Progress/ui/ProgressBar';
import SelectSection from '../../common/layout/SelectSection';
import QuizSection from '../../features/quiz/ui/QuizSection';
import KeycapAdventureIntro from '../../features/Learn/ui/KeycapAdventureIntro';
import PartNavContainer from '../../features/quiz/ui/PartNavContainer';

export default function Learn() {
  // 데이터베이스에서 가져온 것으로 가정
  const progress = 30;

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
