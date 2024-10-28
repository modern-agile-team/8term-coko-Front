import { QuestionDiv, QuestionSection, TextBlockButton } from './../styles';
import { useClientQuizStore } from '../../../store/useQuizStore';
import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';
import '../styles.css';
import emptyChangeToDiv from '../service/emptyChangeToDiv';
import lineChanger from '../service/lineChanger';
import { useRef } from 'react';
import Dompurify from 'dompurify';
interface questiontype {
  title: string;
  question: string;
  category: string;
}
export default function Question({ title, question }: questiontype) {
  const {
    userResponseAnswer,
    swapUserResponseAnswer,
    spliceUserResponseAnswer,
  } = useClientQuizStore();
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
      //class명이 empty인(빈칸) 을 찾음
      if (domNode instanceof Element && domNode.attribs.class === 'empty') {
        //그 노드의 id 저장
        const id = Number(domNode.attribs.id);
        //응답 배열에서 해당 id의 값 가져와서 빈칸을 TextBlock 컴포넌트로 변경 해당 인덱스가 빈칸이면 그대로 domNod
        return userResponseAnswer[id] ? (
          <TextBlockButton
            onClick={() => spliceUserResponseAnswer(id)}
            draggable
            onDragStart={() => dragStart(id)}
            onDragEnter={() => dragEnter(id)}
            onDragEnd={() => {
              drop();
            }}
            onDragOver={e => e.preventDefault()}
          >
            {userResponseAnswer[id]}
          </TextBlockButton>
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
      <QuestionDiv>
        {/* Dompurify를 이용한 xss공격 방어 */}
        {parse(Dompurify.sanitize(nonEmptyQuestion), options)}
      </QuestionDiv>
    </QuestionSection>
  );
}
