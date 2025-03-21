import * as S from '@features/learn/ui/styles';
import toast from 'react-hot-toast';
import { useRef, useEffect, useCallback, memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useElementRect } from '@/features/intro/service/hooks';
import usePopover from '@hooks/usePopover';
import getPartGridPosition from '@features/learn/service/getPartGridPosition';
import { getImageUrl } from '@utils/getImageUrl';
import { COLORS } from '@features/learn/constants';
import { LEARN_TUTORIAL_POPOVER_STEPS } from '@features/intro/constants';
import type { Part, Section } from '@features/learn/types';

interface PartItemProps {
  part: Part;
  globalIndex: number;
  isLastButton: boolean;
  tutorialStep?: string;
  onToggleBubble: (isOpen: boolean) => void;
  onFetchProgress: (partId?: Part['id'], sectionId?: Section['id']) => void;
}

function PartItem({
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
    if (
      tutorialStep &&
      LEARN_TUTORIAL_POPOVER_STEPS.has(tutorialStep) &&
      globalIndex === 0
    ) {
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

  const handleGoToQuiz = () => {
    const isLearnTutorial = location.pathname === '/learn/tutorial';

    if (isLearnTutorial && part.name !== '튜토리얼!') {
      toast.error(`'튜토리얼!' 파트를 풀어보세요!`);
      return;
    }

    const targetPath = getQuizPath(location.pathname);
    navigate(targetPath, {
      state: { partId: part.id, partStatus: part.status },
    });
  };

  const { gridColumn, gridRow } = getPartGridPosition(globalIndex);

  const { getClientRectRefCallback } = useElementRect();

  const quizPopoverCallbackRef = useCallback((el: HTMLDivElement) => {
    if (globalIndex === 0) {
      getClientRectRefCallback<HTMLDivElement>(el);
    }
    popoverRef.current = el;
  }, []);

  const getKeyboardButtonId = () => {
    if (globalIndex === 1 && isLocked) return 'locked-keycap-button';
    if (globalIndex === 0) return 'keycap-button';
    return undefined;
  };

  const getKeyboardButtonRef = () => {
    if (globalIndex === 1 && isLocked) return getClientRectRefCallback;
    if (globalIndex === 0) return getClientRectRefCallback;
    return null;
  };

  return (
    <S.KeyboardButtonWrapper
      ref={keyboardButtonWrapperRef}
      style={{ gridColumn, gridRow }}
    >
      {isOpen && (
        <S.SittingCoko src={getImageUrl('앉은-코코.svg')} alt="앉은 코코" />
      )}

      <S.KeyboardButton
        id={getKeyboardButtonId()}
        ref={getKeyboardButtonRef()}
        onClick={handleButtonClick}
        $isLocked={isLocked}
        disabled={isLocked}
      >
        <img src={buttonImage} alt={`키캡 ${part.name}`} />
      </S.KeyboardButton>

      {isOpen && (
        <S.SpeechBubble
          id="quiz-popover"
          ref={quizPopoverCallbackRef}
          onClick={e => e.stopPropagation()}
          $bgColor={COLORS[globalIndex % 4]}
        >
          <h3>{part.name}</h3>
          <S.GoToQuizButton
            onClick={handleGoToQuiz}
            $fontColor={COLORS[globalIndex % 4]}
          >
            시작
          </S.GoToQuizButton>
        </S.SpeechBubble>
      )}
    </S.KeyboardButtonWrapper>
  );
}

export default memo(PartItem);
