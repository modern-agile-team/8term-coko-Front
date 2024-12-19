import styled, { css } from 'styled-components';
import { getImageUrl } from '@utils/getImageUrl';

export const RankingContainer = styled.div`
  width: 683px;
  margin-top: 62px;
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

export const MedalImg = styled.div<{ $rank: number }>`
  width: 68px;
  height: 85px;
  margin-left: 23px;
  align-self: flex-start;
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
  ${({ $rank }) =>
    $rank > 3 &&
    css`
      background-image: url(${getImageUrl('기본메달.svg')});
    `}
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
