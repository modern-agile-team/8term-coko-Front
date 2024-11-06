import Quiz from '../../../types/Quiz';
import {
  CharacterImg,
  MultipleChoiceButton,
  MultipleChoiceSection,
  MultipleChoiceButtonDiv,
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
        <CharacterImg src={`${imgUrl}객관식코코.svg`}></CharacterImg>
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
        <CharacterImg src={`${imgUrl}과일바구니.svg`}></CharacterImg>
      </MultipleChoiceSection>
    </>
  );
}
