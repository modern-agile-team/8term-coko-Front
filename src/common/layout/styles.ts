import styled, { css } from 'styled-components';
import { animations } from '@/style/animations';
import { OverRayDivProps } from '@/common/types';
import { media } from '@/style/media';

interface BaseStyleProps {
  $width?: string;
  $height?: string;
  $color?: string;
  $backgroundColor?: string;
  $borderColor?: string;
}

interface SortSelectButtonProps extends BaseStyleProps {
  $isToggled: boolean;
  $fontSize?: string;
  $iconSize?: string;
  $iconRight?: string;
}

interface SortOptionUlProps extends BaseStyleProps {
  $fontColor?: string;
}

interface SortOptionLiProps extends BaseStyleProps {
  $height?: string;
}

export const MenuBox = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: fixed;
  z-index: 100;
  background-color: #fff1d9;
  border-right: 7px solid #ffe8c7;
  height: 100%;

  ${media.mobile} {
    flex-direction: row;
    gap: 12px;
    bottom: 0;
    left: 0;
    right: 0;
    border-right: none;
    border-top: 5px solid #ffe8c7;
    height: 82px;
    width: 100%;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeaderBox = styled.header`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 1;
  gap: 20px;
  align-items: center;
  width: 294px;
  height: 42px;
  padding-top: 5px;
  padding-right: 20px;
`;

export const LogoBox = styled.div`
  margin-top: 26px;
  align-self: center;

  ${media.mobile} {
    display: none;
  }
`;

export const OverRayDiv = styled.div<OverRayDivProps>`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  mix-blend-mode: ${({ $mixBlendMode }) => $mixBlendMode};
  z-index: 10000;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SortSelectButton = styled.button<SortSelectButtonProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 700;
  text-align: center;
  background: ${({ $backgroundColor }) => $backgroundColor};
  border: 2px solid ${({ $borderColor }) => $borderColor};
  border-radius: ${({ $isToggled }) => ($isToggled ? '15px 15px 0 0' : '15px')};

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:focus {
    outline: none;
  }

  span {
    position: absolute;
    right: ${({ $iconRight }) => $iconRight};
    font-size: ${({ $iconSize }) => $iconSize};
    transform: ${({ $isToggled }) =>
      $isToggled ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.1s ease;
  }
`;

export const SortOptionUl = styled.ul<SortOptionUlProps>`
  position: absolute;
  list-style: none;
  z-index: 10;
  overflow: hidden;
  top: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $fontColor }) => $fontColor};
  border: 2px solid ${({ $borderColor }) => $borderColor};
  border-radius: 0 0 15px 15px;
  border-top: none;
`;

export const SortOptionLi = styled.li<SortOptionLiProps>`
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

export const FlexContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const PromptContainer = styled.section`
  animation: ${animations.fadeInScaleUp} 0.7s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 324px;
  height: 387px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0 10px #e5e5e5;
  text-align: center;
`;

export const PromptMessage = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 20px;
    color: #000000;
  }

  p {
    margin: 10px 0 0;
    font-size: 16px;
    color: #ff4949;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const GoBackPromptImg = styled.img`
  width: 261px;
  height: 159px;
  margin-bottom: 20px;
`;

export const CancelButton = styled.button`
  width: 200px;
  padding: 10px 20px;
  background-color: #49c0f8;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 4px #38a6dc;

  &:hover {
    background-color: #7fd6fa;
  }

  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
`;

export const ConfirmButton = styled.button`
  width: 200px;
  padding: 10px 20px;
  color: #ee5555;
  font-weight: bold;
  font-size: 15px;
  border-radius: 6px;
  border: none;
  background: none;

  &:hover {
    color: #ff6666;
  }
`;

export const SkeletonBase = styled.div<{
  width?: string;
  height?: string;
}>`
  background: linear-gradient(90deg, #d6d6d6 25%, #f0f0f0 50%, #d6d6d6 75%);
  background-size: 200% 100%;
  animation: ${animations.shimmerLoading} 2s infinite linear;

  ${({ width, height }) => css`
    width: ${width || '100%'};
    height: ${height || '16px'};
    border-radius: 4px;
  `}
`;
