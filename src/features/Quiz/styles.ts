import styled from 'styled-components';

//문제(Quiz)의 제목(title)과 문항(question)이 들어갈 공간
export const QuestionSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 343px;
  margin-top: 22px;
  border-radius: 2px;
  border: 1px solid #afb1b6;
  background: #efeff0;
  grid-column: 3;
  font-size: 1rem;
`;

//답을 적거나 클릭하는 영역을 잡는 스타일
interface ResponseBoxProps {
  $gapColumn?: string;
  $gridColumn?: string;
  $justifyContent?: string;
}

export const ResponseBoxSection = styled.section<ResponseBoxProps>`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
  align-items: center;
  flex-wrap: wrap;
  background: #efeff0;
  grid-column: ${({ $gridColumn }) => $gridColumn || 3};
  margin-top: 20px;
  border-radius: 2px;
  border: 1px solid #afb1b6;
  column-gap: ${({ $gapColumn }) => $gapColumn || '0px'};
`;

//캐릭터가 들어갈 박스
interface CharacterBoxProps {
  $margin: string;
}

export const CharacterBox = styled.div<CharacterBoxProps>`
  width: 176px;
  height: 115.757px;
  border: 2px solid #afb1b6;
  background: #efeff0;
  margin: ${({ $margin }) => $margin || '0'};
  border-radius: 8px;
`;

//ox유형에서 ox버튼
export const OXButton = styled.button`
  width: 110px;
  height: 108px;
  border-radius: 10px;
`;

//객관식에서 각 문항 버튼
export const MultipleChoiceQuestionButton = styled.button`
  width: 372px;
  height: 26px;
  border-radius: 8px;
  background: #19191b;
  color: #ffffff;
  margin-top: 13px;
`;

//단답형 문항에서 단답형을 쓰는 인풋박스
export const ShortAnswerInput = styled.input`
  width: 372px;
  height: 23px;
`;

//블럭유형에서 리스트박스를 잡는 리스트 박스
export const CombinationUl = styled.ul`
  display: flex;
  grid-column: 3;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 49px 0 0 0;
  padding: 0;
  :nth-last-child(1) {
    margin-right: auto;
  }
`;

//블럭유형에서 각 텍스트에 해당하는 리스트 스타일
export const TextBlockLi = styled.li`
  border-radius: 8px;
  background: #19191b;
  color: #ffffff;
  list-style-type: none;
  padding: 0 20px;
  height: 26px;
`;

//화면 하단의
export const ResponseButton = styled.button`
  width: 94px;
  height: 26px;
  border-radius: 24px;
`;

// Learn 페이지 퀴즈들 감싸는 박스
export const QuizBox = styled.div`
  width: 666px;
  height: 468px;
  margin-top: 25px;
  border: 1px solid;
`;

// 버튼 레이아웃 지정
export const ButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// 키캡(키보드 스위치) 버튼 (스타일 변경 예정)
export const KeyboardButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 15px;
  background: #000000;
  color: #ffffff;
  margin-top: 20px;
`;
