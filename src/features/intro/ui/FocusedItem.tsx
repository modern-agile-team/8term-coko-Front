import OverRay from '@common/layout/OverRay';
import { PopupPosition } from '@features/intro/types';
import {
  HighlightSpan,
  TutorialPopupWrapper,
  FocusedItemDiv,
} from '@features/intro/ui/styles';
import useOutsideClick from '@hooks/useOutsideClick';
import ModalPortal from '@/ModalPortal';
import { getImageUrl } from '@utils/getImageUrl';
import { useRectStore } from '@store/useRectStore';

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

  const renderDescription = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <HighlightSpan key={index}>{part.slice(2, -2)}</HighlightSpan>;
      }
      return part;
    });
  };

  return (
    <>
      <ModalPortal>
        <TutorialPopupWrapper ref={FocusedItemRef} $popupPosition={rect}>
          <p>{renderDescription(description)}</p>
          <img src={getImageUrl('튜토리얼.svg')} />
        </TutorialPopupWrapper>

        <OverRay
          overRayStyle={{
            $backgroundColor: 'rgba(0, 0, 0, 0.7)',
            $mixBlendMode: 'hard-light',
          }}
        >
          <FocusedItemDiv style={computedStyle} />
        </OverRay>
      </ModalPortal>
    </>
  );
}
