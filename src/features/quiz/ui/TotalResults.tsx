import type Quiz from '../../../types/Quiz';
import {
  DashLineHr,
  ImageDescriptionDiv,
  Img,
  LearnLink,
  TotalResultSection,
  TotalResultsImageDiv,
  TotalResultsTextBox,
} from '../styles';
interface TotalResultsProps {
  quizzes: Quiz[];
  totalResults: boolean[];
}
export default function TotalResults({ totalResults }: TotalResultsProps) {
  const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

  return (
    <>
      <TotalResultSection>
        <TotalResultsTextBox>
          총<p>&nbsp; {totalResults.filter(result => result).length}&nbsp;</p>
          문제를 맞혔고 <p>&nbsp;보상</p>을 얻었어!
        </TotalResultsTextBox>
        <DashLineHr />
        <TotalResultsImageDiv>
          <ImageDescriptionDiv>
            <Img
              $width="201px"
              $height="159px"
              src={`${imgUrl}레벨1코코.svg`}
              alt="레벨업 이미지"
            />
            <p>Level.1</p>
          </ImageDescriptionDiv>
          <ImageDescriptionDiv>
            <Img
              $width="146px"
              $height="116px"
              src={`${imgUrl}과일바구니-아이템.svg`}
              alt="보상"
            />
            <p>생명력을 위한 과일 바구니</p>
          </ImageDescriptionDiv>
        </TotalResultsImageDiv>
        <DashLineHr />

        <LearnLink to="/learn">메인으로</LearnLink>
      </TotalResultSection>
    </>
  );
}
