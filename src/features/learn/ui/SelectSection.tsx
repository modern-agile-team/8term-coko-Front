import * as S from './styles';
import { useState, useMemo } from 'react';
import NavigationControl from './NavigationControl';
import SectionNavigateContainer from './SectionNavigateContainer';
import { useSectionListQuery } from '@features/learn/queries';
import { useMediaQuery } from '@modern-kit/react';
import { mediaQueryMap } from '@style/mediaQueryMap';
import type { Section } from '@features/learn/types';

export default function SelectSection() {
  const { data: sections } = useSectionListQuery.getAllSections();
  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useMediaQuery(mediaQueryMap.mobile);
  const itemsPerPage = isMobile ? 3 : 5;
  const sectionList = (sections as Section[]) || []; // 섹션 데이터를 Section 타입 배열로 변환 (섹션 리스트)

  // 전체 페이지 수 계산
  const totalPages = useMemo(
    () => Math.ceil(sectionList.length / itemsPerPage),
    [sectionList, itemsPerPage]
  );

  // 현재 페이지에 보여줄 섹션 리스트 계산
  const currentSections = useMemo(
    () =>
      sectionList.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      ),
    [currentPage, sectionList, itemsPerPage]
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
        <SectionNavigateContainer
          sections={currentSections}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
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
