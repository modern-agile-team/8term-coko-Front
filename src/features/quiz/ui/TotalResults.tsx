import { experienceQuery } from '@queries/usersQuery';
import { useClientQuizStore } from '@store/useClientQuizStore';
import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import { useTimeout } from '@modern-kit/react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '@features/progress/ui/ProgressBar';
import useUserStore from '@store/useUserStore';
import User from '@type/User';
interface TotalResultProps {
  onNext: () => void;
  quizzesLength: number;
}
export default function TotalResults({
  onNext,
  quizzesLength,
}: TotalResultProps) {
  const { totalResults } = useClientQuizStore();
  const quizCorrectAnswers = totalResults.filter(result => result).length;
  const isPartClear = quizzesLength === quizCorrectAnswers;
  const { user } = useUserStore() as { user: User };
  const experience = quizCorrectAnswers * 10;
  const { mutate: experienceUpdate, isIdle } = experienceQuery.patch();
  const { data: userExperience, isSuccess } = experienceQuery.get(user?.id);

  const navigate = useNavigate();
  useTimeout(
    () => {
      experienceUpdate({ id: user.id, experience });
    },
    { delay: 1000, enabled: isSuccess }
  );
  if (!userExperience) {
    return <></>;
  }
  return (
    <S.CompensationSection $backgroundColor="#ffffff" $boxShadow="#E5E5E5">
      <S.CompensationTextDiv>
        총<p>&nbsp; {quizCorrectAnswers}&nbsp;</p>
        문제를 맞혔고 <p>&nbsp;{experience} 경험치</p>를 얻었어!
      </S.CompensationTextDiv>
      <S.DashLineHr $color="#00DCE8" />
      <S.TotalResultsRewardDiv>
        <S.ImageDescriptionDiv>
          <S.Img
            $width="201px"
            $height="159px"
            src={getImageUrl('레벨1코코.svg')}
            alt="레벨업 이미지"
          />
          <p>Level.{userExperience.level}</p>
        </S.ImageDescriptionDiv>
        <S.TotalResultProgressDiv>
          <S.Img
            src={getImageUrl('반짝이.svg')}
            $width="45px"
            $height="60px"
            alt="반짝이"
          />
          <div>
            <p>경험치</p>
            <ProgressBar
              $height="16px"
              $maxWidth="242px"
              $boxBgColor="#85705F"
              $innerBgColor="#BFD683"
              $progress={userExperience?.experience}
              $maxProgress={userExperience?.experienceForNextLevel}
              style={{ width: '242px' }}
            />
          </div>
          <S.Img
            src={getImageUrl('반짝이.svg')}
            $width="45px"
            $height="60px"
            alt="반짝이"
          />
        </S.TotalResultProgressDiv>
      </S.TotalResultsRewardDiv>
      <S.DashLineHr $color="#00DCE8" />
      <S.RedirectToLearnButton
        disabled={isIdle}
        $isActive={isIdle}
        onClick={() => {
          isPartClear ? onNext() : navigate('/learn');
        }}
      >
        {isPartClear ? '보상 받기' : '메인으로'}
      </S.RedirectToLearnButton>
    </S.CompensationSection>
  );
}
