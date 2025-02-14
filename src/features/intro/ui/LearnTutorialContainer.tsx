import * as globalS from '@style/styles';
import * as S from '@/pages/learn/styles';
import toast from 'react-hot-toast';
import useScrollVisibility from '@hooks/useScrollVisibility';
import { useState, useCallback } from 'react';
import { useTimeout } from '@modern-kit/react';
import { noop } from '@modern-kit/utils';
import { useElementRect } from '@/features/intro/service/hooks';
import { SectionGroup } from '@/pages/learn/styles';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import DailyQuest from '@features/quest/ui/DailyQuest';
import ProgressBar from '@features/progress/ui/ProgressBar';
import SelectSection from '@features/learn/ui/SelectSection';
import KeycapAdventureIntro from '@features/learn/ui/KeycapAdventureIntro';
import PartNavContainer from '@features/learn/ui/PartNavContainer';
import { PROGRESS_COLORS } from '@features/learn/constants';
import LearnTutorial from '@features/intro/ui/LearnTutorial';
import { LEARN_TUTORIAL_SECTIONS_PARTS } from '@features/intro/constants';

export default function LearnTutorialContainer() {
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentStep, setCurrentStep] = useState('');
  const showComponents = useScrollVisibility();

  const { getClientRectRefCallback } = useElementRect();

  useTimeout(() => setShowTutorial(true), {
    delay: 100,
    enabled: !showTutorial,
  });

  // LearnTutorial에서 step이 바뀔 때 호출될 함수
  const handleStepChange = useCallback(
    (step: string) => {
      setCurrentStep(step);
      if (step === '') {
        toast(`키캡 버튼을 눌러 '튜토리얼!' 파트를 풀어보세요!`);
      }
    },
    [setCurrentStep]
  );

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <title>튜토리얼 - 코코와 함께 학습하기</title>
          <Header />
          <DailyQuest />
          <KeycapAdventureIntro />
        </globalS.RightSection>
      </globalS.Wrapper>

      <globalS.Layout>
        <S.ScreenReaderOnlyTitle
          id="screen-reader-start"
          ref={getClientRectRefCallback}
        >
          코코와 함께 튜토리얼 진행하기!
        </S.ScreenReaderOnlyTitle>

        {/* 진행도 바 */}
        <S.ProgressBarWrapper
          id="learn-progress-bar"
          ref={getClientRectRefCallback}
        >
          <S.ProgressLabel>전체 진행도</S.ProgressLabel>
          <ProgressBar
            $progress={1}
            $maxProgress={4}
            $maxWidth="639px"
            $height="16px"
            $boxBgColor={PROGRESS_COLORS.global.boxBg}
            $innerBgColor={PROGRESS_COLORS.global.innerBg}
            $borderRadius="8px"
          />
          <S.ProgressText>1/4 문제</S.ProgressText>
        </S.ProgressBarWrapper>

        {/* 섹션 선택 */}
        <S.ScrollableContainer $show={showComponents} $isLoggedIn={true}>
          <SelectSection isTutorial={true} />
        </S.ScrollableContainer>

        {/* 섹션 + 파트 목록 */}
        <SectionGroup>
          <PartNavContainer
            sections={LEARN_TUTORIAL_SECTIONS_PARTS}
            fetchNextPage={noop}
            hasNextPage={false}
            isFetchingNextPage={false}
            onFetchProgress={noop}
            tutorialStep={currentStep}
          />
        </SectionGroup>
      </globalS.Layout>

      {showTutorial && <LearnTutorial onStepChange={handleStepChange} />}
    </>
  );
}
