import { media } from '@/style/media';
import { css, styled } from 'styled-components';

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
  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  > div:nth-last-of-type(1) {
    display: none;
  }
  ${media.mobile} {
    width: 90%;
    gap: 0px;
    height: 244px;
    > div:nth-last-of-type(2) {
      position: absolute;
      padding-top: 80px;
      left: 30%;
    }
    > div:nth-last-of-type(1) {
      display: block;
      align-self: flex-end;
      margin: 0 16px 10px auto;
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
  ${media.mobile} {
    width: 90%;
  }
`;

export const FilterListContainer = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 23px;
  align-items: center;
  justify-content: flex-end;
  padding: 18px 40px 19px 0;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: #ff4949;
  text-transform: lowercase;
  ${media.mobile} {
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
  ${media.mobile} {
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
