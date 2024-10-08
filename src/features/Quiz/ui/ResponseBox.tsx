import type Quiz from '../../../types/Quiz';
import Combination from './Combination';
import MultipleChoice from './MultipleChoice';
import OXSelector from './OXSelector';
import ShortAnswer from './ShortAnswer';
//사용자의 응답을 저장

export default function ResponseBox({
  category,
}: {
  category: Quiz['category'];
}) {
  //문제 유형 매핑 객체
  const QuizCategoryComponentMapping: Record<Quiz['category'], JSX.Element> = {
    //조합식
    Combination: <Combination />,
    //객관식
    MultipleChoice: <MultipleChoice />,
    //ox
    OXSelector: <OXSelector />,
    //단답형
    ShortAnswer: <ShortAnswer />,
  };

  return QuizCategoryComponentMapping[category];
}
