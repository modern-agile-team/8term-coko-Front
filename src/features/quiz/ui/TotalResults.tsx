import { experienceQuery } from '../../../queries/usersQuery';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
import useUserStore from '../../../store/useUserStore';
import type Quiz from '../../../types/Quiz';
import User from '../../../types/User';
import ProgressBar from '../../progress/ui/ProgressBar';
import {
  DashLineHr,
  ImageDescriptionDiv,
  Img,
  RedirectToLearnButton,
  TotalResultProgressDiv,
  TotalResultSection,
  TotalResultsRewardDiv,
  TotalResultsTextDiv,
} from '../styles';
import { getImageUrl } from './../../../utils/getImageUrl';
import { useTimeout } from '@modern-kit/react';
import { useNavigate } from 'react-router-dom';
interface TotalResultsProps {
  quizzes: Quiz[];
  totalResults: boolean[];
}
export default function TotalResults({ totalResults }: TotalResultsProps) {
  const totalResultCount = totalResults.filter(result => result).length;
  const { user } = useUserStore() as { user: User };
  const experience = totalResultCount * 10;
  const { mutate: experienceUpdate, isIdle } = experienceQuery.patch();
  const { data: userExperience, isSuccess } = experienceQuery.get(user.id);
  const { reset } = useClientQuizStore();
  const navigate = useNavigate();
  useTimeout(
    () => {
      experienceUpdate({ id: user.id, experience });
    },
    { delay: 1000, enabled: isSuccess }
  );
  if (!userExperience) {
    return <div>404...</div>;
  }

  return (
    <>
      <TotalResultSection>
        <TotalResultsTextDiv>
          총<p>&nbsp; {totalResultCount}&nbsp;</p>
          문제를 맞혔고 <p>&nbsp;{experience} 경험치</p>를 얻었어!
        </TotalResultsTextDiv>
        <DashLineHr />
        <TotalResultsRewardDiv>
          <ImageDescriptionDiv>
            <Img
              $width="201px"
              $height="159px"
              src={getImageUrl('레벨1코코.svg')}
              alt="레벨업 이미지"
            />
            <p>Level.{userExperience.level}</p>
          </ImageDescriptionDiv>
          <TotalResultProgressDiv>
            <Img
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
            <Img
              src={getImageUrl('반짝이.svg')}
              $width="45px"
              $height="60px"
              alt="반짝이"
            />
          </TotalResultProgressDiv>
        </TotalResultsRewardDiv>
        <DashLineHr />
        <RedirectToLearnButton
          disabled={isIdle}
          $isActive={isIdle}
          onClick={() => {
            reset();
            navigate('/learn');
          }}
        >
          메인으로
        </RedirectToLearnButton>
      </TotalResultSection>
    </>
  );
}
