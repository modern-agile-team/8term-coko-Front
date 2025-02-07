import { BUTTON_LIST, COKO_TEAM_INFO } from '@/pages/constants';
import BadgeIntro from '@/features/intro/ui/BadgeIntro';
import PageIntroBanner from '@/features/intro/ui/PageIntroBanner';
import * as S from '@/pages/intro/styles';
import { getImageUrl } from '@/utils/getImageUrl';
import { Link } from 'react-router-dom';
import { PAGE_INTRO_DATA } from '@/features/intro/constants';
import { Fragment } from 'react/jsx-runtime';

export default function Intro() {
  return (
    <S.IntroWrapper>
      <S.IntroHeader>
        <img src={getImageUrl('로고.svg')} />
        <div>
          <Link to={'/intro'}>사이트 소개</Link>
          <Link to={'/'}>만든 사람들</Link>
        </div>
      </S.IntroHeader>
      <main>
        <S.CokoIntroSectionWrapper>
          <div>
            <div>
              <h1>
                재밌고 쉽게 푸는 <br />
                자바스크립트 학습 사이트
              </h1>
              <h2>코딩하는 코끼리, 코코</h2>
              <button>시작하기</button>
              <button>로그인하기</button>
            </div>
          </div>

          <div>
            <img src={getImageUrl('메인소개.webp')}></img>
          </div>
        </S.CokoIntroSectionWrapper>

        <S.GradientCokoIntroWrapper>
          <h3>접근하기 힘들었던 코딩풀이는 이제 안녕.</h3>
          <h4>코코 사이트와 함께 다양하고, 재밌는 방식으로 공부하기</h4>
        </S.GradientCokoIntroWrapper>

        <S.QuizIntroButtonList>
          {BUTTON_LIST.map(button => (
            <button key={button.id}>{button.label}</button>
          ))}
        </S.QuizIntroButtonList>
        {PAGE_INTRO_DATA.map((intro, index) =>
          index === 2 ? (
            <Fragment key={intro.label}>
              <S.ProfileIntroWrapper>
                <S.IntroCard $alignItems="center">
                  <h5>PROFILE</h5>
                  <h1>나만의 프로필</h1>
                  <p>뱃지를 모으며 성장해나가기.</p>
                </S.IntroCard>
                <BadgeIntro></BadgeIntro>
              </S.ProfileIntroWrapper>
              <PageIntroBanner
                key={index}
                label={intro.label}
                mainTitle={intro.mainTitle}
                description={intro.description}
                image={intro.image}
                orderChange={intro.orderChange}
                backgroundColor={intro.backgroundColor}
              />
            </Fragment>
          ) : (
            <>
              <PageIntroBanner
                key={intro.label}
                label={intro.label}
                mainTitle={intro.mainTitle}
                description={intro.description}
                image={intro.image}
                orderChange={intro.orderChange}
                backgroundColor={intro.backgroundColor}
              />
            </>
          )
        )}
      </main>
      <S.IntroFooterWrapper>
        <hr />

        <S.IntroFooter>
          <S.TeamIntroWrapper>
            {COKO_TEAM_INFO.map(team => (
              <div key={team.label}>
                <h6>{team.label}</h6>
                <ul>
                  {team.createBy.map(member => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </S.TeamIntroWrapper>
          <img src={getImageUrl('인스타_아이콘.svg')} />
        </S.IntroFooter>
      </S.IntroFooterWrapper>
    </S.IntroWrapper>
  );
}
