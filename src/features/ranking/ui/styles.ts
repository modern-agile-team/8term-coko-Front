import styled, { css } from 'styled-components';
import { getImageUrl } from '@utils/getImageUrl';

interface MedalImgProps {
  $rank: number;
  $isMyRank?: boolean;
}

export const RankingContainer = styled.div`
  width: 683px;
  margin-top: 62px;
`;

export const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 47px;
  margin-bottom: 27px;
  position: relative;
`;

export const SortSelectButton = styled.button<{ $isToggled: boolean }>`
  width: 136px;
  height: 30px;
  color: #fff3c0;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  background: ${({ $isToggled }) =>
    $isToggled
      ? `#d37744 url(${getImageUrl(
          '정렬-아래-화살표.svg'
        )}) no-repeat right 10px center`
      : `#d37744 url(${getImageUrl(
          '정렬-위-화살표.svg'
        )}) no-repeat right 10px center`};
  /* border-radius: 15px 15px 0 0; */
  border-radius: ${({ $isToggled }) => ($isToggled ? '15px 15px 0 0' : '15px')};
  border: 2px solid #c26b3b;
  &:focus {
    outline: none;
  }
`;

export const SortOptionUl = styled.ul`
  position: absolute;
  top: 39px;
  width: 136px;
  border-radius: 0 0 15px 15px;
  background-color: #fff3c0;
  list-style: none;
  z-index: 10;
  border: 2px solid #c26b3b;
  border-top: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

export const SortOptionLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font-size: 12px;
  font-weight: 700;
  color: #d37744;
  background-color: #fff3c0;
  border-bottom: 2px solid #c26b3b;
  cursor: pointer;

  &:hover {
    background-color: #d37744;
    color: #fff3c0;
    border-bottom: 2px solid #c26b3b;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const RankingItem = styled.div<{ $rank: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 115px;
  border-radius: 20px;
  margin-bottom: 27px;

  ${({ $rank }) =>
    $rank === 1 &&
    css`
      background-color: #ffc000;
      box-shadow: 0 7px #f3ab37;
      color: #ffffff;
    `}
  ${({ $rank }) =>
    $rank === 2 &&
    css`
      background-color: #e2e2e2;
      box-shadow: 0 7px #d6d6d6;
      color: #ffffff;
    `}
  ${({ $rank }) =>
    $rank === 3 &&
    css`
      background-color: #e9894d;
      box-shadow: 0 7px #d7783d;
      color: #ffffff;
    `}
  ${({ $rank }) =>
    $rank > 3 &&
    css`
      background-color: ${$rank % 2 === 0 ? '#ffe6b3' : '#fff3c0'};
      box-shadow: 0 7px ${$rank % 2 === 0 ? '#f5d79b' : '#ffe6b3'};
      color: ${$rank % 2 === 0 ? '#D80000;' : '#D37744'};
    `}
`;

export const MedalImg = styled.div<MedalImgProps>`
  position: relative;
  width: 68px;
  height: 85px;
  margin-left: 23px;
  align-self: flex-start;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${({ $isMyRank }) =>
    $isMyRank &&
    css`
      width: 103px;
      height: 125px;
      margin-right: 40px;
    `}
  ${({ $rank }) =>
    $rank === 1 &&
    css`
      background-image: url(${getImageUrl('금메달.svg')});
    `}
  ${({ $rank }) =>
    $rank === 2 &&
    css`
      background-image: url(${getImageUrl('은메달.svg')});
    `}
  ${({ $rank }) =>
    $rank === 3 &&
    css`
      background-image: url(${getImageUrl('동메달.svg')});
    `}
    ${({ $rank, $isMyRank }) =>
    $rank > 3 &&
    $isMyRank &&
    css`
      background-image: url(${getImageUrl('나의-순위.svg')});
    `}
`;

export const MyRankTextWrapper = styled.div<{ $rank: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  color: ${({ $rank }) =>
    $rank <= 3
      ? '#ffffff' // 1~3순위
      : $rank % 2 === 0
      ? '#d80000' // 4, 6, 8, ...
      : '#d37744'}; // 5, 7, 9, ...
`;

export const MyRankLabel = styled.label`
  font-size: 12px;
  font-weight: 700;
  display: block;
  margin-bottom: 5px;
`;

export const MyRankNumber = styled.span`
  font-size: 22px;
  font-weight: 700;
`;

export const RankText = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin-left: 15px;
  margin-right: 30px;
`;

export const UserInfo = styled.div`
  margin-left: 15px;
`;

export const UserLevelText = styled.p`
  font-size: 15px;
  font-weight: 700;
`;

export const UserNameText = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const ProfileWrapper = styled.div`
  position: relative;
`;

export const ProfileOutline = styled.img`
  width: 64.287px;
  height: 64.75px;
  position: absolute;
  z-index: 1;
`;

export const ProfileImg = styled.img`
  width: 64.287px;
  height: 64.75px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 37px 0 auto;
`;

export const RankIconWrapper = styled.div`
  width: 173px;
  height: 39px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RankIconText = styled.p`
  color: #9f9f9f;
  font-size: 15px;
  font-weight: 700;
  flex-grow: 1;
  text-align: center;
  margin-right: 10px;
`;

export const RankIcon = styled.img`
  width: 30px;
  height: 35px;
  margin-left: 10px;
`;

export const AddFriend = styled.button`
  width: 167px;
  height: 19px;
  margin-top: 6px;
  border-radius: 15px;
  border: 2px solid #c26b3b;
  background: #d37744;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
`;
