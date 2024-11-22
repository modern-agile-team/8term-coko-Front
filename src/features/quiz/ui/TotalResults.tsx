import { experienceQuery } from '@queries/usersQuery';
import { useClientQuizStore } from '@store/useClientQuizStore';
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
import { getImageUrl } from '@utils/getImageUrl';
import { useTimeout } from '@modern-kit/react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '@/features/progress/ui/ProgressBar';
import { useEffect } from 'react';
import useModal from '@/hooks/useModal';
import useUserStore from '@/store/useUserStore';
interface TotalResultProps {
  lastPage: number;
  resultModalShow: boolean;
}
export default function TotalResults({
  lastPage,
  resultModalShow,
}: TotalResultProps) {
  const { totalResults } = useClientQuizStore();
  const totalResultCount = totalResults.filter(result => result).length;
  const { user } = useUserStore();
  const experience = totalResultCount * 10;
  const { mutate: experienceUpdate, isIdle } = experienceQuery.patch();
  const { reset, currentPage } = useClientQuizStore();
  const { Modal, closeModal, isShow, openModal } = useModal();

  useEffect(() => {
    if (currentPage === lastPage) {
      openModal();
    }
  }, [currentPage, resultModalShow]);
  if (!user) {
    return <></>;
  }
  const { data: userExperience, isSuccess } = experienceQuery.get(user?.id);

  const navigate = useNavigate();
  useTimeout(
    () => {
      experienceUpdate({ id: user.id, experience });
    },
    { delay: 1000, enabled: isSuccess && isShow }
  );
  if (!userExperience) {
    return <></>;
  }
  return (
    <Modal isShow={isShow}>
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
            closeModal();
            reset();
            navigate('/learn');
          }}
        >
          메인으로
        </RedirectToLearnButton>
      </TotalResultSection>
    </Modal>
  );
}
