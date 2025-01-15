import styled, { css } from 'styled-components';
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

const getSortSelectButtonIcon = (isToggled: boolean) => {
  return isToggled ? '정렬-아래-화살표.svg' : '정렬-위-화살표.svg';
};

export const SortSelectButton = styled.button<{
  $isToggled: boolean;
  $width?: string;
  $height?: string;
  $color?: string;
  $fontSize?: string;
  $backgroundColor?: string;
  $borderColor?: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 700;
  text-align: center;
  border: 2px solid ${({ $borderColor }) => $borderColor};

  background: ${({ $isToggled, $backgroundColor }) =>
    `${$backgroundColor} url(${getImageUrl(
      getSortSelectButtonIcon($isToggled)
    )}) no-repeat right 10px center`};
  border-radius: ${({ $isToggled }) => ($isToggled ? '15px 15px 0 0' : '15px')};

  &:focus {
    outline: none;
  }
`;

export const SortOptionUl = styled.ul<{
  $width?: string;
  $height?: string;
  $backgroundColor?: string;
  $fontColor?: string;
  $borderColor?: string;
}>`
  position: absolute;
  top: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  border-radius: 0 0 15px 15px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $fontColor }) => $fontColor};
  list-style: none;
  z-index: 10;
  border: 2px solid ${({ $borderColor }) => $borderColor};
  border-top: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

export const SortOptionLi = styled.li<{
  $height?: string;
  $color?: string;
  $backgroundColor?: string;
  $borderColor?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ $height }) => $height};
  font-size: 12px;
  font-weight: 700;
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-bottom: 2px solid ${({ $borderColor }) => $borderColor};
  cursor: pointer;

  &:hover {
    background-color: ${({ $color }) => $color};
    color: ${({ $backgroundColor }) => $backgroundColor};
    border-bottom: 2px solid ${({ $borderColor }) => $borderColor};
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
