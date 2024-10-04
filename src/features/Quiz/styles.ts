import styled from 'styled-components';
import ResponseBoxUi from '../../types/ResponseBoxUi';
export const QuestionSection = styled.section`
  height: 343px;
  margin-top: 22px;
  border-radius: 2px;
  border: 1px solid #afb1b6;
  background: #efeff0;
  grid-column: 3;
  font-size: 1rem;
`;
export const ResponseBoxSection = styled.section<ResponseBoxUi>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #efeff0;
  grid-column: 3;
  margin-top: 20px;
  border-radius: 2px;
  border: 1px solid #afb1b6;
  column-gap: ${({ $gapColumn }) => $gapColumn || '0px'};
`;
export const CharacterBox = styled.div`
  width: 176px;
  height: 115.757px;
  border: 2px solid #afb1b6;
  background: #efeff0;
  border-radius: 8px;
  margin: 0 102px;
`;

export const OXButton = styled.button`
  width: 110px;
  height: 108px;
  border-radius: 10px;
`;

export const MultipleChoiceQuestionButton = styled.button`
  width: 372px;
  height: 26px;
  border-radius: 8px;
  background: #19191b;
  color: #ffffff;
  margin-top: 13px;
`;

export const ShortAnswerInput = styled.input`
  width: 372px;
  height: 23px;
`;

export const TextBlockLi = styled.li`
  border-radius: 8px;
  background: #19191b;
  color: #ffffff;
  list-style-type: none;
  padding: 0 20px;
  height: 26px;
`;

export const CombinationUl = styled.ul`
  display: flex;
  grid-column: 3;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 49px 0 0 0;
  padding: 0;
`;
