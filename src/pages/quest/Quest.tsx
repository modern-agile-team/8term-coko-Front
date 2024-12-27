import { Wrapper, LeftSection, RightSection, Layout } from '../../style/style';
import MenuBar from '../../common/layout/MenuBar';
import DailyQuest from '../../features/quest/ui/DailyQuest';
import CokoLogo from '../../common/layout/CokoLogo';
import Header from '../../common/layout/Header';

export default function Quest() {
  return (
    <>
      <Wrapper>
        <LeftSection>
          <CokoLogo />
          <MenuBar />
        </LeftSection>
        <RightSection>
          <Header />
        </RightSection>
      </Wrapper>
      <Layout>
        <DailyQuest />
      </Layout>
    </>
  );
}
