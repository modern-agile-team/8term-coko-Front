import { useClientQuizStore } from '../../../store/useQuizStore';
import { ResponseBoxSection, ShortAnswerInput } from '../styles';
import { CharacterBox } from '../styles';

export default function ShortAnswer() {
  const { setUserResponseAnswer } = useClientQuizStore();
  return (
    <>
      <ResponseBoxSection $justifyContent="flex-end">
        <ShortAnswerInput
          type="text"
          onChange={e => {
            setUserResponseAnswer(e.target.value);
          }}
        ></ShortAnswerInput>
        <CharacterBox $margin="0px 0px 0px 118px" />
      </ResponseBoxSection>
    </>
  );
}
