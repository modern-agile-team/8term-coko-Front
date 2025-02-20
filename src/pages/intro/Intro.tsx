import { useRef, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '@/utils/getImageUrl';
import * as S from '@/pages/intro/styles';
import BadgeIntro from '@/features/intro/ui/BadgeIntro';
import PageIntroBanner from '@/features/intro/ui/PageIntroBanner';
import {
  BUTTON_LIST,
  COKO_TEAM_INFO,
  PAGE_INTRO_DATA,
} from '@/features/intro/constants';
import { IntroCard } from '@/features/intro/ui/styles';
import { useScrollTo } from '@modern-kit/react';
import TutorialPromptModal from '@/features/intro/ui/TutorialPromptModal';
import useModal from '@/hooks/useModal';

export default function Intro() {
  const [activeCategory, setActiveCategory] = useState('COMBINATION');
  const { isShow, openModal, closeModal, Modal } = useModal();

  const footerRef = useRef<HTMLDivElement | null>(null);
  const quizIntroRef = useRef<HTMLDivElement | null>(null);
  const { scrollToElement } = useScrollTo<HTMLDivElement>();

  const handleScrollToFooter = () => {
    if (footerRef.current) {
      scrollToElement(footerRef.current, { behavior: 'smooth' });
    }
  };

  const handleScrollToQuizIntro = () => {
    if (quizIntroRef.current) {
      scrollToElement(quizIntroRef.current, { behavior: 'smooth' });
    }
  };

  return (
    <S.IntroWrapper>
      <title>코코-자바스크립트 학습 사이트</title>
      <S.IntroHeader>
        <Link to="/learn">
          <img src={getImageUrl('로고.svg')} alt="사이트 로고" />
        </Link>
        <div>
          <button onClick={handleScrollToQuizIntro}>사이트 소개</button>
          <button onClick={handleScrollToFooter}>만든 사람들</button>
        </div>
      </S.IntroHeader>
      <main>
        <S.TopCokoIntroWrapper>
          <div>
            <h1>
              재밌고 쉽게 푸는 <br />
              자바스크립트 학습 사이트
            </h1>
            <h2>코딩하는 코끼리, 코코</h2>
          </div>
          <div>
            <button onClick={openModal}>시작하기</button>
            <Link to="/login">로그인하기</Link>
          </div>
          <div>
            <img src={getImageUrl('메인소개.webp')} alt="메인화면 소개" />
          </div>
        </S.TopCokoIntroWrapper>

        <S.GradientCokoIntroWrapper>
          <h2>접근하기 힘들었던 코딩풀이는 이제 안녕.</h2>
          <h3>코코 사이트와 함께 다양하고, 재밌는 방식으로 공부하기</h3>
        </S.GradientCokoIntroWrapper>

        <S.QuizIntroButtonList ref={quizIntroRef}>
          {BUTTON_LIST.map(buttonOption => (
            <S.CategoryButton
              $isActive={buttonOption.category === activeCategory}
              key={buttonOption.category}
              onClick={() => setActiveCategory(buttonOption.category)}
            >
              {buttonOption.label}
            </S.CategoryButton>
          ))}
        </S.QuizIntroButtonList>

        <PageIntroBanner
          label="QUIZ"
          mainTitle={'다양한 \n문제 유형'}
          description={'다양한 문제 유형으로\n코딩 문제를 쉽고, 재밌게.'}
          image={`${activeCategory}-소개.svg`}
          backgroundColor="#fff"
          orderChange
        />

        {PAGE_INTRO_DATA.map((intro, index) =>
          index === 1 ? (
            <Fragment key={intro.label}>
              <S.ProfileIntroWrapper>
                <IntroCard $alignItems="center">
                  <h3>PROFILE</h3>
                  <h1>나만의 프로필</h1>
                  <p>뱃지를 모으며 성장해나가기.</p>
                </IntroCard>
                <BadgeIntro />
              </S.ProfileIntroWrapper>
              <PageIntroBanner
                label={intro.label}
                mainTitle={intro.mainTitle}
                description={intro.description}
                image={intro.image}
                orderChange={intro.orderChange}
                backgroundColor={intro.backgroundColor}
              />
            </Fragment>
          ) : (
            <PageIntroBanner
              key={intro.label}
              label={intro.label}
              mainTitle={intro.mainTitle}
              description={intro.description}
              image={intro.image}
              orderChange={intro.orderChange}
              backgroundColor={intro.backgroundColor}
            />
          )
        )}
      </main>

      <S.BottomCokoIntroWrapper>
        <div>
          <img src={getImageUrl('앉은-코코.svg')} alt="앉아있는 코코" />
        </div>
        <div>
          <div>
            <p>
              전설의 키캡을 찾아 나서는
              <br /> 해적 코코의 여정을 함께해요 !
            </p>
            <Link to="/learn">모험 떠나러 가기</Link>
          </div>
        </div>
      </S.BottomCokoIntroWrapper>

      <S.IntroFooterWrapper>
        <hr />
        <S.IntroFooter ref={footerRef}>
          <S.TeamIntroWrapper>
            {COKO_TEAM_INFO.map(team => (
              <div key={team.label}>
                <h4>{team.label}</h4>
                <ul>
                  {team.createBy.map(member => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </S.TeamIntroWrapper>
          <img src={getImageUrl('인스타_아이콘.svg')} alt="인스타 아이콘" />
        </S.IntroFooter>
      </S.IntroFooterWrapper>

      <Modal isShow={isShow}>
        <TutorialPromptModal closeModal={closeModal} />
      </Modal>
    </S.IntroWrapper>
  );
}
