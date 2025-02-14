import { useEffect } from 'react';
import { CombinationSection, TextBlockButton } from './styles';
import { useClientQuizStore } from '@store/useClientQuizStore';
import { useDnDStore } from '@store/useDnDStore';
import type { Quiz } from '@features/quiz/types';
import { useElementRect } from '@/features/tutorial/service/hooks';
import { compact } from '@modern-kit/utils';

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
  const { getClientRectRefCallback } = useElementRect();

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
      <CombinationSection id="combination" ref={getClientRectRefCallback}>
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
