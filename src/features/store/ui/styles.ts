import styled, { css } from 'styled-components';
import { media } from '@/style/media';

export const ItemContainer = styled.ul`
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

  ${media.mobile} {
    grid-template-columns: repeat(2, 144px);
  }
`;

export const CosmeticItemLi = styled.li`
  position: relative;
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

  &:hover {
    border-radius: 8px;
    border: 2px solid #00b6c0;
    background: rgba(0, 217, 233, 0.8);

    label {
      border-radius: 15px;
      border: 2px solid #00d9e9;
      background: #a5ecf0;
    }
  }
`;

export const ItemImage = styled.img`
  width: 125px;
  height: 70px;
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

export const CartListItemWrapper = styled.ul`
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

export const CartListWrapper = styled.section<{ $isMobileHidden: boolean }>`
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  width: 194px;
  height: 596px;
  background: #fff;
  box-shadow: 0 3px #e5e5e5;
  margin: 84px 47px 0 0;
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.2px;
  > label {
    width: 147.003px;
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
  }

  ${media.mobile} {
    left: 50%;
    transform: translateX(-50%);
    top: -50px;
    right: 0px;
    display: ${({ $isMobileHidden }) => ($isMobileHidden ? 'none' : 'flex')};
  }
`;

export const StoreSortDropDown = styled.ul<{ $isSelect: boolean }>`
  border-radius: 15px 15px 0px 0px;
  width: 79px;
  height: 23px;
  background: #ff4949;
  position: relative;
  list-style: none;
  text-align: center;
  cursor: pointer;
  z-index: 100;

  > li {
    margin: 0;
    width: 100%;
    border: 2px solid #ff4949;
    border-width: 0 2px 2px 2px;
    &:hover {
      background: #ff4949;
      color: #fff;
    }
  }
  > :first-child {
    border-radius: 15px 15px 0px 0px;
    border: none;
    color: #fff;
  }
  > :last-child {
    border-top: none;
    border-radius: 0px 0px 15px 15px;
  }
`;

export const CosmeticItemHeader = styled.div`
  label {
    width: 73px;
    height: 20px;
    padding: 2px 25px;
    border-radius: 15px;
    border: 2px solid #a5ecf0;
    background: #00d9e9;
  }
  span {
    position: absolute;
    right: 6px;
  }
`;

export const CosmeticItemFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  > label {
    width: 73px;
    height: 20px;
    padding: 2px 25px;
    border-radius: 15px;
    border: 2px solid #a5ecf0;
    background: #00d9e9;
  }

  > img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

export const CosmeticItemCheckOutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  position: relative;
  width: 198px;
  height: 260px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  > div {
    width: 165px;
    height: 184px;
    border-radius: 10px;
    background: #bbf0f3;
    display: flex;
    flex-direction: column;
  }
`;
