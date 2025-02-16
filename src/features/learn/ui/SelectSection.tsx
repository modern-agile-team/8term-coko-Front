import * as S from './styles';
import { useState, useMemo } from 'react';
import NavigationControl from './NavigationControl';
import SectionNavigateContainer from './SectionNavigateContainer';
import { useSectionListQuery } from '@features/learn/queries';
import { useMediaQuery } from '@modern-kit/react';
import { mediaQueryMap } from '@style/mediaQueryMap';
import { LEARN_TUTORIAL_SECTIONS } from '@features/intro/constants';

interface SelectSectionProps {
  isTutorial?: boolean;
}

export default function SelectSection({
  isTutorial = false,
}: SelectSectionProps) {
  const { data: apiSections } =
    useSectionListQuery.getAllSectionsWithoutParts();

  const sectionList = isTutorial ? LEARN_TUTORIAL_SECTIONS : apiSections ?? [];

  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useMediaQuery(mediaQueryMap.mobile);
  const itemsPerPage = isMobile ? 3 : 5;

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
