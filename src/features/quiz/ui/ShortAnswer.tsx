import usePosition from '@/features/tutorial/service/hooks';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
import { ShortAnswerSection, ShortAnswerInput, Img } from './styles';
const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL;

export default function ShortAnswer() {
  const { setUserResponseAnswer } = useClientQuizStore();
  const { getClientRectRefCallback } = usePosition();

  return (
    <>
      <ShortAnswerSection>
        <Img
          $width="130px"
          $height="94px"
          src={`${IMG_BASE_URL}단답형이미지1.svg`}
          alt="키보드 키캡 1"
        />
        <ShortAnswerInput
          id="short-answer"
          type="text"
          ref={getClientRectRefCallback}
          onChange={e => {
            setUserResponseAnswer(e.target.value);
          }}
          placeholder="답을 적어보세요."
        ></ShortAnswerInput>
        <Img
          $width="252px"
          $height="174px"
          src={`${IMG_BASE_URL}단답형이미지2.svg`}
          alt="코코 상자"
        />
      </ShortAnswerSection>
    </>
  );
}
