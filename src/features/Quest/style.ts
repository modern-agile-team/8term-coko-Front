import styled, { css } from 'styled-components';
const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

export const DailyQuestSection = styled.section<{
  $isLearn: boolean;
  $isQuest: boolean;
}>`
  // URL에 따라 스타일 변경
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      width: 270px;
      height: 210px;
      margin: 89px 28px 0 0;
      position: fixed;
      background-image: url(${imgUrl}종이.svg);
    `}

  ${({ $isQuest }) =>
    $isQuest &&
    css`
      width: 666px;
      height: 381px;
      margin-top: 98px;
      border: solid 1px;
    `}
`;

export const TextOverlay = styled.div`
  font-size: 15px;
  color: #9f9f9f;
  text-align: center;
  margin-top: 27px;
`;
