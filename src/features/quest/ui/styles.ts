import styled, { css } from 'styled-components';
import { getImageUrl } from '@utils/getImageUrl';
import { MEDIA } from '@style/constants';

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

      ${MEDIA.mobile} {
        display: none;
      }
    `}

  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      max-width: 683px;
      margin-top: 50px;
    `}
`;

// 퀘스트 섹션
export const QuestSection = styled.section<Omit<QuestUrlProps, '$isQuest'>>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      width: 270px;
      height: 210px;
      margin: 89px 0 0 0;
      position: fixed;
      background-image: url(${getImageUrl('종이.svg')});
    `}
`;

// QuestContent와 QuestWrapper를 감싸는 컨테이너
export const QuestContentWrapper = styled.div<Omit<QuestUrlProps, '$isLearn'>>`
  ${({ $isQuest }) =>
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
      width: 683px;
      border-radius: 10px;
      background: #ffb53d;
      box-shadow: 0 5px #f09900;
      height: 36px;

      ${MEDIA.mobile} {
        width: calc(100vw - 80px);
        max-width: 683px;
        min-width: 340px;
      }
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
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      display: none;
    `}
`;

// '오늘의 퀘스트' 혹은 '메인 퀘스트' 텍스트
export const QuestHeading = styled.h1<QuestUrlProps>`
  ${({ $isLearn }) =>
    $isLearn &&
    css`
      font-size: 15px;
      color: #9f9f9f;
      text-align: center;
      margin-top: 15px;
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

// 단일 퀘스트 감싸는 div
export const QuestWrapper = styled.div<QuestUrlProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  ${({ $isLearn }) =>
    $isLearn &&
    css`
      top: 25px;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      width: 683px;
      height: 111px;
      border-radius: 20px;
      background: #fff;
      justify-content: center;
      margin-top: 20px;
      box-shadow: 0 3px #e5e5e5;

      ${MEDIA.mobile} {
        width: calc(100vw - 80px);
        max-width: 683px;
        min-width: 340px;
      }
    `}
`;

// 퀘스트 제목
export const QuestsTitle = styled.h2<QuestUrlProps>`
  font-weight: 700;

  ${({ $isLearn }) =>
    $isLearn &&
    css`
      color: #b8b8b8;
      font-size: 13px;
      text-align: start;
      margin-left: 37px;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      color: #9f9f9f;
      font-size: 15px;
      position: absolute;
      top: 35px;
      left: 125px;
      text-align: left;

      ${MEDIA.mobile} {
        left: 110px;
      }
    `}
`;

export const LoginRequiredMessage = styled.p<QuestUrlProps>`
  color: #000000;
  text-align: center;
  font-weight: 700;

  ${({ $isLearn }) =>
    $isLearn &&
    css`
      font-size: 13px;
      margin-top: 15px;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      font-size: 15px;
    `}
`;

// 진행도바 감싸는 div
export const ProgressBarWrapper = styled.div<QuestUrlProps>`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  ${({ $isLearn }) =>
    $isLearn &&
    css`
      gap: 3px;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      gap: 15px;
      padding-left: 25px;
      padding-right: 25px;
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
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $isLearn }) =>
    $isLearn &&
    css`
      width: 24px;
      height: 26px;
    `}
  ${({ $isQuest = true }) =>
    $isQuest &&
    css`
      width: 74px;
      height: 78px;

      ${MEDIA.mobile} {
        display: none;
      }
    `}
`;

// 보상 아이콘
export const RewardIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const ChallengeGrid = styled.div`
  display: grid;
  width: 683px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0 3px #e5e5e5;
  background: #fff;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 20px;
  justify-items: center;

  ${MEDIA.mobile} {
    width: calc(100vw - 80px);
    max-width: 683px;
    min-width: 340px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 100px;
  }
`;

export const BadgeItem = styled.div<{ $completed?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #ffe161;
  background: #ffefaa;
  width: 133px;
  height: 141px;
  ${({ $completed }) => `
    opacity: ${$completed ? 1 : 0.5};
    filter: ${$completed ? 'none' : 'grayscale(100%)'};
  `}

  img {
    width: 104px;
    height: 104px;
  }
`;

export const BadgeName = styled.p`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 700;
`;
