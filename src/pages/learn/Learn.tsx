import { AlignCenter, GridContainer, Layout } from './style';
import MenuBar from '../../common/layout/MenuBar';
import Header from '../../common/layout/Header';
import DailyQuest from '../../features/Quest/ui/DailyQuest';
import CokoLogo from '../../common/layout/CokoLogo';
import ProgressSquare from '../../features/Progress/ui/ProgressSquare';
import SelectSection from '../../common/layout/SelectSection';
import QuizSection from '../../features/Quiz/ui/QuizSection';

export default function Learn() {
  return (
    <AlignCenter>
      <GridContainer>
        <Layout>
          <CokoLogo />
          <MenuBar />
        </Layout>
        <Layout>
          <ProgressSquare />
          <SelectSection />
          <QuizSection />
        </Layout>
        <Layout>
          <Header />
          <DailyQuest />
        </Layout>
      </GridContainer>
    </AlignCenter>
  );
}
