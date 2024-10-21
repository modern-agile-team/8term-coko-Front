import {
  AlignCenter,
  GridContainer,
  LayOutDiv,
  FeatureDiv,
} from '../../style/LayOut';
import MenuBar from '../../common/layout/MenuBar';
import DailyQuest from '../../features/Quest/ui/DailyQuest';
import CokoLogo from '../../common/layout/CokoLogo';
import Header from '../../common/layout/Header';

export default function Quest() {
  return (
    <AlignCenter>
      <GridContainer>
        <LayOutDiv>
          <CokoLogo />
          <MenuBar />
        </LayOutDiv>
        <LayOutDiv>
          <DailyQuest />
          <FeatureDiv $width="666px" $height="283px" $marginTop="24px">
            메인 퀘스트 칸
          </FeatureDiv>
        </LayOutDiv>
        <LayOutDiv>
          <Header />
        </LayOutDiv>
      </GridContainer>
    </AlignCenter>
  );
}
