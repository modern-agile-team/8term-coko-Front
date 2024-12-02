import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UpperBackgroundImg,
  EntireSectionContainer,
  SectionWrapper,
  SectionTitle,
  ButtonGrid,
  KeyboardButton,
} from '../styles';
import getPartGridPosition from '../../learn/service/getPartGridPosition';
import { getImageUrl } from '@utils/getImageUrl';

interface Part {
  id: number;
  sectionId: number;
  name: string;
}

interface Section {
  id: number;
  name: string;
  part: Part[];
}

const dummyData: Section[] = [
  {
    id: 1,
    name: '변수',
    part: [
      { id: 1, sectionId: 1, name: 'var' },
      { id: 2, sectionId: 1, name: 'let' },
      { id: 3, sectionId: 1, name: 'const' },
    ],
  },
  {
    id: 2,
    name: '자료형',
    part: [
      { id: 4, sectionId: 2, name: 'string' },
      { id: 5, sectionId: 2, name: 'number' },
      { id: 6, sectionId: 2, name: 'boolean' },
      { id: 7, sectionId: 2, name: 'null' },
    ],
  },
  {
    id: 3,
    name: '형변환',
    part: [
      { id: 8, sectionId: 2, name: 'Number()' },
      { id: 9, sectionId: 2, name: 'String()' },
      { id: 10, sectionId: 2, name: 'asd()' },
      { id: 11, sectionId: 2, name: 'fasfsaf()' },
      { id: 12, sectionId: 2, name: 'asfasfa()' },
      { id: 13, sectionId: 2, name: 'asdasddas()' },
      { id: 14, sectionId: 2, name: 'ffff()' },
      { id: 15, sectionId: 2, name: 'cxx()' },
      { id: 16, sectionId: 2, name: 'asdasd()' },
    ],
  },
];

export default function PartNavContainer() {
  const [sections, setSections] = useState<Section[]>(dummyData);
  const navigate = useNavigate();

  return (
    <>
      <UpperBackgroundImg />
      <EntireSectionContainer>
        {sections.map((section, sectionIndex) => {
          // 각 섹션 앞의 버튼 수 합산
          const previousPartsCount = sections
            .slice(0, sectionIndex)
            .reduce(
              (sum, currentSection) => sum + currentSection.part.length,
              0
            );

          return (
            <SectionWrapper key={section.id}>
              <SectionTitle>{section.name}</SectionTitle>
              <ButtonGrid>
                {section.part.map((part, partIndex) => {
                  // 전역 인덱스 계산
                  const globalIndex = previousPartsCount + partIndex;

                  const { gridColumn, gridRow } =
                    getPartGridPosition(globalIndex);
                  const buttonImage = getImageUrl(
                    `키캡${(globalIndex % 4) + 1}.svg`
                  );

                  return (
                    <KeyboardButton
                      key={part.id}
                      style={{ gridColumn, gridRow }}
                      onClick={() => navigate('/quiz', { state: part })}
                    >
                      <img src={buttonImage} alt={`키캡 ${part.name}`} />
                    </KeyboardButton>
                  );
                })}
              </ButtonGrid>
            </SectionWrapper>
          );
        })}
      </EntireSectionContainer>
    </>
  );
}
