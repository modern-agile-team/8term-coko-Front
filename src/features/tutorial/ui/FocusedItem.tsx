import { OverRayDiv } from '@/common/layout/styles';
import { PopupPosition } from '@/features/tutorial/types';
import {
  TutorialPopupWrapper,
  FocusedItemDiv,
} from '@/features/tutorial/ui/styles';
import useOutsideClick from '@/hooks/useOutsideClick';
import ModalPortal from '@/ModalPortal';
import { getImageUrl } from '@/utils/getImageUrl';
import { useRectStore } from './../../../store/useRectStore';

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
  const { getRectById } = useRectStore();
  const FocusedItemRef = useOutsideClick(onNext);
  const rect = getRectById(id);
  const computedStyle = rect
    ? {
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        top: `${rect.top}px`,
        left: `${rect.left}px`,
      }
    : undefined;

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
