import {
  AlignCenter,
  GridContainer,
  LayOutDiv,
  FeatureDiv,
} from '../../style/LayOut';
import MenuBar from '../../common/layout/MenuBar';
import DailyQuest from '../../features/Quest/ui/DailyQuest';

export default function Quest() {
  return (
    <AlignCenter>
      <GridContainer>
        <LayOutDiv>
          <FeatureDiv $width="176px" $height="42px" $marginTop="50px">
            로고
          </FeatureDiv>
          <MenuBar />
        </LayOutDiv>
        <LayOutDiv>
          <DailyQuest />
          <FeatureDiv $width="666px" $height="283px" $marginTop="24px">
            메인 퀘스트 칸
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
