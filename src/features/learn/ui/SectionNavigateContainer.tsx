import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import { useElementRect } from '@/features/intro/service/hooks';
import type { Section } from '@features/learn/types';

interface SectionNavigateContainerProps {
  sections: Section[];
  currentPage: number;
  itemsPerPage: number;
  scrollToSection: (sectionId: number) => void;
}

export default function SectionNavigateContainer({
  sections,
  currentPage,
  itemsPerPage,
  scrollToSection,
}: SectionNavigateContainerProps) {
  const { getClientRectRefCallback } = useElementRect();

  return (
    <>
      <S.SelectSectionImage
        src={getImageUrl('섹션-선택-섬.svg')}
        alt="섹션 선택 배경"
      />
      <S.SectionButtonContainer>
        {sections.map((section, index) => {
          const globalIndex = currentPage * itemsPerPage + index;
          return (
            <S.SectionButton
              id="select-section-button"
              ref={index === 0 ? getClientRectRefCallback : null}
              key={section.id}
              onClick={() => scrollToSection(section.id)}
            >
              <img
                src={getImageUrl(`섬${(globalIndex % 5) + 1}.svg`)}
                alt={`${section.name} 섹션 이미지`}
              />
              <span>{section.name}</span>
            </S.SectionButton>
          );
        })}
      </S.SectionButtonContainer>
    </>
  );
}
