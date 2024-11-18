import styled from 'styled-components';

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 108px;
  position: fixed;
  background-color: #fff1d9;
  border-right: 7px solid #ffe8c7;
  height: 100%;
`;

export const HeaderBox = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 294px;
  height: 42px;
  position: fixed;
`;

export const LogoBoxWrapper = styled.div`
  background-color: #fff1d9;
  height: 108px;
  position: fixed;
  width: 235px;
  border-right: 7px solid #ffe8c7;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 193px;
  height: 42px;
  margin-top: 26px;
  margin-left: 16px;
  border: 2px dashed #f00;
  background: #efeff0;
  position: fixed;
`;

export const OverRay = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;
