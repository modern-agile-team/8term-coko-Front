import {
  UpperBackgroundImg,
  EntireSectionContainer,
  SectionWrapper,
  SectionTitle,
  ButtonGrid,
  KeyboardButtonWrapper,
  KeyboardButton,
  SpeechBubble,
  GoToQuizButton,
} from './styles.ts';
import { getImageUrl } from '@utils/getImageUrl';
import getPartGridPosition from '@features/learn/service/getPartGridPosition';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import usePopover from '@hooks/usePopover';
import type { Section } from '@/features/learn/types.ts';

interface PartNavContainerProps {
  section?: Section;
  previousPartsCounts: number[];
}

export default function PartNavContainer({
  section,
  previousPartsCounts,
}: PartNavContainerProps) {
  const navigate = useNavigate();

  if (!section) return <div>데이터가 없습니다.</div>;

  // 이전 섹션들에서 포함된 파트의 총 개수. 현재 섹션의 파트의 전역 인덱스(globalIndex)를 계산
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

              const keyboardButtonWrapperRef = useRef<HTMLDivElement>(null);
              const { isOpen, togglePopover, popoverRef } = usePopover({
                excludeRefs: [keyboardButtonWrapperRef],
              });

              const buttonImage = getImageUrl(
                isOpen
                  ? `키캡${(globalIndex % 4) + 1}-선택.svg`
                  : `키캡${(globalIndex % 4) + 1}.svg`
              );

              return (
                <KeyboardButtonWrapper
                  key={part.id}
                  ref={keyboardButtonWrapperRef}
                  style={{
                    gridColumn,
                    gridRow,
                  }}
                >
                  {/* KeyboardButton 클릭 시 팝오버(말풍선) 열림/닫힘 */}
                  <KeyboardButton
                    onClick={() => {
                      togglePopover(); 
                    }}
                  >
                    <img src={buttonImage} alt={`키캡 ${part.name}`} />
                  </KeyboardButton>

                  {/* 말풍선 */}
                  {isOpen && (
                    <SpeechBubble
                      ref={popoverRef}
                      onClick={e => e.stopPropagation()}
                    >
                      {part.name}
                      <GoToQuizButton
                        onClick={() => {
                          navigate('/quiz', {
                            state: { partId: part.id, status: part.partStatus },
                          });
                        }}
                      >
                        시작
                      </GoToQuizButton>
                    </SpeechBubble>
                  )}
                </KeyboardButtonWrapper>
              );
            })}
          </ButtonGrid>
        </SectionWrapper>
      </EntireSectionContainer>
    </>
  );
}
