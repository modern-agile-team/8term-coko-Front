import { useMemo } from 'react';
import SectionsQuery from '@/queries/sectionsQuery';
import getPartGridPosition from '@features/learn/service/getPartGridPosition';
import { getImageUrl } from '@utils/getImageUrl';
import { useNavigate } from 'react-router-dom';
import {
  UpperBackgroundImg,
  EntireSectionContainer,
  SectionWrapper,
  SectionTitle,
  ButtonGrid,
  KeyboardButton,
} from '../styles';

export default function PartNavContainer() {
  const navigate = useNavigate();

  const { data: section, isLoading, error } = SectionsQuery.get(1);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>섹션 데이터를 가져오는데 실패했습니다.</div>;
  }

  if (!section) {
    return <div>데이터가 없습니다.</div>;
  }

  // 모든 섹션의 이전 버튼 수 누적 계산
  const previousPartsCounts = useMemo(() => {
    const counts: number[] = [];
    let sum = 0;

    counts.push(sum);
    sum += section.part.length;

    return counts;
  }, [section]);

  // 섹션 및 파트를 캐싱하여 렌더링
  const memoItem = useMemo(() => {
    const previousPartsCount = previousPartsCounts[0];

    return (
      <SectionWrapper key={section.id}>
        <SectionTitle>{section.name}</SectionTitle>
        <ButtonGrid>
          {section.part.map((part, partIndex) => {
            const globalIndex = previousPartsCount + partIndex;
            const { gridColumn, gridRow } = getPartGridPosition(globalIndex);
            const buttonImage = getImageUrl(`키캡${(globalIndex % 4) + 1}.svg`);

            return (
              <KeyboardButton
                key={part.id}
                style={{ gridColumn, gridRow }}
                onClick={() =>
                  navigate('/quiz', { state: { partId: part.id } })
                }
              >
                <img src={buttonImage} alt={`키캡 ${part.name}`} />
              </KeyboardButton>
            );
          })}
        </ButtonGrid>
      </SectionWrapper>
    );
  }, [section, previousPartsCounts, navigate]);

  return (
    <>
      <UpperBackgroundImg />
      <EntireSectionContainer>{memoItem}</EntireSectionContainer>
    </>
  );
}
