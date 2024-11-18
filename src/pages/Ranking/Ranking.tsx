import { Wrapper, LeftSection, RightSection, Layout } from '../../style/style';
import { FeatureDiv } from '../../style/LayOut';
import MenuBar from '../../common/layout/MenuBar';
import Header from '../../common/layout/Header';
import CokoLogo from '../../common/layout/CokoLogo';

export default function Ranking() {
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
        <FeatureDiv $width="666px" $height="338px" $marginTop="98px">
          내 랭킹 칸
        </FeatureDiv>
        <FeatureDiv $width="666px" $height="28px" $marginTop="22px">
          정렬기준
        </FeatureDiv>
        <FeatureDiv $width="666px" $height="338px" $marginTop="22px">
          다른 사람들 랭킹
        </FeatureDiv>
      </Layout>
    </>
  );
}
