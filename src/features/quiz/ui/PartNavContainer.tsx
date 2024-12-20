import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UpperBackgroundImg,
  EntireSectionContainer,
  SectionWrapper,
  SectionTitle,
  ButtonGrid,
  KeyboardButton,
} from './styles';
import getPartGridPosition from '../../learn/service/getPartGridPosition';
import { getImageUrl } from '@utils/getImageUrl';

interface Part {
  id: number;
  sectionId: number;
  name: string;
  state?: string;
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
      { id: 1, sectionId: 1, name: 'var', state: 'start' },
      { id: 2, sectionId: 1, name: 'let' },
      { id: 3, sectionId: 1, name: 'const' },
    ],
  },
  {
    id: 2,
    name: '자료형',
    part: [
      { id: 4, sectionId: 2, name: 'string', state: 'pending' },
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
  const navigate = useNavigate();

  // 모든 섹션의 이전 버튼 수 누적 계산
  const previousPartsCounts = useMemo(() => {
    const counts: number[] = []; // 누적 버튼 수를 저장할 배열
    let sum = 0; // 누적합을 저장할 변수

    dummyData.forEach(section => {
      counts.push(sum); // 현재까지의 누적합을 counts에 추가
      sum += section.part.length; // 현재 섹션의 버튼 개수를 누적합에 더함
    });

    return counts;
  }, []);

  // 섹션 및 파트를 캐싱하여 렌더링
  const memoItem = useMemo(() => {
    return dummyData.map((section, sectionIndex) => {
      const previousPartsCount = previousPartsCounts[sectionIndex];

      return (
        <SectionWrapper key={section.id}>
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
    });
  }, [previousPartsCounts]);

  return (
    <>
      <UpperBackgroundImg />
      <EntireSectionContainer>{memoItem}</EntireSectionContainer>
    </>
  );
}
