import { css, styled } from 'styled-components';
import { MEDIA } from './../../style/constants';
import { Fragment } from 'react/jsx-runtime';

export const MyCharacterSection = styled.section`
  display: flex;
  width: 683px;
  height: 199px;
  border-radius: 20px;
  background: #fff;
  margin: 46px 0 0 0;
  gap: 119px;
  box-shadow: 0 3px #e5e5e5;
  padding: 12px 0 0 24px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  text-transform: lowercase;

  > a {
    display: none;
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  > div:nth-last-of-type(1) {
    display: none;
  }
  ${MEDIA.mobile} {
    width: 90%;
    gap: 0px;
    height: 284px;
    > div:nth-last-of-type(2) {
      position: absolute;
      padding-top: 80px;
      left: 30%;
      z-index: 100;
    }
    > div:nth-last-of-type(1) {
      position: relative;
      left: 50px;
      bottom: 10px;
      display: block;
      align-self: flex-end;
      z-index: 100;
    }
  }
`;

export const StoreItemListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 683px;
  height: 428px;
  border-radius: 20px;
  background: #fff;
  margin: 26px 0 0 0;
  box-shadow: 0 3px #e5e5e5;
  ${MEDIA.mobile} {
    width: 90%;
    margin-bottom: 90px;
  }
`;

export const FilterListContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 23px;
  align-items: center;
  justify-content: flex-end;
  padding: 18px 40px 19px 0;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: #ff4949;
  text-transform: lowercase;
  > button:nth-child(1) {
    margin: 0 auto 0 32px;
  }
  ${MEDIA.mobile} {
    gap: 5px;
    padding: 18px 0 19px 0;
    align-self: center;
  }
`;
export const FilterButton = styled.button<{ $isSelect: boolean }>`
  width: 79px;
  height: 23px;
  border-radius: 15px;
  border: 2px solid #ff4949;
  background: #f4f4f4;
  font: inherit;
  color: inherit;
  ${({ $isSelect }) =>
    $isSelect &&
    css`
      color: #fff;
      border-radius: 15px;
      border: 2px solid #e8080c;
      background: #ff4949;
    `};
`;
export const RedLine = styled.hr`
  width: 632px;
  height: 2px;
  border-color: #ff4949;
  ${MEDIA.mobile} {
    width: 90%;
  }
`;
interface StoreButtonProps {
  $backgroundColor: string;
  $borderColor: string;
}
export const StoreButton = styled.button<StoreButtonProps>`
  width: 121px;
  height: 23px;
  border-radius: 15px;
  border: 2px solid ${({ $borderColor }) => $borderColor};
  background: ${({ $backgroundColor }) => $backgroundColor};
  color: inherit;
  font: inherit;
`;

export const SelectWrapper = styled.div<{ $isSelect: boolean }>`
  width: 79px;
  > div {
    width: 100%;
  }
  button {
    height: 23px;
    border-radius: 15px;
    border: 2px solid #ff4949;
    background: ${({ $isSelect }) => ($isSelect ? '#FF4949' : '#f4f4f4')};
    color: ${({ $isSelect }) => ($isSelect ? '#fff' : 'inherit')};
    font: inherit;
  }
  ul {
    width: 79px;
    border-radius: 15px;
    background: #f4f4f4;
  }
  li {
    border: 2px solid #e8080c;
    border-bottom: none;
    &:first-child {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
    &:last-child {
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      border-bottom: 2px solid #e8080c;
    }
    &:hover {
      color: #fff;
      background: #ff4949;
    }
  }
`;
