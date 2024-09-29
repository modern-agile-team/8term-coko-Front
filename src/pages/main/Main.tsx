import { GridDiv } from '../../style/gridSystem';
import { LayOutDiv, FeatureDiv } from './style';
export default function Main() {
  return (
    <GridDiv>
      <LayOutDiv $marginTop="50px" $height="739px">
        사이드바
      </LayOutDiv>
      <LayOutDiv $height="100vh ">
        <FeatureDiv
          $width="676px"
          $height="53px"
          $backGroundColor="#FFFFFF"
          $marginTop="42px"
        >
          진행도
        </FeatureDiv>
        <FeatureDiv
          $width="676px"
          $height="123px"
          $backGroundColor="#FFFFFF"
          $marginTop="25px"
        >
          챕터 선택
        </FeatureDiv>
        <FeatureDiv
          $width="676px"
          $height="468px"
          $backGroundColor="#FFFFFF"
          $marginTop="25px"
        >
          챕터
        </FeatureDiv>
      </LayOutDiv>

      <LayOutDiv $marginTop="42px" $height="303px">
        <FeatureDiv
          $width="240px"
          $height="52px"
          $backGroundColor="#FFFFFF"
          $marginTop="25px"
        >
          생명력/프로필
        </FeatureDiv>
        <FeatureDiv
          $width="250px"
          $height="197px"
          $backGroundColor="#FFFFFF"
          $marginTop="54px"
        >
          일일 퀘스트
        </FeatureDiv>
      </LayOutDiv>
    </GridDiv>
  );
}
