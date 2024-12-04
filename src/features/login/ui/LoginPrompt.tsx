import {
  DashLineHr,
  FlexContainer,
  GoToLoginButton,
  GoToLoginForm,
  GoToLoginImg,
} from '../styles';
import { getImageUrl } from '@/utils/getImageUrl';
interface GoToLoginProps {
  setStep: (step: string) => void;
}
export default function LoginPrompt({ setStep }: GoToLoginProps) {
  return (
    <>
      <FlexContainer>
        <GoToLoginForm>
          <h2>문제 더 풀려면 로그인해 !</h2>
          <GoToLoginImg src={getImageUrl('로그인키키.svg')}></GoToLoginImg>
          <DashLineHr />
          <GoToLoginButton
            onClick={() => {
              setStep('로그인');
            }}
          >
            로그인 창으로
          </GoToLoginButton>
        </GoToLoginForm>
      </FlexContainer>
    </>
  );
}
