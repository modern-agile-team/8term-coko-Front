import {
  BackgroundColor,
  Wrapper,
  LeftSection,
  RightSection,
  Layout,
} from './style';
import MenuBar from '../../common/layout/MenuBar';
import Header from '../../common/layout/Header';
import DailyQuest from '../../features/Quest/ui/DailyQuest';
import CokoLogo from '../../common/layout/CokoLogo';
import ProgressBar from '../../features/Progress/ui/ProgressBar';
import SelectSection from '../../common/layout/SelectSection';
import QuizSection from '../../features/Quiz/ui/QuizSection';
import KeycapAdventureIntro from '../../features/Learn/ui/KeycapAdventureIntro';
import PartNavContainer from '../../features/Quiz/ui/PartNavContainer';

export default function Learn() {
  return (
    <BackgroundColor>
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
    </BackgroundColor>
  );
}
