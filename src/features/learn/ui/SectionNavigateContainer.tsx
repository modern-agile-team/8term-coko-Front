import * as S from './styles';
import { getImageUrl } from '@utils/getImageUrl';
import { sectionsQuery } from '@features/learn/queries';

export default function SectionNavigateContainer() {
  const { data: sections, isLoading, error } = sectionsQuery.getAll();

  const scrollToSection = (sectionId: number) => {
    const targetSection = document.getElementById(`section-${sectionId}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>섹션 데이터를 가져오는데 실패했습니다.</div>;

  return (
    <>
      {sections?.map((section, index) => (
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
