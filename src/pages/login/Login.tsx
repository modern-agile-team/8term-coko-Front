import { AlignCenter } from '../../style/LayOut';
import { FlexContainer, LogoImageSection, SocialLoginLink } from './styles';

export default function Login() {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}&response_type=code`;
  return (
    <>
      <AlignCenter>
        <FlexContainer>
          <LogoImageSection />
          <SocialLoginLink to={kakaoURL}>카카오</SocialLoginLink>
          <SocialLoginLink to="">구글</SocialLoginLink>
          <SocialLoginLink to="">깃허브</SocialLoginLink>
        </FlexContainer>
      </AlignCenter>
    </>
  );
}
