import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import type { Section } from '@features/learn/types';

export default function SectionNavigateContainer({
  sections,
}: {
  sections: Section[];
}) {
  const scrollToSection = (sectionId: number) => {
    const targetSection = document.getElementById(`section-${sectionId}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {sections.map((section, index) => (
        <S.SectionButton
          key={section.id}
          $backgroundImage={getImageUrl(`섬${(index % 5) + 1}.svg`)}
          onClick={() => scrollToSection(section.id)}
        >
          {section.name}
        </S.SectionButton>
      ))}
    </>
  );
}
