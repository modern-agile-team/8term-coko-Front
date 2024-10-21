import { AlignCenter, GridContainer, Layout } from './style';
import { FeatureDiv } from '../../style/LayOut';
import SelectSection from '../../common/layout/SelectSection';
import MenuBar from '../../common/layout/MenuBar';
import Header from '../../common/layout/Header';
import DailyQuest from '../../features/Quest/ui/DailyQuest';
import CokoLogo from '../../common/layout/CokoLogo';

export default function Learn() {
  return (
    <AlignCenter>
      <GridContainer>
        <Layout>
          <CokoLogo />
          <MenuBar />
        </Layout>
        <Layout>
          <FeatureDiv $width="666px" $height="45px" $marginTop="98px">
            {/* 진행도 */}
          </FeatureDiv>
          <SelectSection />
          <FeatureDiv $width="666px" $height="468px" $marginTop="25px">
            챕터
          </FeatureDiv>
        </Layout>
        <Layout>
          <Header />
          <DailyQuest />
        </Layout>
      </GridContainer>
    </AlignCenter>
  );
}
