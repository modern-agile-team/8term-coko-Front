import * as S from '@features/learn/ui/styles';
import PartItem from '@features/learn/ui/PartItem';
import { useState, useEffect, useMemo, useCallback } from 'react';
import useUserStore from '@store/useUserStore';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useSectionPaginationQuery } from '@features/learn/queries';
import { LoadingSpinner } from '@common/layout/styles';
import { isLoggedIn } from '@features/user/service/authUtils';
import type { Section, Part } from '@features/learn/types';

interface PartNavContainerProps {
  onFetchProgress: (partId?: Part['id'], sectionId?: Section['id']) => void;
}

export default function PartNavContainer({
  onFetchProgress,
}: PartNavContainerProps) {
  const [isActiveBubble, setIsActiveBubble] = useState(false);
  const { user } = useUserStore();

  // 로그인 상태에 따라 섹션 쿼리 선택
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = isLoggedIn(
    user
  )
    ? useSectionPaginationQuery.getUserSectionsByPage()
    : useSectionPaginationQuery.getSectionsByPage();

  // 스크롤 감지를 위한 Intersection Observer
  const { ref, inView } = useInView({ threshold: 0 });

  // 섹션 데이터
  const sections = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap(page => page.sections || []);
  }, [data]);

  // 무한 스크롤 트리거
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // 이전 섹션까지의 파트 개수 누적
  const previousPartsCounts = useMemo(() => {
    if (!sections || sections.length === 0) return [];
    const counts: number[] = [];
    let sum = 0;
    sections.forEach(section => {
      if (section?.parts) {
        counts.push(sum);
        sum += section.parts.length;
      }
    });
    return counts;
  }, [sections]);

  // 말풍선 상태를 자식에게 전달해 업데이트 받기
  const handleToggleBubble = useCallback((isOpen: boolean) => {
    setIsActiveBubble(isOpen);
  }, []);

  return (
    <>
      <S.UpperBackgroundImg />
      <S.EntireSectionContainer $isActiveBubble={isActiveBubble}>
        <S.QuizTutorialLinkWrapper>
          <Link to="/quiz/tutorial">퀴즈 튜토리얼</Link>
        </S.QuizTutorialLinkWrapper>

        {sections.map((section, sectionIndex) => (
          <S.SectionWrapper
            key={section?.id || sectionIndex}
            id={`section-${section?.id}`}
          >
            <S.SectionTitle>{section.name}</S.SectionTitle>
            <S.ButtonGrid>
              {section.parts.map((part, partIndex) => {
                const globalIndex =
                  (previousPartsCounts[sectionIndex] ?? 0) + partIndex;
                const isLastButton = partIndex === section.parts.length - 1;

                return (
                  <PartItem
                    key={part.id}
                    part={part}
                    globalIndex={globalIndex}
                    isLastButton={isLastButton}
                    onToggleBubble={handleToggleBubble}
                    onFetchProgress={onFetchProgress}
                  />
                );
              })}
            </S.ButtonGrid>
          </S.SectionWrapper>
        ))}

        {isFetchingNextPage && (
          <S.EntireSectionContainer>
            <S.LoadingSpinnerWrapper>
              <LoadingSpinner />
            </S.LoadingSpinnerWrapper>
          </S.EntireSectionContainer>
        )}

        <S.IntersectionTarget ref={ref} />
      </S.EntireSectionContainer>
    </>
  );
}
