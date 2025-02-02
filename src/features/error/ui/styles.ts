import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

export const NotFoundImage = styled.img`
  width: 60%;
  height: 40%;
`;
export const NotFoundText = styled.p<{ $margin: string }>`
  margin: ${({ $margin }) => $margin};
  text-align: center;
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
