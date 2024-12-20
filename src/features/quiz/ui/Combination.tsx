import type Quiz from '@type/Quiz';
import { CombinationSection, TextBlockButton } from './styles';
import { useClientQuizStore } from '@store/useClientQuizStore';
import compact from '@utils/compact';
import { useDnDStore } from '@store/useDnDStore';
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
  const { setDragStartItem, drop } = useDnDStore();

  useEffect(() => {
    for (let i = 0; i < answer.length; i++) {
      setUserResponseAtIndex('', i);
    }
  }, []);

  const handleOnClick = (value: string) => {
    answer.length > compact(userResponseAnswer).length &&
      pushUserResponseAnswer(value);
  };
  const handleDragStart = (
    e: React.DragEvent<HTMLButtonElement>,
    value: string,
    index: number
  ) => {
    e.currentTarget.classList.add('drag-start');
    setDragStartItem({ value, index });
  };
  const handleDragEnd = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    drop((dragStartItem, dragOverItem) => {
      setUserResponseAtIndex(dragStartItem.value, dragOverItem.index);
    });
    e.currentTarget.classList.remove('drag-start');
  };
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
              onClick={() => handleOnClick(value)}
              draggable
              onDragStart={e => handleDragStart(e, value, index)}
              onDragEnd={handleDragEnd}
            >
              {value}
            </TextBlockButton>
          );
        })}
      </CombinationSection>
    </>
  );
}
