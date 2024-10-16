import {
  EmptyDiv,
  QuestionDiv,
  QuestionSection,
  TextBlockButton,
} from './../styles';
import { useClientQuizStore } from '../../../store/useQuizStore';
import textChangeToArray from '../service/textChangeToArray';
interface questiontype {
  title: string;
  question: string;
  category: string;
  answerChoice: string[];
}
export default function Question({ title, question, category }: questiontype) {
  const { userChoiceCombination, removeMyChoice } = useClientQuizStore();
  const questionArray = textChangeToArray(question);
  return category === 'Combination' ? (
    <>
      <QuestionSection>
        <div>title: {title} </div>
        <QuestionDiv>
          question:
          {questionArray.map((item, index) =>
            item === 'empty' ? (
              <EmptyDiv key={index} />
            ) : (
              <div key={index}>{item}</div>
            )
          )}
          유저가 고른거:
          {userChoiceCombination?.map((item, index) => (
            <TextBlockButton
              key={index}
              onClick={() => {
                removeMyChoice(item);
              }}
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
        <div>title: {title} </div>
        <div>question: {question}</div>
      </QuestionSection>
    </>
  );
}
