// @features/learn/ui/PartNavContainer.tsx
import * as S from '@features/learn/ui/styles';
import PartItem from '@features/learn/ui/PartItem';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '@common/layout/styles';
import type { Section, Part } from '@features/learn/types';

interface PartNavContainerProps {
  sections: Section[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  onFetchProgress: (partId?: Part['id'], sectionId?: Section['id']) => void;
}

export default function PartNavContainer({
  sections,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  onFetchProgress,
}: PartNavContainerProps) {
  const [isActiveBubble, setIsActiveBubble] = useState(false);

  // 스크롤 감지를 위한 Intersection Observer
  const { ref, inView } = useInView({ threshold: 0 });

  // 무한 스크롤 트리거
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // 글로벌 인덱스 계산 (섹션별 parts 개수 누적)
  const previousPartsCounts = useMemo(() => {
    if (!sections) return [];
    const counts: number[] = [];
    let sum = 0;
    sections.forEach(section => {
      if (section.parts) {
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
