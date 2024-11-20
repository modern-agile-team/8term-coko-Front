import useOutsideClick from '@hooks/useOutsideClick';
import { getImageUrl } from '@utils/getImageUrl';
import {
  FlexContainer,
  LoginForm,
  LogoImageSection,
  SocialLoginLink,
  DashLineHr,
} from '../styles';

interface LoginProps {
  closeModal: () => void;
  openModal: () => void;
}

export default function Login({ closeModal }: LoginProps) {
  const modalRef = useOutsideClick(closeModal);

  return (
    <FlexContainer>
      <LoginForm ref={modalRef}>
        <LogoImageSection />
        <DashLineHr />
        <SocialLoginLink $color="#000000" $backgroundColor="#ffffff" to="">
          <img src={getImageUrl('구글.svg')} alt="구글 로그인" />
          Google로 로그인
        </SocialLoginLink>
        <SocialLoginLink $color="#000000" $backgroundColor="#FEE500" to="">
          <img src={getImageUrl('카카오.svg')} alt="카카오 로그인" />
          Kakao로 로그인
        </SocialLoginLink>
        <SocialLoginLink $color="#ffffff" $backgroundColor="#000000" to="">
          <img src={getImageUrl('깃허브.svg')} alt="깃허브 로그인" />
          GitHub로 로그인
        </SocialLoginLink>
      </LoginForm>
    </FlexContainer>
  );
}
