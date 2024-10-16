import { useClientQuizStore } from '../../../store/useQuizStore';
import { SubmitSection, ResponseButton } from '../styles';
//답을 전역상태로 보냄 => 체점으로 이어짐
interface submitProps {
  userSubmitAnswer: string[] | null;
}
export default function Submit({ userSubmitAnswer }: submitProps) {
  const { handleNextPage, setUserResponseAnswer } = useClientQuizStore();
  return (
    <SubmitSection>
      <ResponseButton onClick={handleNextPage}>스킵</ResponseButton>
      <ResponseButton
        disabled={!userSubmitAnswer}
        onClick={() => setUserResponseAnswer(userSubmitAnswer)}
      >
        답제출
      </ResponseButton>
    </SubmitSection>
  );
}
