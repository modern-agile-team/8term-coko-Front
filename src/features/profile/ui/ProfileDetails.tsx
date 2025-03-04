import * as S from './styles';
import ProfileImage from '@features/user/ui/ProfileImage';
import { getImageUrl } from '@utils/getImageUrl';
import formatDate from '@utils/formatDate';
import ProgressBar from '@features/progress/ui/ProgressBar';
import BadgeContainer from '@features/user/ui/BadgeContainer';

interface ProfileDetailsProps {
  userName: string;
  userJoinDate: string;
  userTotalAttendance: number;
  currentProgress: number;
  maxProgress: number;
  solvedCount: number;
  incorrectCount: number;
  unsolvedCount: number;
}

export default function ProfileDetails({
  userName,
  userJoinDate,
  userTotalAttendance,
  currentProgress,
  maxProgress,
  solvedCount,
  incorrectCount,
  unsolvedCount,
}: ProfileDetailsProps) {
  return (
    <>
      <S.ProfileSection>
        <div>
          <div style={{ marginTop: '50px' }}>
            <ProfileImage isIcon={false} />
          </div>
          <S.UserNameLabel>{userName}</S.UserNameLabel>
          <S.JoinDateLabel>{formatDate(userJoinDate)}</S.JoinDateLabel>
        </div>
        <S.MyProgressDiv>
          <p>
            코코에 접속한 지 벌써 <span>{userTotalAttendance}</span>일이 됐어요
            !
          </p>
          <img src={getImageUrl('출석일수.svg')} alt="출석일수" />
          <div>
            <p>(정답 / 전체)</p>
            <ProgressBar
              $progress={currentProgress}
              $maxProgress={maxProgress}
              $height="20px"
              $innerBgColor="#BFD683"
              $boxBgColor="#85705F"
              style={{ width: '283px' }}
            />
          </div>
          <S.MyQuizInfoDiv>
            <p>
              푼 문제 <span>{solvedCount}</span>개
            </p>
            <p>
              틀린 문제 <span>{incorrectCount}</span>개
            </p>
            <p>
              안 푼 문제 <span>{unsolvedCount}</span>개
            </p>
          </S.MyQuizInfoDiv>
        </S.MyProgressDiv>
      </S.ProfileSection>
      <S.BadgeSection>
        <S.BadgeLabel>나의 뱃지</S.BadgeLabel>
        <BadgeContainer />
      </S.BadgeSection>
    </>
  );
}
