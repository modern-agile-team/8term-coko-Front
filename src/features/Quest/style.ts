import styled, { css } from 'styled-components';

export const DailyQuestSection = styled.section<{
  isLearn: boolean;
  isQuest: boolean;
}>`
  // URL에 따라 스타일 변경
  ${({ isLearn }) =>
    isLearn &&
    css`
      width: 274px;
      height: 158px;
      margin-top: 47px;
      text-align: center;
      border: solid 1px;
    `}

  ${({ isQuest }) =>
    isQuest &&
    css`
      width: 666px;
      height: 381px;
      margin-top: 98px;
      border: solid 1px;
    `}
`;
