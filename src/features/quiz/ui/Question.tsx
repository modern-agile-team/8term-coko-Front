import * as S from './styles';
import { useClientQuizStore } from '@store/useClientQuizStore';
import './styles.css';
import type Quiz from '@type/Quiz';
import 'highlight.js/styles/base16/atelier-cave-light.css';
import useCodeHighlight from '../service/useCodeHighlight';
import dompurify from 'dompurify';
import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';
import replaceEmptyWithHTMLElement from '../service/replaceEmptyWithHTMLElement';
import addLineNumbersToCode from '../service/addLineNumbersToCode';
import TextBlock from './TextBlock';
import { useDnDStore } from '@store/useDnDStore';

interface QuestionProps {
  title: Quiz['title'];
  question: Quiz['question'];
  category: Quiz['category'];
}
export default function Question({ title, question, category }: QuestionProps) {
  const { currentPage, userResponseAnswer } = useClientQuizStore();
  const { setOutsideDropZone } = useDnDStore();
  const highlightCode = useCodeHighlight(question, [question, currentPage]);
  const replaceEmptyCode = replaceEmptyWithHTMLElement(highlightCode);
  const addLineNumberCode = addLineNumbersToCode(replaceEmptyCode);

  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode instanceof Element && domNode.attribs.class === 'empty') {
        const id = Number(domNode.attribs.id.match(/\d+$/));
        return <TextBlock text={userResponseAnswer[id]} index={id} />;
      }
    },
  };

  return (
    <S.QuestionSection
      $category={category}
      draggable
      onDragEnter={e => {
        if (e.currentTarget === e.target) {
          setOutsideDropZone(true);
        }
      }}
    >
      <S.Title $category={category}>
        <p>문제{currentPage + 1}.</p>
        <p>{title}</p>
      </S.Title>
      <S.Pre>
        <S.Code>{parse(dompurify.sanitize(addLineNumberCode), options)}</S.Code>
      </S.Pre>
    </S.QuestionSection>
  );
}
