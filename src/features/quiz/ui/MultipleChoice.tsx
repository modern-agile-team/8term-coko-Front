import Quiz from '../../../types/Quiz';
import {
  MultipleChoiceButton,
  MultipleChoiceSection,
  MultipleChoiceButtonDiv,
  Img,
} from '../styles';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
interface MultipleChoiceProps {
  answerChoice: Quiz['answerChoice'];
}
export default function MultipleChoice({ answerChoice }: MultipleChoiceProps) {
  const { userResponseAnswer, setUserResponseAnswer } = useClientQuizStore();
  const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

  return (
    <>
      <MultipleChoiceSection>
        <Img
          src={`${imgUrl}객관식-코코.svg`}
          alt="객관식 문제의 코코"
          $width="193px"
          $height="204px"
        ></Img>
        <MultipleChoiceButtonDiv>
          {answerChoice.map((value, index) => (
            <MultipleChoiceButton
              key={index}
              onClick={() => setUserResponseAnswer(value)}
              $isClick={userResponseAnswer[0] === value}
            >
              {index + 1} : {value}
            </MultipleChoiceButton>
          ))}
        </MultipleChoiceButtonDiv>
        <Img
          src={`${imgUrl}과일바구니.svg`}
          alt="과일 바구니"
          $width="92px"
          $height="89px"
        ></Img>
      </MultipleChoiceSection>
    </>
  );
}
