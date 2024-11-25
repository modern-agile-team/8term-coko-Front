import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface SocialLoginLinkProps {
  $color: string;
  $backgroundColor: string;
}

export const FlexContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

//모달 애니메이션
const fadeInScaleUp = keyframes`
  0% {
    opacity: 0;
    transform:  scale(0.9); 
  }
  100% {
    opacity: 1;
    transform:  scale(1); 
  }
`;

export const LoginForm = styled.section`
  animation: ${fadeInScaleUp} 0.7s ease-out;
  width: 400px;
  padding: 40px 20px;
  background: #bfd683;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  text-align: center;
`;

export const LogoImageSection = styled.section`
  margin: 20px auto 40px;
  width: 205px;
  height: 79px;
  border-radius: 6px;
  background: #d9d9d9;
`;

export const DashLineHr = styled.hr`
  width: 80%;
  border: 2px dashed #834b29;
`;

export const SocialLoginLink = styled(Link)<SocialLoginLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px auto;
  width: 200px;
  height: 50px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  text-decoration: none;
  font-weight: bold;
  border-radius: 6px;

  img {
    width: 20px;
    height: 20px;
  }
`;
export const GoToLoginForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 306px;
  height: 370.47px;
  border-radius: 40px;
  background: #bfd683;
  box-shadow: 0 10.53px #85705f;
  > h2 {
    margin-top: 20px;
    color: #85705f;
  }
`;
export const GoToLoginImg = styled.img`
  width: 187.944px;
  height: 219.219px;
  margin: 7px 0 18px 0;
`;

export const GoToLoginButton = styled.button`
  margin-top: 18px;
  width: 145.444px;
  height: 38.291px;
  border-radius: 6px;
  background: #000;
  color: #bfd683;
  font-size: 14px;
`;
