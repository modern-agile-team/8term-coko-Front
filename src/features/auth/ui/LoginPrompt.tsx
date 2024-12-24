import {
  DashLineHr,
  FlexContainer,
  GoToLoginButton,
  LoginPromptSection,
  LoginPromptImg,
} from './styles';
import { getImageUrl } from '@/utils/getImageUrl';
interface GoToLoginProps {
  onNext: () => void;
}
export default function LoginPrompt({ onNext }: GoToLoginProps) {
  return (
    <>
      <FlexContainer>
        <LoginPromptSection>
          <h2>문제 더 풀려면 로그인해 !</h2>
          <LoginPromptImg src={getImageUrl('로그인키키.svg')} />
          <DashLineHr />
          <GoToLoginButton onClick={onNext}>로그인 창으로</GoToLoginButton>
        </LoginPromptSection>
      </FlexContainer>
    </>
  );
}
