import * as S from './styles';
import './styles.css';
import 'highlight.js/styles/github.css';
import {
  useClientQuizStore,
  useDragAndDropStore,
} from '@/features/quiz/stores';
import dompurify from 'dompurify';
import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';
import TextBlock from './TextBlock';
import type { Quiz } from '@features/quiz/types';
import {
  addLineNumbersToCode,
  replaceEmptyWithHTMLElement,
} from '@/features/quiz/utils';
import { useCodeHighlight } from '@/features/quiz/hooks';
import { useElementRect } from '@/features/intro/service/hooks';
import { useMemo } from 'react';

interface QuestionProps {
  title: Quiz['title'];
  question: Quiz['question'];
  category: Quiz['category'];
}
export default function Question({ title, question, category }: QuestionProps) {
  const { currentPage, userResponseAnswer } = useClientQuizStore();
  const { setOutsideDropZone } = useDragAndDropStore();

  const { getClientRectRefCallback } = useElementRect();
  const highlightCode = useCodeHighlight(question, [question, currentPage]);

  const addLineNumberCode = useMemo(() => {
    const replaceEmptyCode = replaceEmptyWithHTMLElement(highlightCode);
    return addLineNumbersToCode(replaceEmptyCode);
  }, [highlightCode]);

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
      <S.TitleWrapper $category={category}>
        <p>문제{currentPage + 1}.</p>
        <p>{title}</p>
      </S.TitleWrapper>
      <S.Pre id="question" ref={getClientRectRefCallback}>
        <S.VerticalLine />
        <S.Code>{parse(dompurify.sanitize(addLineNumberCode), options)}</S.Code>
      </S.Pre>
    </S.QuestionSection>
  );
}
