import Quiz from '@type/Quiz';
import { CombinationSection, TextBlockButton } from './styles';
import { useClientQuizStore } from '@/store/useClientQuizStore';
import compact from '../../../utils/compact';
import { useDnDStore } from '@/store/useDnDStore';
import { useEffect } from 'react';

interface CombinationProps {
  answerChoice: Quiz['answerChoice'];
  answer: Quiz['answer'];
}

export default function Combination({
  answerChoice,
  answer,
}: CombinationProps) {
  const { userResponseAnswer, pushUserResponseAnswer, setUserResponseAtIndex } =
    useClientQuizStore();
  const { setdragStartItem, dragOverItem, dragStartItem } = useDnDStore();
  useEffect(() => {
    for (let i = 0; i < answer.length; i++) {
      setUserResponseAtIndex('', i);
    }
  }, []);
  return (
    <>
      <CombinationSection>
        {answerChoice.map((value, index) => {
          const isSelect = userResponseAnswer.includes(value);
          return isSelect ? (
            <TextBlockButton
              key={value}
              $selected={isSelect}
              disabled={isSelect}
            >
              {value}
            </TextBlockButton>
          ) : (
            <TextBlockButton
              key={value}
              onClick={() => {
                //답 수랑 내가 선택한 답 (공백빼고) 갯수 비교 정답보다 선택한게 많으면 안되니
                answer.length > compact(userResponseAnswer).length &&
                  pushUserResponseAnswer(value);
              }}
              draggable
              onDragStart={() => setdragStartItem({ value, index })}
              onDragEnd={() => {
                if (dragOverItem && dragStartItem) {
                  setUserResponseAtIndex(
                    dragStartItem?.value,
                    dragOverItem?.index
                  );
                }
              }}
            >
              {value}
            </TextBlockButton>
          );
        })}
      </CombinationSection>
    </>
  );
}
