import { useClientQuizStore } from '../../../store/useClientQuizStore';
import { ShortAnswerSection, ShortAnswerInput } from '../styles';

export default function ShortAnswer() {
  const { setUserResponseAnswer } = useClientQuizStore();
  const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

  return (
    <>
      <ShortAnswerSection>
        <img src={`${imgUrl}단답형이미지1.svg`} alt="키보드 키캡 1" />
        <ShortAnswerInput
          type="text"
          onChange={e => {
            setUserResponseAnswer(e.target.value);
          }}
          placeholder="답을 적어보세요."
        ></ShortAnswerInput>
        <img src={`${imgUrl}단답형이미지2.svg`} alt="코코 상자" />
      </ShortAnswerSection>
    </>
  );
}
