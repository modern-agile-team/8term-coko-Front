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
  background: linear-gradient(135deg, #bfd683, #9eb663);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  text-align: center;
`;

export const LogoImageSection = styled.section`
  margin: 20px auto 40px;
  width: 200px;
  height: 80px;
  border-radius: 10px;
  background: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #000000;
  text-transform: uppercase;
`;

export const DashLineHr = styled.div`
  width: 90%;
  margin: 20px auto;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    #834b29 0,
    #834b29 10px,
    transparent 10px,
    transparent 20px
  );
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
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
