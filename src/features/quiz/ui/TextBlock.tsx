import {
  useClientQuizStore,
  useDragAndDropStore,
} from '@/features/quiz/stores';
import * as S from './styles';

interface TextBlockProps {
  text: string;
  index: number;
}
export default function TextBlock({ text, index }: TextBlockProps) {
  const {
    spliceUserResponseAnswer,
    swapUserResponseAnswer,
    setUserResponseAtIndex,
  } = useClientQuizStore();
  const {
    setDragStartItem,
    setDragOverItem,
    drop,
    isOutsideDropZone,
    setOutsideDropZone,
  } = useDragAndDropStore();

  const handleEmptyDivDragEnter = () => {
    setOutsideDropZone(false);
    setDragOverItem({ value: '', index });
  };

  const handleDragStart = (e: React.DragEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.add('drag-start');
    setDragStartItem({ value: text, index });
  };

  const handleDragEnter = () => {
    setDragOverItem({ value: text, index });
  };

  const handleDragEnd = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isOutsideDropZone) {
      spliceUserResponseAnswer(index);
    } else {
      drop((dragStartItem, dragOverItem) => {
        if (dragOverItem.value === '') {
          setUserResponseAtIndex(dragStartItem?.value, dragOverItem?.index);
          spliceUserResponseAnswer(dragStartItem?.index);
        } else {
          swapUserResponseAnswer(dragStartItem.index, dragOverItem.index);
          e.currentTarget.classList.remove('drag-start');
        }
      });
    }
  };
  const handleOnClick = () => {
    spliceUserResponseAnswer(index);
  };

  return (
    <>
      {!text ? (
        <S.EmptyDiv draggable onDragEnter={handleEmptyDivDragEnter} />
      ) : (
        <S.TextBlockButton
          draggable
          onDragStart={handleDragStart}
          onDragEnter={handleDragEnter}
          onDragEnd={handleDragEnd}
          onClick={handleOnClick}
        >
          {text}
        </S.TextBlockButton>
      )}
    </>
  );
}
