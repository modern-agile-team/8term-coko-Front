import CokoLogo from '@common/layout/CokoLogo';
import MenuBar from '@common/layout/MenuBar';
import * as globalS from '@/style/style';
import Header from '@common/layout/Header';
import * as S from './styles';
import ProfileImage from '@features/user/ui/ProfileImage';
import ProgressBar from '@features/progress/ui/ProgressBar';
import { getImageUrl } from '@/utils/getImageUrl';
import BadgeContainer from '@features/user/ui/BadgeContainer';
import React from 'react';
const levelList = [60, 50, 40, 30, 20, 10];
export default function Profile() {
  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <CokoLogo />
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <Header />

          <S.LevelDiv>
            <div>
              <S.MyCharacterImage src={getImageUrl('테스트캐릭터.svg')} />
              <S.LevelLabel>Level.1</S.LevelLabel>
            </div>
            <S.LevelList>
              {levelList.map(level => (
                <React.Fragment key={level}>
                  <li>
                    <span>Level.{level} </span> -
                  </li>
                  <li>&mdash;</li>
                </React.Fragment>
              ))}
            </S.LevelList>
            <ProgressBar
              $progress={40}
              $maxProgress={100}
              $height="20px"
              $innerBgColor="#FFD100;"
              $boxBgColor="#FFEFAA"
              style={{
                width: '600px',
                position: 'absolute',
                transform: 'rotate(-90deg)',
                right: '-270px',
                top: '300px',
              }}
            />
          </S.LevelDiv>
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <S.ProfileSection>
          <div>
            <ProfileImage />
            <S.UserNameLabel>유저 이름</S.UserNameLabel>
            <S.JoinDateLabel>2024.10.01</S.JoinDateLabel>
          </div>
          <S.MyProgressDiv>
            <p>
              코코에 접속한 지 벌써 <span>20</span>일이 됐어요 !
            </p>
            <img src={getImageUrl('출석일수.svg')}></img>
            <div>
              <p>진행도</p>
              <ProgressBar
                $progress={40}
                $maxProgress={100}
                $height="20px"
                $innerBgColor="#BFD683"
                $boxBgColor="#85705F"
                style={{
                  width: '283px',
                }}
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
      </globalS.Layout>
    </>
  );
}
