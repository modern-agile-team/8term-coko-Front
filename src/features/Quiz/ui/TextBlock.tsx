import { useClientQuizStore } from '../../../store/useQuizStore';
import { TextBlockButton } from '../styles';
interface TextBlockProps {
  index: number;
  dragStart: (position: number) => void;
  dragEnter: (position: number) => void;
  drop: () => void;
}
export default function TextBlock({
  index,
  dragStart,
  dragEnter,
  drop,
}: TextBlockProps) {
  const { userResponseAnswer, spliceUserResponseAnswer } = useClientQuizStore();
  return (
    <TextBlockButton
      onClick={() => spliceUserResponseAnswer(index)}
      draggable
      onDragStart={() => dragStart(index)}
      onDragEnter={() => dragEnter(index)}
      onDragEnd={() => {
        drop();
      }}
      onDragOver={e => e.preventDefault()}
    >
      {userResponseAnswer[index]}
    </TextBlockButton>
  );
}
