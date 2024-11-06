import { useClientQuizStore } from '../../../store/useClientQuizStore';
import { ShortAnswerSection, ShortAnswerInput } from '../styles';
import { CharacterImg } from '../styles';

export default function ShortAnswer() {
  const { setUserResponseAnswer } = useClientQuizStore();
  const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

  return (
    <>
      <ShortAnswerSection>
        <CharacterImg src={`${imgUrl}단답형이미지1.svg`} />
        <ShortAnswerInput
          type="text"
          onChange={e => {
            setUserResponseAnswer(e.target.value);
          }}
          placeholder="답을 적어보세요."
        ></ShortAnswerInput>
        <CharacterImg src={`${imgUrl}단답형이미지2.svg`} />
      </ShortAnswerSection>
    </>
  );
}
