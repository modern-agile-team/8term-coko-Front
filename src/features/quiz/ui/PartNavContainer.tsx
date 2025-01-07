import {
  EntireSectionContainer,
  SectionWrapper,
  SectionTitle,
  ButtonGrid,
  KeyboardButton,
  UpperBackgroundImg,
} from './styles.ts';
import { getImageUrl } from '@utils/getImageUrl';
import getPartGridPosition from '@features/learn/service/getPartGridPosition';
import { useNavigate } from 'react-router-dom';
import type { Section } from '@/features/learn/types.ts';
import { AxiosError } from 'axios';

interface PartNavContainerProps {
  section?: Section;
  previousPartsCounts: number[];
  isLoading: boolean;
  error: AxiosError;
}

export default function PartNavContainer({
  section,
  previousPartsCounts,
  isLoading,
  error,
}: PartNavContainerProps) {
  const navigate = useNavigate();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>섹션 데이터를 가져오는데 실패했습니다.</div>;
  if (!section) return <div>데이터가 없습니다.</div>;

  const previousPartsCount = previousPartsCounts[0];

  return (
    <>
      <UpperBackgroundImg />
      <EntireSectionContainer>
        <SectionWrapper id={`section-${section.id}`} key={section.id}>
          <SectionTitle>{section.name}</SectionTitle>
          <ButtonGrid>
            {section.part.map((part, partIndex) => {
              const globalIndex = previousPartsCount + partIndex;
              const { gridColumn, gridRow } = getPartGridPosition(globalIndex);
              const buttonImage = getImageUrl(
                `키캡${(globalIndex % 4) + 1}.svg`
              );

              return (
                <KeyboardButton
                  key={part.id}
                  style={{ gridColumn, gridRow }}
                  onClick={() =>
                    navigate('/quiz', {
                      state: { partId: part.id, status: part.partStatus },
                    })
                  }
                >
                  {part.name}
                  <img src={buttonImage} alt={`키캡 ${part.name}`} />
                </KeyboardButton>
              );
            })}
          </ButtonGrid>
        </SectionWrapper>
      </EntireSectionContainer>
    </>
  );
}
