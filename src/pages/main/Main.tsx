import { Link } from 'react-router-dom';
import {
  GridContainer,
  AlignCenter,
  LayOutDiv,
  FeatureDiv,
} from '../../style/LayOut';
export default function Main() {
  return (
    <AlignCenter>
      <GridContainer>
        <LayOutDiv $height="100vh">
          <FeatureDiv $width="176px" $height="42px" $marginTop="50px">
            로고
          </FeatureDiv>
          {['', 'Ranking', 'quest', 'store', 'profile', 'setting'].map(
            (value, index) => (
              <FeatureDiv
                $width="176px"
                $height="42px"
                $marginTop="40px"
                key={index}
              >
                {value}
                <Link to={`/${value}`}>이동</Link>
              </FeatureDiv>
            )
          )}
        </LayOutDiv>
        <LayOutDiv $height="100vh ">
          <FeatureDiv $width="666px" $height="45px" $marginTop="98px">
            진행도
          </FeatureDiv>
          <FeatureDiv $width="666px" $height="105px" $marginTop="25px">
            챕터 선택
          </FeatureDiv>
          <FeatureDiv $width="666px" $height="468px" $marginTop="25px">
            챕터
          </FeatureDiv>
        </LayOutDiv>

        <LayOutDiv $height="100vh">
          <FeatureDiv $width="294px" $height="42px" $marginTop="42px">
            생명력/프로필
          </FeatureDiv>
          <FeatureDiv $width="274px" $height="158px" $marginTop="47px">
            일일 퀘스트
          </FeatureDiv>
        </LayOutDiv>
      </GridContainer>
    </AlignCenter>
  );
}
