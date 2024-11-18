import { Wrapper, LeftSection, RightSection, Layout } from '../../style/style';
import { FeatureDiv } from '../../style/LayOut';
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
        <FeatureDiv $width="666px" $height="283px" $marginTop="24px">
          메인 퀘스트 칸
        </FeatureDiv>
      </Layout>
    </>
  );
}
