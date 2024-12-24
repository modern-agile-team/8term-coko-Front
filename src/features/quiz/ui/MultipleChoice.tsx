import {
  MultipleChoiceButton,
  MultipleChoiceSection,
  MultipleChoiceButtonDiv,
  Img,
} from './styles';
import { useClientQuizStore } from '@store/useClientQuizStore';
import type { Quiz } from '@features/quiz/types';

const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL;
interface MultipleChoiceProps {
  answerChoice: Quiz['answerChoice'];
}
export default function MultipleChoice({ answerChoice }: MultipleChoiceProps) {
  const { userResponseAnswer, setUserResponseAnswer } = useClientQuizStore();

  return (
    <>
      <MultipleChoiceSection>
        <Img
          src={`${IMG_BASE_URL}객관식-코코.svg`}
          alt="객관식 문제의 코코"
          $width="193px"
          $height="204px"
        />
        <MultipleChoiceButtonDiv>
          {answerChoice.map((value, index) => (
            <MultipleChoiceButton
              key={value}
              onClick={() => setUserResponseAnswer(value)}
              $isClick={userResponseAnswer[0] === value}
            >
              {index + 1} : {value}
            </MultipleChoiceButton>
          ))}
        </MultipleChoiceButtonDiv>
        <Img
          src={`${IMG_BASE_URL}과일바구니.svg`}
          alt="과일 바구니"
          $width="92px"
          $height="89px"
        />
      </MultipleChoiceSection>
    </>
  );
}
