import styled, { css } from 'styled-components';
import type { CosmeticItem } from '@features/store/types';

export const ItemContainer = styled.ul<{ $category: CosmeticItem['category'] }>`
  margin: 18px 0 27px 0;
  display: grid;
  grid-template-columns: repeat(4, 144px);
  grid-template-rows: repeat(2, 125px);
  gap: 21px 19px;
  color: #a5ecf0;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  ${({ $category }) =>
    $category === 'profile' &&
    css`
      grid-template-columns: repeat(3, 180px);
      grid-template-rows: repeat(1, 217px);
    `}
`;

export const StoreItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #a5ecf0;
  background: #f4f4f4;
  padding: 10px 0;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.2px;
  cursor: pointer;
  &:hover {
    border-radius: 8px;
    border: 2px solid #00b6c0;
    background: rgba(0, 217, 233, 0.8);
    > label {
      border-radius: 15px;
      border: 2px solid #00d9e9;
      background: #a5ecf0;
    }
  }
`;

export const ItemLabel = styled.label`
  text-align: center;
  display: block;
  width: 73px;
  height: 17px;
  border-radius: 15px;
  border: 2px solid #a5ecf0;
  background: #00d9e9;
  color: inherit;
  font: inherit;
`;

export const ItemImage = styled.img<{ $category: CosmeticItem['category'] }>`
  width: 125px;
  height: 70px;
  ${({ $category }) =>
    $category === 'profile' &&
    css`
      width: 160px;
      height: 160px;
    `}
`;

export const PaginationDiv = styled.div`
  width: 276px;
  display: flex;
  gap: 57px;
  color: #a5ecf0;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 160% */
`;

export const PaginationButton = styled.button<{ $isSelect: boolean }>`
  border: 0;
  background-color: transparent;
  color: inherit;
  font: inherit;

  ${({ $isSelect }) =>
    $isSelect &&
    css`
      color: #00d9e9;
    `}
`;

export const StoreCartListWrapper = styled.ul`
  display: flex;
  overflow-y: auto;
  margin: 26px 0 0 0;
  flex-direction: column;
  gap: 28px;
  padding-right: 8px;
  color: #a5ecf0;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  &::-webkit-scrollbar {
    padding-left: 5px;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #a5ecf0;
    border-radius: 4px;
  }
`;

export const PlaceLabel = styled.label`
  margin: 28px 0 26px 0;
  text-align: center;
  display: block;
  width: 142.001px;
  height: 28.004px;
  border-radius: 15px;
  border: 2px solid #f09900;
  background: #ffb53d;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
