import {
  GridContainer,
  AlignCenter,
  LayOutDiv,
  FeatureDiv,
} from '../../style/LayOut';
import SelectSection from '../../common/layout/SelectSection';
import MenuBar from '../../common/layout/MenuBar';
import Header from './../../common/layout/Header';

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
          <FeatureDiv $width="666px" $height="105px" $marginTop="25px">
            <SelectSection />
          </FeatureDiv>
          <FeatureDiv $width="666px" $height="468px" $marginTop="25px">
            챕터
          </FeatureDiv>
        </LayOutDiv>
        <LayOutDiv $height="100vh">
          <Header />
          <FeatureDiv $width="274px" $height="158px" $marginTop="47px">
            일일 퀘스트
          </FeatureDiv>
        </LayOutDiv>
      </GridContainer>
    </AlignCenter>
  );
}
