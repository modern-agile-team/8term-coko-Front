import styled from 'styled-components';
import { getImageUrl } from '@utils/getImageUrl';

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: fixed;
  background-color: #fff1d9;
  border-right: 7px solid #ffe8c7;
  height: 100%;
`;

export const HeaderBox = styled.header`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  width: 294px;
  height: 42px;
  position: fixed;
  padding-right: 20px;
  z-index: 1;
`;

export const LogoBox = styled.div`
  margin-top: 26px;
  margin-left: 39px;
`;

export const OverRay = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
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
  border-radius: ${({ $isToggled }) => ($isToggled ? '15px 15px 0 0' : '15px')};
  border: 2px solid #c26b3b;
  &:focus {
    outline: none;
  }
`;

export const SortOptionUl = styled.ul`
  position: absolute;
  top: 30px;
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
