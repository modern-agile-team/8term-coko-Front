import * as S from './styles';
import { useState, useCallback, useMemo, useRef } from 'react';
import NavigationControl from './NavigationControl';
import SectionNavigateContainer from './SectionNavigateContainer';
import { MAX_ATTEMPTS } from '@features/learn/constants';
import { useSectionListQuery } from '@features/learn/queries';
import { useMediaQuery } from '@modern-kit/react';
import { MEDIA_QUERY_MAP } from '@style/constants';
import { LEARN_TUTORIAL_SECTIONS } from '@features/intro/constants';
import type { Section } from '@features/learn/types';
import { useTimeout, useScrollTo } from '@modern-kit/react';

interface SelectSectionProps {
  isTutorial?: boolean;
  sections?: Section[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export default function SelectSection({
  isTutorial = false,
  sections: paginatedSections = [],
  fetchNextPage,
  hasNextPage,
}: SelectSectionProps) {
  const { data: apiSections = [] } =
    useSectionListQuery.getAllSectionsWithoutParts();

  const sectionsWithoutParts = isTutorial
    ? LEARN_TUTORIAL_SECTIONS
    : apiSections ?? [];

  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useMediaQuery(MEDIA_QUERY_MAP.mobile);
  const itemsPerPage = isMobile ? 3 : 5;

  // sectionsWithoutParts(파트X)와 paginatedSections(파트O)를 병합 (중복 제거)
  const sectionMap = new Map();
  [...sectionsWithoutParts, ...paginatedSections].forEach(section =>
    sectionMap.set(section.id, section)
  );
  const mergedSections = Array.from(sectionMap.values());

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(mergedSections.length / itemsPerPage);

  // 현재 페이지에 보여줄 섹션 리스트 계산
  const currentSections = useMemo(
    () =>
      mergedSections.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      ),
    [currentPage, mergedSections, itemsPerPage]
  );

  const goToPreviousPage = () => {
    if (currentPage > 0) setCurrentPage(prev => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(prev => prev + 1);
  };

  const { set: retryScroll } = useTimeout(() => {
    if (lastRequestedSectionId.current !== null) {
      scrollToSection(lastRequestedSectionId.current, lastAttempt.current + 1);
    }
  }, 100);

  const { scrollToElement } = useScrollTo();
  // 마지막 요청된 섹션 ID와 시도 횟수 추적
  const lastRequestedSectionId = useRef<number | null>(null);
  const lastAttempt = useRef(0);

  const scrollToSection = useCallback(
    (sectionId: number, attempts = 0) => {
      if (attempts >= MAX_ATTEMPTS) return;

      const targetSection = document.getElementById(`section-${sectionId}`);

      if (targetSection) {
        scrollToElement(targetSection, { offsetY: -100, behavior: 'smooth' });
      } else if (hasNextPage) {
        lastRequestedSectionId.current = sectionId;
        lastAttempt.current = attempts;

        // fetchNextPage가 완료될 때까지 기다리도록 변경 (중복 요청 방지)
        fetchNextPage();
        retryScroll();
      }
    },
    [fetchNextPage, hasNextPage, retryScroll, scrollToElement]
  );

  return (
    <S.SectionBoxWrapper>
      <NavigationControl
        direction="left"
        isHidden={currentPage === 0}
        onClick={goToPreviousPage}
        compassText="W"
      />
      <S.SelectSectionBox>
        <SectionNavigateContainer
          sections={currentSections}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          scrollToSection={scrollToSection}
        />
      </S.SelectSectionBox>
      <NavigationControl
        direction="right"
        isHidden={currentPage === totalPages - 1}
        onClick={goToNextPage}
        compassText="E"
      />
    </S.SectionBoxWrapper>
  );
}
