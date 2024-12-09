import styled from 'styled-components';

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 179px;
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

export const LogoBoxWrapper = styled.div`
  background-color: #fff1d9;
  height: 179px;
  position: fixed;
  width: 235px;
  border-right: 7px solid #ffe8c7;
`;

export const LogoBox = styled.div`
  margin-top: 26px;
  margin-left: 39px;
`;

export const OverRay = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;
