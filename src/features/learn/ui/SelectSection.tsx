import * as S from './styles';
import { useState, useMemo } from 'react';
import NavigationControl from './NavigationControl';
import SectionNavigateContainer from './SectionNavigateContainer';
import { sectionsQuery } from '@features/learn/queries';
import type { Section } from '@features/learn/types';

export default function SelectSection() {
  const { data: sections } = sectionsQuery.getAll();
  const [currentPage, setCurrentPage] = useState(0);

  const sectionList = (sections as Section[]) || []; // 섹션 데이터를 Section 타입 배열로 변환 (섹션 리스트)
  const ITEMS_PER_PAGE = 5; // 페이지당 항목(섹션) 수

  // 전체 페이지 수 계산 (한 페이지당 5개의 섹션)
  const totalPages = useMemo(
    () => Math.ceil(sectionList.length / ITEMS_PER_PAGE),
    [sectionList]
  );

  // 현재 페이지에 보여줄 섹션 리스트 계산
  const currentSections = useMemo(
    () =>
      sectionList.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
      ),
    [currentPage, sectionList]
  );

  const goToPreviousPage = () => {
    if (currentPage > 0) setCurrentPage(prev => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(prev => prev + 1);
  };

  return (
    <S.SectionBoxWrapper>
      <NavigationControl
        direction="left"
        isHidden={currentPage === 0}
        onClick={goToPreviousPage}
        compassText="W"
      />
      <S.SelectSectionBox>
        <SectionNavigateContainer sections={currentSections} />
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
