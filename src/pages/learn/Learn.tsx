import * as globalS from '@style/styles';
import * as S from './styles';
import { SectionGroup } from './styles';
import { PRELOAD_IMAGES } from '@features/learn/constants';
import useScrollVisibility from '@hooks/useScrollVisibility';
import usePreloadImages from '@hooks/usePreloadImages';
import MenuBar from '@common/layout/MenuBar';
import Header from '@common/layout/Header';
import DailyQuest from '@features/quest/ui/DailyQuest';
import ProgressBar from '@features/progress/ui/ProgressBar';
import SelectSection from '@features/learn/ui/SelectSection';
import KeycapAdventureIntro from '@features/learn/ui/KeycapAdventureIntro';
import PartNavContainer from '@features/learn/ui/PartNavContainer';
import { useState, useCallback } from 'react';
import { useUserProgressQuery } from '@features/user/queries';
import { Section, Part } from '@features/learn/types';

export default function Learn() {
  const showComponents = useScrollVisibility();

  // 선택된 파트와 섹션 ID 상태 관리
  const [selectedPartId, setSelectedPartId] = useState<Part['id'] | undefined>(
    undefined
  );
  const [selectedSectionId, setSelectedSectionId] = useState<
    Section['id'] | undefined
  >(undefined);

  // user(자신)와 progress의 관계 데이터를 가져오는 쿼리
  const { data: progressData } = useUserProgressQuery.getProgress({
    partId: selectedPartId,
    sectionId: selectedSectionId,
  });

  // PartNavContainer에 전달할 핸들러 함수 정의
  const handleFetchProgress = useCallback(
    (partId?: Part['id'], sectionId?: Section['id']) => {
      setSelectedPartId(partId);
      setSelectedSectionId(sectionId);
    },
    []
  );

  usePreloadImages({ imageUrls: PRELOAD_IMAGES });

  return (
    <>
      <globalS.Wrapper>
        <globalS.LeftSection>
          <MenuBar />
        </globalS.LeftSection>
        <globalS.RightSection>
          <title>코코- 자바스크립트 코딩 문제풀이</title>
          <Header />
          <DailyQuest />
          <KeycapAdventureIntro />
        </globalS.RightSection>
      </globalS.Wrapper>
      <globalS.Layout>
        <S.ScreenReaderOnlyTitle>
          코코와 함께 코딩 마스터하기!
        </S.ScreenReaderOnlyTitle>
        <S.ProgressBarWrapper>
          <ProgressBar
            $progress={progressData?.correctUserProgressCount || 0}
            $maxProgress={progressData?.totalQuizCount || 0}
            $maxWidth="639px"
            $height="16px"
            $boxBgColor="#85705F"
            $innerBgColor="#BFD683"
          />
        </S.ProgressBarWrapper>
        <S.ScrollableContainer $show={showComponents}>
          <SelectSection />
        </S.ScrollableContainer>
        <SectionGroup>
          <PartNavContainer onFetchProgress={handleFetchProgress} />
        </SectionGroup>
      </globalS.Layout>
    </>
  );
}
