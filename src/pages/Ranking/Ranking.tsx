import { Link } from 'react-router-dom';
import {
  AlignCenter,
  GridContainer,
  LayOutDiv,
  FeatureDiv,
} from '../../style/LayOut';

export default function Ranking() {
  return (
    <AlignCenter>
      <GridContainer>
        <LayOutDiv>
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
        <LayOutDiv>
          <FeatureDiv $width="666px" $height="338px" $marginTop="98px">
            내 랭킹 칸
          </FeatureDiv>
          <FeatureDiv $width="666px" $height="28px" $marginTop="22px">
            정렬기준
          </FeatureDiv>
          <FeatureDiv $width="666px" $height="338px" $marginTop="22px">
            다른 사람들 랭킹
          </FeatureDiv>
        </LayOutDiv>
        <LayOutDiv>
          <FeatureDiv $width="294px" $height="42px" $marginTop="42px">
            생명력/프로필
          </FeatureDiv>
        </LayOutDiv>
      </GridContainer>
    </AlignCenter>
  );
}
