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
  box-shadow: inset 0 -13px #85705f;
  border-radius: 40px;
  text-align: center;
`;

export const LogoImgWrapper = styled.div`
  margin: 15px auto 10px;
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

export const SocialLoginButton = styled.button<SocialLoginLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px auto;
  width: 200px;
  height: 50px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  font-weight: bold;
  border-radius: 8px;
  border: none;
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
export const LoginPromptSection = styled.section`
  animation: ${fadeInScaleUp} 0.7s ease-out;
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
export const LoginPromptImg = styled.img`
  width: 187.944px;
  height: 219.219px;
  margin-top: 7px;
`;

export const GoToLoginButton = styled.button`
  width: 145.444px;
  height: 38.291px;
  border-radius: 6px;
  background: #000;
  color: #bfd683;
  font-size: 14px;
`;
