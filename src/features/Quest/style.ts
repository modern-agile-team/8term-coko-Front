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

export const QuestContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const QuestIcon = styled.img`
  width: 38px;
  height: 42px;
  margin-bottom: 5px;
`;

export const DailyQuestText = styled.div`
  font-size: 15px;
  color: #9f9f9f;
  text-align: center;
  margin-top: 20px;
`;

export const QuestsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const QuestsTitle = styled.div`
  font-size: 12px;
  color: #b8b8b8;
  text-align: start;
  margin: 0 0 3px 40px;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const RewardIcon = styled.img`
  width: 24px;
  height: 24px;
`;
