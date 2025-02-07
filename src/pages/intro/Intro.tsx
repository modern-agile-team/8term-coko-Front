import { BUTTON_LIST, COKO_TEAM_INFO } from '@/pages/constants';
import BadgeIntro from '@/features/intro/ui/BadgeIntro';
import PageIntro from '@/pages/intro/PageIntro';
import * as S from '@/pages/intro/styles';
import { getImageUrl } from '@/utils/getImageUrl';
import { Link } from 'react-router-dom';

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
      <S.QuizIntroWrapper>
        <S.QuizIntroButtonList>
          {BUTTON_LIST.map(button => (
            <button key={button.id}>{button.label}</button>
          ))}
        </S.QuizIntroButtonList>
        <PageIntro
          label="QUIZ"
          mainTitle={`다양한 
          문제 유형`}
          description={`다양한 문제 유형으로
코딩 문제를 쉽고, 재밌게.`}
          image="조합형소개.webp"
          orderChange={true}
        />
      </S.QuizIntroWrapper>
      <PageIntro
        label="QUEST"
        mainTitle={`매일 달라지는
미션들`}
        description={`공부에 의욕을 더해주는 미션들.`}
        image="퀘스트소개.webp"
      />
      <S.ProfileIntroWrapper>
        <S.IntroCard $alignItems="center">
          <h5>PROFILE</h5>
          <h1>나만의 프로필</h1>
          <p>뱃지를 모으며 성장해나가기.</p>
        </S.IntroCard>
        <BadgeIntro></BadgeIntro>
      </S.ProfileIntroWrapper>
      <PageIntro
        label="RANKING"
        mainTitle={`다른 회원들과
실력 겨루기`}
        description={`성취감과 성장을 도와주는 
다른 회원들과의 선의의 경쟁.`}
        image="퀘스트소개.webp"
        backgroundColor="#F7F7F7"
      />
      <PageIntro
        label="STORE"
        mainTitle={`나만의
캐릭터`}
        description={`캐릭터를 자신만의 스타일로
꾸밀 수 있는 상점까지.`}
        image="퀘스트소개.webp"
        orderChange={true}
        backgroundColor="#F7F7F7"
      />
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
