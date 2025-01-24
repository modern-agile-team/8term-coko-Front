import {
  UpperBackgroundImg,
  EntireSectionContainer,
  SectionWrapper,
  QuizTutorialLinkWrapper,
  SectionTitle,
  ButtonGrid,
  KeyboardButtonWrapper,
  SittingCoko,
  KeyboardButton,
  SpeechBubble,
  GoToQuizButton,
} from './styles.ts';
import { getImageUrl } from '@utils/getImageUrl';
import { COLORS } from '../constants.ts';
import getPartGridPosition from '@features/learn/service/getPartGridPosition';
import { useRef, useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const [isActiveBubble, setIsActiveBubble] = useState(false);

  if (!section) return <div>데이터가 없습니다.</div>;

  // 이전 섹션들에서 포함된 파트의 총 개수. 현재 섹션의 파트의 전역 인덱스(globalIndex)를 계산
  const previousPartsCount = previousPartsCounts[0];

  return (
    <>
      <UpperBackgroundImg />
      <EntireSectionContainer $isActiveBubble={isActiveBubble}>
        <SectionWrapper id={`section-${section.id}`} key={section.id}>
          <SectionTitle>{section.name}</SectionTitle>
          <QuizTutorialLinkWrapper>
            <Link to="/quiz/tutorial">퀴즈 튜토리얼</Link>
          </QuizTutorialLinkWrapper>

          <ButtonGrid>
            {section.parts.map((part, partIndex) => {
              const globalIndex = previousPartsCount + partIndex;
              const { gridColumn, gridRow } = getPartGridPosition(globalIndex);

              // 마지막 버튼인지 확인
              const isLastButton = useMemo(
                () => partIndex === section.parts.length - 1,
                [partIndex, section.parts.length]
              );

              const keyboardButtonWrapperRef = useRef<HTMLDivElement>(null);
              const { isOpen, togglePopover, popoverRef } = usePopover({
                excludeRefs: [keyboardButtonWrapperRef],
              });

              // 마지막 버튼인 경우, isOpen의 상태가 변경될 때만 setIsActiveBubble을 업데이트
              useEffect(() => {
                if (isLastButton) {
                  setIsActiveBubble(prev => (prev !== isOpen ? isOpen : prev));
                }
              }, [isOpen, isLastButton]);

              // 파트가 잠겨있는지 확인
              const isLocked = part.status === 'LOCKED';

              // KeyboardButton 클릭 시 팝오버(말풍선) 열림/닫힘
              const handleButtonClick = () => {
                if (!isLocked) {
                  togglePopover();
                  if (isLastButton) {
                    setIsActiveBubble(prev => !prev);
                  }
                }
              };

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
                  {isOpen && (
                    <SittingCoko
                      src={getImageUrl('앉은-코코.svg')}
                      alt="앉은 코코"
                    />
                  )}
                  {/* 파트가 잠겨있지 않은 경우에만 키보드 버튼을 클릭할 수 있도록 함 */}
                  <KeyboardButton
                    onClick={handleButtonClick}
                    $isLocked={isLocked}
                    disabled={isLocked}
                  >
                    <img src={buttonImage} alt={`키캡 ${part.name}`} />
                  </KeyboardButton>

                  {/* 말풍선 */}
                  {isOpen && (
                    <SpeechBubble
                      ref={popoverRef}
                      onClick={e => e.stopPropagation()}
                      $bgColor={COLORS[(globalIndex % 4) + 1]}
                    >
                      <h3>{part.name}</h3>
                      <GoToQuizButton
                        onClick={() => {
                          navigate('/quiz', {
                            state: { partId: part.id, status: part.status },
                          });
                        }}
                        $fontColor={COLORS[(globalIndex % 4) + 1]}
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
