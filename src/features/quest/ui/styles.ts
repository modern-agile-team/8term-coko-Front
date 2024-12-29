import styled, { css } from 'styled-components';
import { getImageUrl } from '@utils/getImageUrl';
import { media } from '@/style/media';

interface QuestUrlProps {
  $isLearn?: boolean;
  $isQuest?: boolean;
}

export const QuestContainer = styled.div<QuestUrlProps>`
${({ $isLearn }) =>
  $isLearn &&
  css`
    width: 270px;
    margin-right: 28px;

    ${media.mobile} {
    display: none;
    }
  `}

${({ $isQuest = true }) =>
  $isQuest &&
  css`
    width: 683px;
    margin-top: 57px;
  `}
`;

// 오늘의 퀘스트 섹션
export const DailyQuestSection = styled.section<QuestUrlProps>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      width: 270px;
      height: 210px;
      margin: 89px 0 0 0;
      position: fixed;
      background-image: url(${getImageUrl('종이.svg')});
    `}

  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      width: 100%;
      height: 36px;
      border-radius: 10px;
      background: #ffb53d;
      box-shadow: 0 5px #f09900;
    `}
`;

// QuestContent와 QuestItemsContainer를 감싸는 컨테이너
export const QuestContentWrapper = styled.div<QuestUrlProps>`
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    `}
`;


// '오늘의 퀘스트' 텍스트 + 아이콘 감싸는 div
export const QuestContent = styled.div<QuestUrlProps>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      height: 36px;
    `}
`;

// '오늘의 퀘스트' 아이콘
export const QuestIcon = styled.img<QuestUrlProps>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      width: 38px;
      height: 42px;
      margin-bottom: 5px;
      background-size: cover;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      display: none;
    `}
`;

// '오늘의 퀘스트' 텍스트
export const DailyQuestText = styled.p<QuestUrlProps>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      font-size: 15px;
      color: #9f9f9f;
      text-align: center;
      margin-top: 20px;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      height: 36px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      font-weight: 700;
    `}
`;

export const QuestItemsContainer = styled.div<QuestUrlProps>`
${({ $isLearn }) =>
  $isLearn &&
  css`
    display: none;
  `}

${({ $isQuest = true }) =>
  $isQuest &&
  css`
    width: 100%
    height: 100%
    display: flex;
    flex-direction: column;
  `}
`;

// 퀘스트 목록 감싸는 div
export const QuestsWrapper = styled.div<QuestUrlProps>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      position: relative;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      width: 683px;
      height: 111px;
      border-radius: 20px;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 20px;
      box-shadow: 0 3px #e5e5e5;
      position: relative;
      z-index: -1;
    `}
`;

// 퀘스트 제목
export const QuestsTitle = styled.p<QuestUrlProps>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      font-size: 12px;
      color: #b8b8b8;
      text-align: start;
      margin: 0 0 3px 40px;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      color: #9f9f9f;
      font-size: 15px;
      font-weight: 700;
      position: absolute;
      top: 35px;
      left: 125px;
      text-align: left;
    `}
`;

// 진행도바 감싸는 div
export const ProgressBarWrapper = styled.div<QuestUrlProps>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3px;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 15px;
    `}
`;

// 진행도바 아이콘
export const ProgressBarIcon = styled.img<QuestUrlProps>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      display: none;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      left: 20px;
      width: 66px;
      height: 69px;
    `}
`;

// 보상 아이콘 감싸는 div
export const RewardIconWrapper = styled.div<QuestUrlProps>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 74px;
      height: 78px;
    `}
`;

// 보상 아이콘
export const RewardIcon = styled.img<QuestUrlProps>`
  width: 100%;
  height: 100%;
`;
