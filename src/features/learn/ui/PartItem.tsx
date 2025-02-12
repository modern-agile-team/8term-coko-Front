import * as S from '@features/learn/ui/styles';
import { useRef, useEffect, memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useElementRect } from '@/features/intro/service/hooks';
import usePopover from '@hooks/usePopover';
import getPartGridPosition from '@features/learn/service/getPartGridPosition';
import { getImageUrl } from '@utils/getImageUrl';
import { COLORS } from '@features/learn/constants';
import type { Part, Section } from '@features/learn/types';

interface PartItemProps {
  part: Part;
  globalIndex: number;
  isLastButton: boolean;
  tutorialStep?: string;
  onToggleBubble: (isOpen: boolean) => void;
  onFetchProgress: (partId?: Part['id'], sectionId?: Section['id']) => void;
}

export default memo(function PartItem({
  part,
  globalIndex,
  isLastButton,
  tutorialStep,
  onToggleBubble,
  onFetchProgress,
}: PartItemProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLocked = part.status === 'LOCKED';

  const keyboardButtonWrapperRef = useRef<HTMLDivElement>(null);
  const { isOpen, openPopover, closePopover, togglePopover, popoverRef } =
    usePopover({
      excludeRefs: [keyboardButtonWrapperRef],
    });

  useEffect(() => {
    if (tutorialStep === '퀴즈 팝오버 설명' && globalIndex === 0) {
      openPopover();
    } else {
      closePopover();
    }
  }, [tutorialStep, globalIndex, openPopover, closePopover]);

  // 마지막 버튼인 경우, 팝오버(말풍선) 열림/닫힘 상태가 바뀔 때 상위에 전달
  useEffect(() => {
    if (isLastButton) {
      onToggleBubble(isOpen);
    }
  }, [isOpen, isLastButton, onToggleBubble]);

  useEffect(() => {
    if (isOpen) {
      // 팝오버 열릴 때 해당 파트 정보 전달
      onFetchProgress(part.id, part.sectionId);
    } else {
      // 팝오버 닫힐 때 전체 progress 요청
      onFetchProgress(undefined, undefined);
    }
  }, [isOpen, onFetchProgress, part.id, part.sectionId]);

  // KeyboardButton 클릭 시 팝오버 토글 및 진행도 요청
  const handleButtonClick = () => {
    if (!isLocked) {
      togglePopover();
      // 클릭 시 해당 파트의 진행도 요청
      onFetchProgress(part.id, part.sectionId);
    }
  };

  const buttonImage = getImageUrl(
    isOpen
      ? `키캡${(globalIndex % 4) + 1}-선택.svg`
      : `키캡${(globalIndex % 4) + 1}.svg`
  );

  const getQuizPath = (currentPath: string) => {
    return currentPath === '/learn/tutorial' ? '/quiz/tutorial' : '/quiz';
  };

  const { gridColumn, gridRow } = getPartGridPosition(globalIndex);
  const { getClientRectRefCallback } = useElementRect();

  return (
    <S.KeyboardButtonWrapper
      ref={keyboardButtonWrapperRef}
      style={{ gridColumn, gridRow }}
    >
      {isOpen && (
        <S.SittingCoko src={getImageUrl('앉은-코코.svg')} alt="앉은 코코" />
      )}

      <S.KeyboardButton
        id={
          globalIndex === 1 && isLocked
            ? 'locked-keycap-button'
            : globalIndex === 0
            ? 'keycap-button'
            : undefined
        }
        ref={
          globalIndex === 1 && isLocked
            ? getClientRectRefCallback
            : globalIndex === 0
            ? getClientRectRefCallback
            : null
        }
        onClick={handleButtonClick}
        $isLocked={isLocked}
        disabled={isLocked}
      >
        <img src={buttonImage} alt={`키캡 ${part.name}`} />
      </S.KeyboardButton>

      {isOpen && (
        <S.SpeechBubble
          id="quiz-popover"
          ref={el => {
            if (globalIndex === 0) {
              getClientRectRefCallback(el);
            }
            popoverRef.current = el;
          }}
          onClick={e => e.stopPropagation()}
          $bgColor={COLORS[globalIndex % 4]}
        >
          <h3>{part.name}</h3>
          <S.GoToQuizButton
            onClick={() => {
              const targetPath = getQuizPath(location.pathname);
              navigate(targetPath, {
                state: { partId: part.id, partStatus: part.status },
              });
            }}
            $fontColor={COLORS[globalIndex % 4]}
          >
            시작
          </S.GoToQuizButton>
        </S.SpeechBubble>
      )}
    </S.KeyboardButtonWrapper>
  );
});
