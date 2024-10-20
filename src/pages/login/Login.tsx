import { AlignCenter } from '../../style/LayOut';
import { FlexContainer, LogoImageSection, SocialLoginLink } from './styles';

export default function Login() {
  return (
    <>
      <AlignCenter>
        <FlexContainer>
          <LogoImageSection />
          <SocialLoginLink to="">카카오</SocialLoginLink>
          <SocialLoginLink to="">구글</SocialLoginLink>
          <SocialLoginLink to="">깃허브</SocialLoginLink>
        </FlexContainer>
      </AlignCenter>
    </>
  );
}
