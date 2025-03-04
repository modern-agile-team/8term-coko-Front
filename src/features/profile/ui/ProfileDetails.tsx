import * as S from './styles';
import ProfileImage from '@features/user/ui/ProfileImage';
import { getImageUrl } from '@/utils/getImageUrl';
import ProgressBar from '@features/progress/ui/ProgressBar';
import BadgeContainer from '@features/user/ui/BadgeContainer';

export default function ProfileDetails() {
  return (
    <>
      <S.ProfileSection>
        <div>
          <div style={{ marginTop: '50px' }}>
            <ProfileImage isIcon={false} />
          </div>
          <S.UserNameLabel>유저 이름</S.UserNameLabel>
          <S.JoinDateLabel>2024.10.01</S.JoinDateLabel>
        </div>
        <S.MyProgressDiv>
          <p>
            코코에 접속한 지 벌써 <span>20</span>일이 됐어요 !
          </p>
          <img src={getImageUrl('출석일수.svg')} alt="출석일수" />
          <div>
            <p>진행도</p>
            <ProgressBar
              $progress={40}
              $maxProgress={100}
              $height="20px"
              $innerBgColor="#BFD683"
              $boxBgColor="#85705F"
              style={{ width: '283px' }}
            />
          </div>
          <S.MyQuizInfoDiv>
            <p>
              푼 문제 <span>52</span>개
            </p>
            <p>
              틀린 문제 <span>52</span>개
            </p>
            <p>
              안 푼 문제 <span>52</span>개
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
