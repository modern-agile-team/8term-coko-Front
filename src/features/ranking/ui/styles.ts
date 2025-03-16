import styled, { css } from 'styled-components';
import { getImageUrl } from '@utils/getImageUrl';
import { MEDIA } from '@style/constants';

interface MedalContainerProps {
  $rank: number;
  $isMyRank?: boolean;
}

export const UserRankingListContainer = styled.div`
  width: 683px;
  display: flex;
  flex-direction: column;

  ${MEDIA.mobile} {
    width: calc(100vw - 80px);
    max-width: 683px;
    min-width: 340px;
  }
`;

export const MyRankingContainer = styled.div`
  width: 683px;
  margin-top: 62px;

  ${MEDIA.mobile} {
    width: calc(100vw - 80px);
    max-width: 683px;
    min-width: 340px;
  }
`;

export const RankingControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 27px;
`;

export const RankingItem = styled.div<{ $rank: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 115px;
  border-radius: 20px;
  margin-bottom: 27px;
  position: relative;

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

export const MedalContainer = styled.div<MedalContainerProps>`
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

  ${MEDIA.mobile} {
    width: 82px;
    height: 102px;
    margin-left: 15px;
  }
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

  label {
    font-size: 12px;
    font-weight: 700;
    display: block;
    margin-bottom: 5px;
    white-space: nowrap;
  }

  span {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const RankText = styled.p`
  font-size: 40px;
  font-weight: 700;
  margin-left: 15px;
  margin-right: 30px;

  ${MEDIA.mobile} {
    position: absolute;
    font-size: 30px;
    margin-left: 48px;
    margin-top: 5px;
  }
`;

export const UserInfo = styled.div`
  margin-left: 15px;

  p:first-of-type {
    font-size: 15px;
    font-weight: 700;
  }

  p:last-of-type {
    font-size: 20px;
    font-weight: 700;
  }

  ${MEDIA.mobile} {
    position: absolute;
    margin-left: 110px;

    p:first-of-type {
      font-size: 12px;
    }

    p:last-of-type {
      font-size: 16px;
    }
  }
`;

export const ProfileWrapper = styled.div`
  position: relative;

  ${MEDIA.mobile} {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 37px 0 auto;

  ${MEDIA.mobile} {
    margin: 0 25px 0 auto;
  }
`;

export const RankIconWrapper = styled.div`
  width: 173px;
  height: 39px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 48px;
    height: 38px;
    margin-left: 10px;
  }

  p {
    color: #9f9f9f;
    font-size: 15px;
    font-weight: 700;
    flex-grow: 1;
    text-align: center;
    margin-right: 10px;
  }

  ${MEDIA.mobile} {
    max-width: 130px;

    img {
      width: 38px;
      height: 30px;
    }
  }
`;

export const RankingPaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  span {
    color: #d37744;
  }
`;

export const RankingPaginationButton = styled.button<{ $isSelected?: boolean }>`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  font-size: 18px;
  font-weight: 700;
  color: #d37744;
  margin: 0 15px 0 15px;

  ${MEDIA.mobile} {
    margin: 0 8px 0 8px;
  }

  &:hover {
    color: #d80000;
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: #d80000;
      background: #f0d8a7;
      border-radius: 5px;
    `}
`;
