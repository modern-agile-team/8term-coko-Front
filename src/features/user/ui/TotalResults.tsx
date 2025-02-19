import * as S from '@features/quiz/ui/styles';
import { getImageUrl } from '@utils/getImageUrl';
import useUserStore from '@store/useUserStore';
import { useClientQuizStore } from '@/features/quiz/useClientQuizStore';
import { useNavigate } from 'react-router-dom';
import { useTimeout } from '@modern-kit/react';
import {
  useUserExperienceQuery,
  useUserPartStatusQuery,
} from '@features/user/queries';
import ProgressBar from '@features/progress/ui/ProgressBar';
import type { Quiz } from '@features/quiz/types';
import type { PartStatus } from '@features/learn/types';
import { isCompleted } from '@/features/quiz/utils';

interface TotalResultProps {
  onNext: () => void;
  quizzesLength: number;
  partId: Quiz['partId'];
  partStatus: PartStatus;
}
export default function TotalResults({
  onNext,
  quizzesLength,
  partId,
  partStatus,
}: TotalResultProps) {
  const { isCorrectList } = useClientQuizStore();

  const { data: userExperience, isSuccess } =
    useUserExperienceQuery.getExperience();
  const { mutate: experienceUpdate, isIdle: isExperienceIdle } =
    useUserExperienceQuery.updateExperience();
  const { mutate: updatePartStatus, isIdle: isProgressIdle } =
    useUserPartStatusQuery.updatePartStatus();

  const navigate = useNavigate();

  const quizCorrectAnswers = isCorrectList.filter(result => result).length;
  const experience = quizCorrectAnswers * 10;
  const isPartClear = quizzesLength === quizCorrectAnswers;

  useTimeout(
    () => {
      experienceUpdate({ experience });
      !isCompleted(partStatus) &&
        updatePartStatus({ partId, partStatus: 'IN_PROGRESS' });
    },
    { delay: 1000, enabled: isSuccess }
  );

  const handleOnClick = () => {
    if (isPartClear && !isCompleted(partStatus)) {
      onNext();
    } else {
      navigate('/learn');
    }
  };

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
        disabled={isExperienceIdle && isProgressIdle}
        $isActive={isExperienceIdle && isProgressIdle}
        $margin="35px 86px 0 0"
        onClick={handleOnClick}
      >
        {isPartClear && !isCompleted ? '보상 받기' : '메인으로'}
      </S.RedirectToLearnButton>
    </S.CompensationSection>
  );
}
