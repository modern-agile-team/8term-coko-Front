import { QuestionDiv, QuestionSection } from './../styles';
import { useClientQuizStore } from '../../../store/useQuizStore';

import TextBlock from './TextBlock';
import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';
import '../styles.css';
import emptyChangeToDiv from '../service/emptyChangeToDiv';
import lineChanger from '../service/lineChanger';
import { useRef } from 'react';
interface questiontype {
  title: string;
  question: string;
  category: string;
}
export default function Question({ title, question }: questiontype) {
  const { userResponseAnswer, swapUserResponseAnswer } = useClientQuizStore();
  const lineChangeQuestion = lineChanger(question);
  const dragItem = useRef<null | number>(null); // 드래그할 아이템의 인덱스
  const dragOverItem = useRef<null | number>(null); // 드랍할 위치의 아이템의 인덱스
  const nonEmptyQuestion = emptyChangeToDiv(lineChangeQuestion);
  // 드래그 시작될 때 실행
  const dragStart = (position: number) => {
    dragItem.current = position;
  };

  // 드래그중인 대상이 위로 포개졌을 때
  const dragEnter = (position: number) => {
    dragOverItem.current = position;
  };
  const drop = () => {
    if (dragItem.current !== null && dragOverItem.current != null) {
      swapUserResponseAnswer(dragItem.current, dragOverItem.current);
    }
  };

  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode instanceof Element && domNode.attribs.class === 'empty') {
        const id = Number(domNode.attribs.id);
        return userResponseAnswer[id] ? (
          <TextBlock
            index={id}
            dragStart={dragStart}
            dragEnter={dragEnter}
            drop={drop}
          />
        ) : (
          domNode
        );
      }
    },
  };

  return (
    <QuestionSection>
      <h1> {title} </h1>
      <br></br>
      <QuestionDiv> {parse(nonEmptyQuestion, options)}</QuestionDiv>
    </QuestionSection>
  );
}
