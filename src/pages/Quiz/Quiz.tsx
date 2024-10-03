import Question from '../../features/Quiz/ui/Question';
import ResponseBox from '../../features/Quiz/ui/ResponseBox';
import { AlignCenter } from '../../style/LayOut';
import { GridContainer, HeaderSection, ProgressSection } from './styles';

export default function Quiz() {
  return (
    <AlignCenter>
      <GridContainer>
        <HeaderSection>
          <div>로고</div>
          <div>돈-??-프사 </div>
        </HeaderSection>
        <ProgressSection>진행도</ProgressSection>
        <Question></Question>
        <ResponseBox></ResponseBox>
      </GridContainer>
    </AlignCenter>
  );
}
