import {
  EmptyDiv,
  LineChangeDiv,
  QuestionDiv,
  QuestionSection,
  TextBlockButton,
} from './../styles';
import { useClientQuizStore } from '../../../store/useQuizStore';
import questionChangeToArray from '../service/questionChangeToArray';
import { useRef } from 'react';
interface questiontype {
  title: string;
  question: string;
  category: string;
}
export default function Question({ title, question, category }: questiontype) {
  const {
    userResponseAnswer,
    spliceUserResponseAnswer,
    swapUserResponseAnswer,
  } = useClientQuizStore();
  const questionArray = questionChangeToArray(question);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  //드레그 시작할 때
  const dragStart = (position: number) => {
    dragItem.current = position;
  };
  //드레그 포개졌을 때
  const dragEnter = (position: number) => {
    dragOverItem.current = position;
  };
  const drop = () => {
    if (dragItem.current !== null && dragOverItem.current !== null) {
      swapUserResponseAnswer(dragItem.current, dragOverItem.current);
    }
  };

  return category === 'COMBINATION' ? (
    <>
      <QuestionSection>
        <h1> {title} </h1>
        <br></br>
        <QuestionDiv>
          {questionArray.map((item, index) => {
            if (item === '#empty#') {
              return <EmptyDiv key={index} />;
            } else if (item === 'br') {
              return <LineChangeDiv key={index} />;
            }
            return <div key={index}>{item}</div>;
          })}
          <LineChangeDiv />
          선택 리스트:
          {userResponseAnswer.map((item, index) => (
            <TextBlockButton
              key={index}
              onClick={() => {
                spliceUserResponseAnswer(index);
              }}
              draggable
              onDragStart={() => dragStart(index)}
              onDragEnter={() => dragEnter(index)}
              onDragEnd={drop}
              onDragOver={e => e.preventDefault()}
            >
              {item}
            </TextBlockButton>
          ))}
        </QuestionDiv>
      </QuestionSection>
    </>
  ) : (
    <>
      <QuestionSection>
        <h1>{title} </h1>
        <br />
        <pre>{question}</pre>
      </QuestionSection>
    </>
  );
}
