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
  const { setdragStartItem, setdragOverItem, drop } = useDnDStore();
  return (
    <>
      {!text ? (
        <S.EmptyDiv
          draggable
          onDragEnter={() => setdragOverItem({ value: '', index })}
        />
      ) : (
        <S.TextBlockButton
          draggable
          onDragStart={() => setdragStartItem({ value: text, index })}
          onDragEnter={() => setdragOverItem({ value: text, index })}
          onDragLeave={() => {
            console.log('벗어남');
          }}
          onDragEnd={() =>
            drop((dragStartItem, dragOverItem) => {
              if (dragStartItem && dragOverItem) {
                //빈칸에 드레그했을 때
                if (dragOverItem.value === '') {
                  setUserResponseAtIndex(
                    dragStartItem?.value,
                    dragOverItem?.index
                  );
                  spliceUserResponseAnswer(dragStartItem?.index);
                  //텍스트가 있는 칸에 드레그했을 때때
                } else {
                  swapUserResponseAnswer(
                    dragStartItem.index,
                    dragOverItem.index
                  );
                }
              }
            })
          }
          onClick={() => spliceUserResponseAnswer(index)}
        >
          {text}
        </S.TextBlockButton>
      )}
    </>
  );
}
