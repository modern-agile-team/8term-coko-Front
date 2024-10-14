import {
  GridContainer,
  AlignCenter,
  LayOutDiv,
  FeatureDiv,
} from '../../style/LayOut';
import SelectSection from '../../common/layout/SelectSection';
import MenuBar from '../../common/layout/MenuBar';
import Header from '../../common/layout/Header';
import DailyQuest from '../../features/Quest/ui/DailyQuest';

export default function Learn() {
  return (
    <AlignCenter>
      <GridContainer>
        <LayOutDiv $height="100vh">
          <FeatureDiv $width="176px" $height="42px" $marginTop="50px">
            로고
          </FeatureDiv>
          <MenuBar />
        </LayOutDiv>
        <LayOutDiv $height="100vh">
          <FeatureDiv $width="666px" $height="45px" $marginTop="98px">
            {/* 진행도 */}
          </FeatureDiv>
          <SelectSection />
          <FeatureDiv $width="666px" $height="468px" $marginTop="25px">
            챕터
          </FeatureDiv>
        </LayOutDiv>
        <LayOutDiv $height="100vh">
          <Header />
          <DailyQuest />
        </LayOutDiv>
      </GridContainer>
    </AlignCenter>
  );
}
