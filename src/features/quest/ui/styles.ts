import styled, { css } from 'styled-components';
import { getImageUrl } from '@utils/getImageUrl';

interface QuestUrlProps {
  $isLearn: boolean;
  $isQuest: boolean;
  $iconSrc?: string;
  $rewardSrc?: string;
  $rewardHeight?: string;
}

// 오늘의 퀘스트 섹션
export const DailyQuestSection = styled.section<QuestUrlProps>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      width: 270px;
      height: 210px;
      margin: 89px 28px 0 0;
      position: fixed;
      background-image: url(${getImageUrl('종이.svg')});
    `}

  ${({ $isQuest }) =>
    $isQuest &&
    css`
      width: 683px;
      height: 36px;
      margin-top: 57px;
      border-radius: 10px;
      background: #ffb53d;
      box-shadow: 0 5px #f09900;
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
  ${({ $isQuest }) =>
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
  ${({ $isQuest }) =>
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
  ${({ $isQuest }) =>
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

// 퀘스트 목록 감싸는 div
export const QuestsWrapper = styled.div<QuestUrlProps>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    `}
  ${({ $isQuest }) =>
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
  ${({ $isQuest }) =>
    $isQuest &&
    css`
      color: #9f9f9f;
      text-align: center;
      font-size: 15px;
      font-weight: 700;
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
  ${({ $isQuest }) =>
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
  ${({ $isQuest }) =>
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
  ${({ $isQuest }) =>
    $isQuest &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 64px;
      height: 44px;
    `}
`;

// 보상 아이콘
export const RewardIcon = styled.div<QuestUrlProps>`
  ${({ $rewardSrc }) =>
    $rewardSrc &&
    css`
      background-image: url(${$rewardSrc});
      background-size: cover;
      background-position: center;
    `}
  width: 100%;
  height: 100%;
`;
