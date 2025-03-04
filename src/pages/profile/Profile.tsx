import React, { useMemo } from 'react';
import MenuBar from '@common/layout/MenuBar';
import * as globalS from '@style/styles';
import Header from '@common/layout/Header';
import * as S from './styles';
import ProfileImage from '@features/user/ui/ProfileImage';
import ProgressBar from '@features/progress/ui/ProgressBar';
import { getImageUrl } from '@/utils/getImageUrl';
import BadgeContainer from '@features/user/ui/BadgeContainer';
import useUserStore from '@store/useUserStore';

/**
 * 커스텀 훅: userLevel에 따른 사이클, 사이클 내 레벨, 진행도, 레벨 라벨 배열을 계산
 */
function useLevelInfo(userLevel: number) {
  return useMemo(() => {
    // 사이클 계산: 1~60: cycle 1, 61~120: cycle 2, ...
    const cycle = Math.floor((userLevel - 1) / 60) + 1;
    const start = (cycle - 1) * 60 + 1; // 구간 시작 레벨 (inclusive)
    const end = cycle * 60; // 구간 끝 레벨 (inclusive)

    // 10레벨 간격으로 (end → start) 내려가며 배열 생성
    const levelLabels: number[] = [];
    for (let lv = end; lv >= start; lv -= 10) {
      levelLabels.push(lv);
    }

    // 사이클 내 레벨 (예: userLevel=70 → 70이 속한 사이클에서의 레벨은 10)
    const cycleLevel = ((userLevel - 1) % 60) + 1;
    // 진행도 (%)
    const cycleProgress = (cycleLevel / 60) * 100;

    return { cycle, levelLabels, cycleLevel, cycleProgress };
  }, [userLevel]);
}

export default function Profile() {
  const { user } = useUserStore();
  const userLevel = user?.level || 1;
  const { levelLabels, cycleProgress } = useLevelInfo(userLevel);

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <Header />
          {/* PC일 때만 보이는 세로 레벨바 */}
          <S.LevelDiv>
            <div>
              <S.MyCharacterImage src={getImageUrl('테스트캐릭터.svg')} />
              <S.LevelLabel>Level.{userLevel}</S.LevelLabel>
            </div>
            <S.LevelList>
              {levelLabels.map(level => (
                <React.Fragment key={level}>
                  <li>
                    <span>Level.{level}</span> -
                  </li>
                  <li>&mdash;</li>
                </React.Fragment>
              ))}
            </S.LevelList>
            <ProgressBar
              $progress={cycleProgress}
              $maxProgress={100}
              $height="20px"
              $innerBgColor="#FFD100"
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
        {/* 모바일에서는 아래가 전체 폭으로 세로 배치 */}
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
              {/* 이 부분은 문제 풀이 진행도라면 별도 로직으로 계산 */}
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
      </globalS.Layout>
    </>
  );
}
