import styled, { css } from 'styled-components';
import { getImageUrl } from '@/utils/getImageUrl';

export const BarrelTopCokoImg = styled.img`
  width: 171px;
  height: 150px;
  margin: 99px 87px;
  position: fixed;
`;

export const BarrelContainer = styled.div<{ $rank: number | null }>`
  width: 170px;
  height: 155px;
  margin: 237px 87px;
  position: fixed;
  z-index: -1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${({ $rank }) =>
    $rank === 1 &&
    css`
      background-image: url(${getImageUrl('금통.svg')});
    `}
  ${({ $rank }) =>
    $rank === 2 &&
    css`
      background-image: url(${getImageUrl('은통.svg')});
    `}
  ${({ $rank }) =>
    ($rank === null || $rank >= 3) &&
    css`
      background-image: url(${getImageUrl('동통.svg')});
    `}
`;

export const BoatSayImg = styled.img`
  width: 225px;
  height: 65px;
  bottom: 0;
  margin: 0 65px 240px;
  position: fixed;
`;

export const BoatImg = styled.img`
  width: 179.2px;
  height: 215.6px;
  margin: 0 70px 28px;
  position: fixed;
  bottom: 0;
`;
