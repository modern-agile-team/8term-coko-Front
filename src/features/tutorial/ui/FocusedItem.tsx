import { OverRayDiv } from '@/common/layout/style';
import { calculatePosition } from '@/features/tutorial/service/utils';
import { PopupPosition } from '@/features/tutorial/types';
import {
  TutorialPopupWrapper,
  FocusedItemDiv,
} from '@/features/tutorial/ui/styles';
import useOutsideClick from '@/hooks/useOutsideClick';
import ModalPortal from '@/ModalPortal';
import { getImageUrl } from '@/utils/getImageUrl';
import { useEffect } from 'react';

interface FocusedItemProps {
  id: string;
  onNext: () => void;
  description: string;
  popupPosition?: PopupPosition;
}

export default function FocusedItem({
  onNext,
  id,
  description,
}: FocusedItemProps) {
  const FocusedItemRef = useOutsideClick(onNext);
  const rect = calculatePosition(id);

  const computedStyle = rect
    ? {
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        top: `${rect.top}px`,
        left: `${rect.left}px`,
      }
    : undefined;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    (document.activeElement as HTMLElement).blur();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <ModalPortal>
        <TutorialPopupWrapper ref={FocusedItemRef} $popupPosition={rect}>
          <p>{description}</p>
          <img src={getImageUrl('튜토리얼.svg')} />
        </TutorialPopupWrapper>

        <OverRayDiv
          $backgroundColor="rgba(0, 0, 0, 0.7)"
          $mixBlendMode=" hard-light"
        >
          <FocusedItemDiv style={computedStyle} />
        </OverRayDiv>
      </ModalPortal>
    </>
  );
}
