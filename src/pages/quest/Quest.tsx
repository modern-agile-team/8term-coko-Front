import * as globalS from '@/style/style';
import MenuBar from '@common/layout/MenuBar';
import DailyQuest from '@features/quest/ui/DailyQuest';
import MainQuest from '@/features/quest/ui/MainQuest';
import CokoLogo from '@common/layout/CokoLogo';
import Header from '@common/layout/Header';

export default function Quest() {
  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <CokoLogo />
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <Header />
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <DailyQuest />
        <MainQuest />
      </globalS.Layout>
    </>
  );
}
