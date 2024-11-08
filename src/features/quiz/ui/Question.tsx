import { QuestionSection, TextBlockButton, Titlediv } from './../styles';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';
import '../styles.css';
import emptyChangeToDiv from '../service/emptyChangeToDiv';
import lineChanger from '../service/lineChanger';
import { useRef } from 'react';
import Dompurify from 'dompurify';
import Quiz from '../../../types/Quiz';
interface questionProps {
  title: Quiz['title'];
  question: Quiz['question'];
  category: Quiz['category'];
}
export default function Question({ title, question, category }: questionProps) {
  const {
    currentPage,
    userResponseAnswer,
    swapUserResponseAnswer,
    spliceUserResponseAnswer,
  } = useClientQuizStore();

  //\n을 줄바꿈 요소로 변경
  const lineChangeQuestion = lineChanger(question);
  //#empty#을 html Element로 변경
  const nonEmptyQuestion = emptyChangeToDiv(lineChangeQuestion);
  const dragItem = useRef<null | number>(null); // 드래그할 아이템의 인덱스
  const dragOverItem = useRef<null | number>(null); // 드랍할 위치의 아이템의 인덱스
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      //class명이 empty인(빈칸) html Element를 찾음
      if (domNode instanceof Element && domNode.attribs.class === 'empty') {
        //그 노드의 id를 가져옴
        const id = Number(domNode.attribs.id.match(/\d+$/));
        //전역상태(유저의 응답) 배열에서 해당 id의 값 가져와서 빈칸을 TextBlock 컴포넌트로 변경 해당 인덱스가 빈칸이면 그대로 domNod
        return userResponseAnswer[id] ? (
          <TextBlockButton
            onClick={() => spliceUserResponseAnswer(id)}
            draggable
            onDragStart={() => {
              dragOverItem.current = id;
            }}
            onDragEnter={() => {
              dragOverItem.current = id;
            }}
            onDragEnd={() => {
              if (dragItem.current !== null && dragOverItem.current != null) {
                swapUserResponseAnswer(dragItem.current, dragOverItem.current);
              }
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
    <QuestionSection $category={category}>
      <Titlediv $category={category}>
        <p>문제{currentPage + 1}.</p>
        <p>{title}</p>
      </Titlediv>
      <p>
        {/* Dompurify를 이용한 xss공격 방어  문자열 랜더링*/}
        {/* <div>{parse(Dompurify.sanitize(nonEmptyQuestion), options)}</div> */}
        {parse(Dompurify.sanitize(nonEmptyQuestion), options)}
      </p>
    </QuestionSection>
  );
}
