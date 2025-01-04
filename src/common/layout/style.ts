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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

export const FallbackWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
