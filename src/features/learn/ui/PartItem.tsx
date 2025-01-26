import * as S from '@features/learn/ui/styles';
import { useRef, useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import usePopover from '@hooks/usePopover';
import getPartGridPosition from '@features/learn/service/getPartGridPosition';
import { getImageUrl } from '@utils/getImageUrl';
import { COLORS } from '@features/learn/constants';
import type { Part } from '@features/learn/types';

interface PartItemProps {
  part: Part;
  globalIndex: number;
  isLastButton: boolean;
  onToggleBubble: (isOpen: boolean) => void;
}

export default memo(function PartItem({
  part,
  globalIndex,
  isLastButton,
  onToggleBubble,
}: PartItemProps) {
  const navigate = useNavigate();
  const isLocked = part.status === 'LOCKED';

  const keyboardButtonWrapperRef = useRef<HTMLDivElement>(null);
  const { isOpen, togglePopover, popoverRef } = usePopover({
    excludeRefs: [keyboardButtonWrapperRef],
  });

  // 마지막 버튼인 경우, 팝오버(말풍선) 열림/닫힘 상태가 바뀔 때만 상위에 전달
  useEffect(() => {
    if (isLastButton) {
      onToggleBubble(isOpen);
    }
  }, [isOpen, isLastButton, onToggleBubble]);

  // KeyboardButton 클릭 시 팝오버 토글 (부모에 중복 전달 X)
  const handleButtonClick = () => {
    if (!isLocked) {
      togglePopover();
    }
  };

  const buttonImage = getImageUrl(
    isOpen
      ? `키캡${(globalIndex % 4) + 1}-선택.svg`
      : `키캡${(globalIndex % 4) + 1}.svg`
  );

  const { gridColumn, gridRow } = getPartGridPosition(globalIndex);

  return (
    <S.KeyboardButtonWrapper
      ref={keyboardButtonWrapperRef}
      style={{ gridColumn, gridRow }}
    >
      {isOpen && (
        <S.SittingCoko src={getImageUrl('앉은-코코.svg')} alt="앉은 코코" />
      )}

      <S.KeyboardButton
        onClick={handleButtonClick}
        $isLocked={isLocked}
        disabled={isLocked}
      >
        <img src={buttonImage} alt={`키캡 ${part.name}`} />
      </S.KeyboardButton>

      {isOpen && (
        <S.SpeechBubble
          ref={popoverRef}
          onClick={e => e.stopPropagation()}
          $bgColor={COLORS[(globalIndex % 4) + 1]}
        >
          <h3>{part.name}</h3>
          <S.GoToQuizButton
            onClick={() => {
              navigate('/quiz', {
                state: { partId: part.id, status: part.status },
              });
            }}
            $fontColor={COLORS[(globalIndex % 4) + 1]}
          >
            시작
          </S.GoToQuizButton>
        </S.SpeechBubble>
      )}
    </S.KeyboardButtonWrapper>
  );
});
