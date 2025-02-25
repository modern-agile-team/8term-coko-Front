import { TutorialClearWrapper } from '@features/intro/ui/styles';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '@utils/getImageUrl';

export default function QuizTutorialClear() {
  const navigate = useNavigate();
  const handleGoToLearn = () => {
    navigate('/learn');
  };

  return (
    <TutorialClearWrapper>
      <img src={getImageUrl('튜토리얼-코코.svg')} alt="튜토리얼 클리어" />
      <div>
        <p>
          튜토리얼 클리어 축하해
          <br />
          이제 진짜 모험을 떠나는 거야!
        </p>
        <button onClick={handleGoToLearn}>학습 페이지로 이동</button>
      </div>
    </TutorialClearWrapper>
  );
}
