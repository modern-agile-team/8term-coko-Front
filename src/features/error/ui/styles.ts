import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '@style/media';

export const FallbackWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotFoundWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const MobileVisibleTitle = styled.h1.attrs({
  'aria-label': '404 Not Found',
})`
  position: fixed;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;

  ${media.mobile} {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip-path: none;
    white-space: normal;
    font-size: 88px;
    color: #fb0000;
  }
`;

export const NotFoundHeading = styled.h2`
  margin-bottom: 74px;
  font-size: 24px;

  ${media.mobile} {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

export const NotFoundImage = styled.img`
  width: 1095px;
  height: 367px;

  ${media.mobile} {
    width: 275px;
    height: 227px;
  }
`;

export const NotFoundDescription = styled.h3`
  font-family: Pretendard;
  margin: 45px 0 59px 0;
  padding: 0 30px;
  text-align: center;
  font-size: 20px;

  ${media.mobile} {
    font-size: 14px;
    margin: 30px 0 30px 0;
  }
`;

export const GoToMainLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 213px;
  height: 47px;
  border-radius: 15px;
  background: #0ff;
  color: #fff;
  text-align: center;
  font-size: 23px;
  line-height: 17px;
  letter-spacing: 0.16px;
  box-shadow: 0px 6px #00e4ee;
`;
