import useOutsideClick from '@hooks/useOutsideClick';
import { getImageUrl } from '@utils/getImageUrl';
import {
  FlexContainer,
  LoginForm,
  LogoImgWrapper,
  SocialLoginButton,
  DashLineHr,
} from './styles';
import { LogoImg } from '@common/ui/styles';
import handleLogin from '../service/handleLogin';

interface LoginProps {
  openModal: () => void;
  closeModal: () => void;
}

export default function Login({ closeModal }: LoginProps) {
  const modalRef = useOutsideClick(closeModal);

  return (
    <FlexContainer>
      <LoginForm ref={modalRef}>
        <LogoImgWrapper>
          <LogoImg src={getImageUrl('로고.svg')} />
        </LogoImgWrapper>
        <DashLineHr />
        <SocialLoginButton
          $color="#000000"
          $backgroundColor="#ffffff"
          onClick={() => handleLogin('google')}
        >
          <img src={getImageUrl('구글.svg')} alt="구글 로그인" />
          Google 로그인
        </SocialLoginButton>
        <SocialLoginButton
          $color="#000000"
          $backgroundColor="#FEE500"
          onClick={() => handleLogin('kakao')}
        >
          <img src={getImageUrl('카카오.svg')} alt="카카오 로그인" />
          Kakao 로그인
        </SocialLoginButton>
        <SocialLoginButton
          $color="#ffffff"
          $backgroundColor="#000000"
          onClick={() => handleLogin('github')}
        >
          <img src={getImageUrl('깃허브.svg')} alt="깃허브 로그인" />
          GitHub 로그인
        </SocialLoginButton>
      </LoginForm>
    </FlexContainer>
  );
}
