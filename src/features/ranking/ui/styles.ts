import styled, { css } from 'styled-components';

export const RankingContainer = styled.div`
  width: 683px;
  margin-top: 62px;
`;

export const RankingItem = styled.div<{ $rank: number }>`
  width: 100%;
  height: 115px;
  margin-bottom: 27px;
  border-radius: 20px;
  ${({ $rank }) =>
    $rank === 1 &&
    css`
      background-color: #ffc000;
      box-shadow: 0 7px #f3ab37;
    `}
  ${({ $rank }) =>
    $rank === 2 &&
    css`
      background-color: #e2e2e2;
      box-shadow: 0 7px #d6d6d6;
    `}
  ${({ $rank }) =>
    $rank === 3 &&
    css`
      background-color: #e9894d;
      box-shadow: 0 7px #d7783d;
    `}
  ${({ $rank }) =>
    $rank > 3 &&
    css`
      background-color: #ffe6b3;
      box-shadow: 0 7px #f5d79b;
    `}
`;
