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
        <ProgressBar />
        <SelectSection />
        <QuizSection>
          <PartNavContainer />
        </QuizSection>
      </Layout>
    </>
  );
}
