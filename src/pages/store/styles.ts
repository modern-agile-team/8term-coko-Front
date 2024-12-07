import { css, styled } from 'styled-components';

export const CartListWrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 194px;
  height: 596px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 3px #e5e5e5;
  margin: 84px 47px 0 0;
`;
export const Label = styled.label`
  margin: 18px 0 0 0;
  display: block;
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
  line-height: 24px; /* 171.429% */
`;
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

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 9px;
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
`;

export const FilterListContainer = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 23px;
  align-items: center;
  justify-content: flex-end;
  padding: 18px 40px 19px 0;
`;
export const FilterButton = styled.button<{ $isSelect: boolean }>`
  width: 79px;
  height: 23px;
  border-radius: 15px;
  border: 2px solid #ff4949;
  background: #f4f4f4;
  color: #ff4949;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 166.667% */
  text-transform: lowercase;
  ${({ $isSelect }) =>
    $isSelect &&
    css`
      color: #fff;
      border-radius: 15px;
      border: 2px solid #e8080c;
      background: #ff4949;
    `}
`;
export const RedLine = styled.hr`
  width: 632px;
  height: 2px;
  border-color: #ff4949;
`;

export const Button = styled.button`
  width: 121px;
  height: 23px;
  border-radius: 15px;
  border: 2px solid #e8080c;
  background: #ff4949;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 166.667% */
  text-transform: lowercase;
`;
