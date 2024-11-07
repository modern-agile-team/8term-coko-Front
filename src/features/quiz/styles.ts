import styled, { css, keyframes } from 'styled-components';
import Quiz from '../../types/Quiz';

//문제 유형별 컬러 객체
const categoryColor: Record<
  Quiz['category'],
  { background: string; border: string }
> = {
  COMBINATION: { background: '#507AFF', border: '#3E71FF' },
  MULTIPLE_CHOICE: { background: '#FFBE00', border: '#E0A000' },
  OX_SELECTOR: { background: '#2AD363', border: '#00AA34' },
  SHORT_ANSWER: { background: '#FF7676', border: '#FF5050' },
};

//tite과 question이 들어가는 영역
export const QuestionSection = styled.section<{ $category: Quiz['category'] }>`
  display: flex;
  flex-direction: column;
  margin-top: 37px;
  width: 922px;
  border: 2px solid ${({ $category }) => categoryColor[$category].border};
`;
//title 스타일
export const TitleDiv = styled.div<{ $category: Quiz['category'] }>`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 60px;
  border-bottom: 2px solid ${({ $category }) => categoryColor[$category].border};
  color: #ffffff;
  background-color: ${({ $category }) => categoryColor[$category].background};
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  padding-left: 17px;
`;
//question 스타일
export const QuestionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 200px;
  padding: 26px 0 0 80px;
  font-family: 'MapleStory';
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  gap: 0px;
  flex-grow: 0;
`;

export const OXButtonDiv = styled.div`
  margin-top: 23px;
  display: flex;
  justify-content: center;
  gap: 66px;
  padding: 0;
`;

//캐릭터 이미지
interface CharacterBoxProps {
  $margin?: string;
}
export const CharacterImg = styled.img<CharacterBoxProps>`
  margin: ${({ $margin }) => $margin || '0'};
`;
//ox유형에서 ox버튼
export const OXButton = styled.button`
  background-color: transparent;
  border-color: transparent;
`;
//객관식 버튼, 이미지 박스 영역
export const MultipleChoiceSection = styled.section`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
`;
//객관식 버튼 모아놓는 스타일
export const MultipleChoiceButtonDiv = styled.div`
  display: grid;
  grid-template-columns: 372px 372px;
  grid-template-rows: 43px 43px;
  grid-row-gap: 15px;
  grid-column-gap: 20px;
`;
//객관식에서 각 문항 버튼
export const MultipleChoiceButton = styled.button<{
  $isClick: boolean;
}>`
  border-radius: 8px;
  border: 2px solid #a5ecf0;
  background: #f4f4f4;
  color: #a2a2a2;
  //버튼이 눌렸을 때
  ${({ $isClick }) =>
    $isClick &&
    css`
      border-color: #00b6c0;
      background-color: #00d9e9;
      color: #ffffff;
    `}
`;
//단형 영역
export const ShortAnswerSection = styled.section`
  display: flex;
  align-items: center;
`;
//단답형 문항에서 단답형을 쓰는 인풋박스
export const ShortAnswerInput = styled.input`
  text-align: center;
  width: 505px;
  height: 23px;
  font-family: 'MapleStroy';
  font-weight: 700;
  border: none;
  border-bottom: 2px dashed #ba9372;
  color: #a2a2a2;
  &:focus {
    outline: none;
  }
`;
//블럭유형에서 리스트박스를 잡는 리스트 박스
export const CombinationSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 1031px;
  gap: 10px;
  justify-content: center;
  margin: 49px 0 0 0;
  padding: 0;
  :nth-last-child(1) {
    margin-right: auto;
  }
`;

//블럭유형에서 각 텍스트에 해당하는 리스트 스타일

export const TextBlockButton = styled.button<{ $selected?: boolean }>`
  padding: 0 20px;
  border-radius: 8px;
  height: 26px;
  border: 2px solid #a5ecf0;
  background-color: #f4f4f4;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: #cbcbcb;
  ${({ $selected }) =>
    $selected &&
    css`
      background-color: #00d9e9;
      border-color: #00b6c0;
      color: #00d9e9;
    `};
`;
//화면 하단의
export const ResponseButton = styled.button<{ $disabled?: boolean }>`
  width: 130px;
  height: 40px;
  border: 2px solid #ffe8c7;
  gap: 6px;
  border-radius: 24px;
  font-family: 'MaplestoryBold';
  font-size: 18px;
  line-height: 24px;
  background-color: #f0d8a7;
  color: #ffffff;
  ${({ $disabled }) =>
    $disabled &&
    css`
      background-color: #f0d8a7;
      border-color: #ffe8c7;
      color: #e6e6e6;
    `}
`;
export const SubmitSection = styled.section`
  display: flex;
  width: 980px;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
`;

export const EmptyDiv = styled.div`
  width: 100px;
  height: 20px;
  background-color: gray;
  border-radius: 15px;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const ScoreSection = styled.section<{ $backGroundImage: string }>`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-image: url(${({ $backGroundImage }) => $backGroundImage});
  background-size: cover;
  width: 100vw;
  height: 25%;
  position: fixed;
  bottom: 0;
  animation: ${fadeIn} 0.7s ease-out;
`;
export const NextPageButton = styled.button<{ $isAnswer: boolean }>`
  width: 175px;
  border: 2px solid #01f152;
  margin: 0 81px 39px 0;
  background-color: #49ff87;
  border-radius: 24px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  &:hover {
    background-color: #00bb3f;
    border-color: #00812c;
  }
  //정답이 아닐 때
  ${({ $isAnswer }) =>
    !$isAnswer &&
    css`
      border-color: #ff9b9c;
      background-color: #ff4949;
      &:hover {
        background-color: #ff0004;
        border-color: #e8080c;
      }
    `}
`;
export const LineChangeDiv = styled.div`
  flex-basis: 100%;
  height: 10px;
`;
export const AnswerDiv = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  margin: 0 350px 58px 0;
`;
export const TotalResultSection = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 747.42px;
  height: 372.04px;
  background: #ffffff;
  border-radius: 40px;
`;
export const DashLineHr = styled.hr`
  border: 2px dashed #00d9e9;
  width: 80%;
  border-image: repeating-linear-gradient(
      to right,
      #00d9e9 0,
      #00d9e9 10px,
      transparent 15px,
      transparent 30px
    )
    1;
`;
