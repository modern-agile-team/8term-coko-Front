import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import type { Section } from '@features/learn/types';

export default function SectionNavigateContainer({
  sections,
  currentPage,
  itemsPerPage,
}: {
  sections: Section[];
  currentPage: number;
  itemsPerPage: number;
}) {
  const scrollToSection = (sectionId: number) => {
    const targetSection = document.getElementById(`section-${sectionId}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
