import Quiz from '../../../types/Quiz';
import { CombinationUl, TextBlockLi } from '../styles';
import Submit from './Submit';
import useCombinationController from '../service/useCombinationController';

export default function Combination({
  answerChoice,
}: Pick<Quiz, 'answerChoice'>) {
  const [choiceList, handleChoiceList] = useCombinationController();
  return (
    <>
      <CombinationUl>
        {answerChoice.map(value => (
          <TextBlockLi onClick={() => handleChoiceList(value)}>
            {value}
          </TextBlockLi>
        ))}
      </CombinationUl>
      <Submit userSubmitAnswer={choiceList}></Submit>
    </>
  );
}
