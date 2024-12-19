import { useClientQuizStore } from '@/store/useClientQuizStore';
import * as S from './styles';
import { useDnDStore } from '@/store/useDnDStore';
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
  } = useDnDStore();
  return (
    <>
      {!text ? (
        <S.EmptyDiv
          draggable
          onDragEnter={() => {
            setOutsideDropZone(false);
            setDragOverItem({ value: '', index });
          }}
        />
      ) : (
        <S.TextBlockButton
          draggable
          onDragStart={e => {
            e.currentTarget.classList.add('drag-start');
            setDragStartItem({ value: text, index });
          }}
          onDragEnter={() => setDragOverItem({ value: text, index })}
          onDragEnd={e => {
            e.preventDefault();
            if (isOutsideDropZone) {
              spliceUserResponseAnswer(index);
            } else {
              drop((dragStartItem, dragOverItem) => {
                if (dragOverItem.value === '') {
                  setUserResponseAtIndex(
                    dragStartItem?.value,
                    dragOverItem?.index
                  );
                  spliceUserResponseAnswer(dragStartItem?.index);
                } else {
                  swapUserResponseAnswer(
                    dragStartItem.index,
                    dragOverItem.index
                  );
                  e.currentTarget.classList.remove('drag-start');
                }
              });
            }
          }}
          onClick={() => spliceUserResponseAnswer(index)}
        >
          {text}
        </S.TextBlockButton>
      )}
    </>
  );
}
