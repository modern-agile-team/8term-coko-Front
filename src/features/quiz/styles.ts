import styled, { css, keyframes } from 'styled-components';
import Quiz from '../../types/Quiz';

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

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

//title과 question이 들어가는 영역
export const QuestionSection = styled.section<{
  $category: Quiz['category'];
}>`
  display: flex;
  flex-direction: column;
  margin-top: 37px;
  width: 60vw;
  height: 35vh;
  border: 2px solid ${({ $category }) => categoryColor[$category].border};
  font-size: 18px;
  font-weight: 700;
  > div:nth-last-child(1) {
    display: flex;
    flex-wrap: wrap;
    padding: 26px 0 0 80px;
  }
`;
export const Titlediv = styled.div<{
  $category: Quiz['category'];
}>`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 60px;
  border-bottom: 2px solid ${({ $category }) => categoryColor[$category].border};
  color: #ffffff;
  background-color: ${({ $category }) => categoryColor[$category].background};
  line-height: 24px;
  padding-left: 17px;
`;
//question 스타일

//
export const OXButtonSection = styled.section`
  margin-top: 23px;
  display: flex;
  justify-content: center;
  gap: 66px;
  padding: 0;
  > button {
    background-color: transparent;
    border-color: transparent;
  }
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
  gap: 50px;
  margin-top: 24px;
  :nth-child(1) {
    align-self: flex-end;
  }
`;
//단답형 문항에서 단답형을 쓰는 인풋박스
export const ShortAnswerInput = styled.input`
  background-color: #fff8eb;
  text-align: center;
  width: 505px;
  height: 23px;
  font-weight: 700;
  border: none;
  border-bottom: 2px dashed #ba9372;
  color: #a2a2a2;
  border-image: repeating-linear-gradient(
      to right,
      #ba9372 0,
      #ba9372 15px,
      transparent 15px,
      transparent 30px
    )
    1;
  &:focus {
    outline: none;
  }
`;

//블럭유형에서 리스트박스를 잡는 리스트 박스
export const CombinationSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 70vw;
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
//모달 애니메이션
const fadeInScaleUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8); 
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1); 
  }
`;
export const CompensationSection = styled.section`
  animation: ${fadeInScaleUp} 0.7s ease-out;
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
  box-shadow: 0 11px #e5e5e5;
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
export const TotalResultsTextDiv = styled.div`
  margin: 44px 0 17px 0;
  display: flex;
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;

  > p:nth-child(1) {
    line-height: 12px;
    font-weight: 700;
    color: #49ff87;
    font-size: 26px;
  }
  > p:nth-child(2) {
    line-height: 24px;
    font-size: 26px;
    color: #ff4949;
  }
`;
export const TotalResultsRewardDiv = styled.div`
  display: flex;
`;
export const ImageDescriptionDiv = styled.div`
  margin: 34px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  > p:nth-last-child(1) {
    align-self: center;
    position: relative;
    top: 30px;
    color: #d30000;
    font-size: 10px;
  }
`;
export const RedirectToLearnButton = styled.button<{ $isActive: boolean }>`
  width: 152px;
  height: 25px;
  text-align: center;
  border-radius: 24px;
  background: #70f5ff;
  border: 2px solid #00dce8;
  text-decoration-line: none;
  color: #ffffff;
  align-self: flex-end;
  margin: 35px 86px 0 0;
  ${({ $isActive }) =>
    $isActive
      ? css`
          border-color: #00d9e9;
          background-color: #00d9e9;
        `
      : css`
          &:hover {
            border-color: #00868d;
            background-color: #00d9e9;
          }
        `}
`;
export const TotalResultProgressDiv = styled.div`
  display: grid;
  grid-template-columns: 45px 242px 45px;
  align-items: center;
  p:nth-child(1) {
    color: #d30000;
    font-size: 10px;
    height: 15px;
    padding-left: 5px;
  }
  > img:first-child {
    position: relative;
    top: 10%;
  }
  > img:last-child {
    position: relative;
    top: -10%;
  }
`;
export const Img = styled.img<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

// Learn 페이지 퀴즈들 감싸는 박스
export const QuizBox = styled.div`
  width: 693px;
  margin-top: 270px;
  border: none;
`;

// 지도 윗 부분 이미지
export const UpperBackgroundImg = styled.div`
  width: 693px;
  height: 147px;
  background-image: url(${imgUrl}배경1.webp);
  display: flex;
  align-items: end;
`;

// 버튼 섹션 전체를 감싸는 Wrapper (백그라운드 이미지 고정)
export const EntireSectionContainer = styled.div`
  background-image: url(${imgUrl}배경2.webp);
`;

// 섹션 하나를 감싸는 Wrapper
export const SectionWrapper = styled.div`
  padding-bottom: 20px;
`;

// 섹션 제목(이름)
export const SectionTitle = styled.h4`
  width: 693px;
  font-size: 17px;
  color: #ffffff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: #ffffff;
    margin: 0 55px;
    max-width: 200px;
  }
`;

// 버튼 배치를 위한 Wrapper (그리드 레이아웃)
export const ButtonGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

// 키캡(키보드 스위치) 버튼
export const KeyboardButton = styled.button`
  width: auto;
  height: auto;
  padding: 0;
  border: none;
  background-color: transparent;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
