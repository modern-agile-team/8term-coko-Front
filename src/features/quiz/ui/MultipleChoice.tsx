import {
  MultipleChoiceButton,
  MultipleChoiceSection,
  MultipleChoiceButtonDiv,
  Img,
} from './styles';
import { useClientQuizStore } from '@store/useClientQuizStore';
import type { Quiz } from '@features/quiz/types';
import { useElementRect } from '@/features/tutorial/service/hooks';
import { getImageUrl } from '@/utils/getImageUrl';

interface MultipleChoiceProps {
  answerChoice: Quiz['answerChoice'];
}
export default function MultipleChoice({ answerChoice }: MultipleChoiceProps) {
  const { userResponseAnswer, setUserResponseAnswer } = useClientQuizStore();
  const { getClientRectRefCallback } = useElementRect();

  return (
    <>
      <MultipleChoiceSection>
        <Img
          src={getImageUrl('객관식-코코.svg')}
          alt="객관식 문제의 코코"
          $width="193px"
          $height="204px"
        />
        <MultipleChoiceButtonDiv
          id="multiple-choice"
          ref={getClientRectRefCallback}
        >
          {answerChoice.map((value, index) => (
            <MultipleChoiceButton
              key={value}
              onClick={() => setUserResponseAnswer(value)}
              $isClick={userResponseAnswer[0] === value}
            >
              {value}
            </MultipleChoiceButton>
          ))}
        </MultipleChoiceButtonDiv>
        <Img
          src={getImageUrl('과일바구니.svg')}
          alt="과일 바구니"
          $width="92px"
          $height="89px"
        />
      </MultipleChoiceSection>
    </>
  );
}
