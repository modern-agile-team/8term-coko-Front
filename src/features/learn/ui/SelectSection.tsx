import * as S from './styles';
import SectionNavigateContainer from './SectionNavigateContainer';
import { getImageUrl } from '@utils/getImageUrl';
import { useState } from 'react';
import { sectionsQuery } from '@features/learn/queries';
import type { Section } from '@features/learn/types';

export default function SelectSection() {
  const { data: sections, isLoading, error } = sectionsQuery.getAll();
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 5;

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>섹션 데이터를 가져오는데 실패했습니다.</div>;

  const sectionList = sections as Section[];
  const totalPages = Math.ceil(sectionList.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentSections = sectionList.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (direction: 'left' | 'right') => {
    setCurrentPage(prevPage => {
      if (direction === 'left') {
        return prevPage > 0 ? prevPage - 1 : prevPage;
      } else {
        return prevPage < totalPages - 1 ? prevPage + 1 : prevPage;
      }
    });
  };

  return (
    <S.SectionBoxWrapper>
      {/* 왼쪽 화살표 및 텍스트 */}
      <S.ArrowButton
        $isHidden={currentPage === 0}
        onClick={() => handlePageChange('left')}
      >
        <img src={getImageUrl('왼쪽-화살표.svg')} alt="left arrow" />
      </S.ArrowButton>
      <S.CompassText $isHidden={currentPage === 0}>W</S.CompassText>

      <S.SelectSectionBox>
        <SectionNavigateContainer sections={currentSections} />
      </S.SelectSectionBox>

      {/* 오른쪽 화살표 및 텍스트 */}
      <S.CompassText $isHidden={currentPage === totalPages - 1}>
        E
      </S.CompassText>
      <S.ArrowButton
        $isHidden={currentPage === totalPages - 1}
        onClick={() => handlePageChange('right')}
      >
        <img src={getImageUrl('오른쪽-화살표.svg')} alt="right arrow" />
      </S.ArrowButton>
    </S.SectionBoxWrapper>
  );
}
