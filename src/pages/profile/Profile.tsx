import CokoLogo from '@common/layout/CokoLogo';
import MenuBar from '@common/layout/MenuBar';
import { Layout, LeftSection, RightSection, Wrapper } from '@/style/style';
import Header from '@common/layout/Header';
import {
  BadgeLabel,
  JoinDateLabel,
  LevelDiv,
  MyProgressDiv,
  MyQuizInfoDiv,
  UserNameLabel,
  ProfileSection,
  BadgeSection,
  LevelList,
  LevelLabel,
  MyCharacterImage,
} from './styles';
import ProfileImage from '@features/user/ui/ProfileImage';
import ProgressBar from '@features/progress/ui/ProgressBar';
import { getImageUrl } from '@/utils/getImageUrl';
import BadgeContainer from '@features/user/ui/BadgeContainer';
import React from 'react';
const levelList = [60, 50, 40, 30, 20, 10];
export default function Profile() {
  return (
    <>
      <Wrapper>
        <LeftSection>
          <CokoLogo />
          <MenuBar />
        </LeftSection>
        <RightSection>
          <Header />

          <LevelDiv>
            <div>
              <MyCharacterImage src={getImageUrl('테스트캐릭터.svg')} />
              <LevelLabel>Level.1</LevelLabel>
            </div>
            <LevelList>
              {levelList.map(level => (
                <React.Fragment key={level}>
                  <li>
                    <span>Level.{level} </span> -
                  </li>
                  <li>&mdash;</li>
                </React.Fragment>
              ))}
            </LevelList>
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
          </LevelDiv>
        </RightSection>
      </Wrapper>
      <Layout>
        <ProfileSection>
          <div>
            <ProfileImage />
            <UserNameLabel>유저 이름</UserNameLabel>
            <JoinDateLabel>2024.10.01</JoinDateLabel>
          </div>
          <MyProgressDiv>
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
            <MyQuizInfoDiv>
              <p>
                푼 문제 <span>52</span>개
              </p>
              <p>
                틀린 문제 <span>52</span>개
              </p>
              <p>
                안 푼 문제 <span>52</span>개
              </p>
            </MyQuizInfoDiv>
          </MyProgressDiv>
        </ProfileSection>
        <BadgeSection>
          <BadgeLabel>나의 뱃지</BadgeLabel>
          <BadgeContainer />
        </BadgeSection>
      </Layout>
    </>
  );
}
