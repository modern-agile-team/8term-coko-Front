import OverRay from '@common/layout/OverRay';
import { PopupPosition } from '@features/intro/types';
import {
  TutorialPopupWrapper,
  FocusedItemDiv,
} from '@features/intro/ui/styles';
import { markersMap } from '@features/intro/constants';
import useOutsideClick from '@hooks/useOutsideClick';
import ModalPortal from '@/ModalPortal';
import { getImageUrl } from '@utils/getImageUrl';
import { useRectStore } from '@store/useRectStore';
import { objectKeys } from '@modern-kit/utils';

interface FocusedItemProps {
  id: string;
  onNext: () => void;
  description: string;
  popupPosition?: PopupPosition;
}

const markerKeys = objectKeys(markersMap).map(m =>
  m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
);
const pattern = markerKeys.map(m => `${m}.*?${m}`).join('|');
const regex = new RegExp(`(${pattern})`, 'g');

const renderDescription = (text: string) => {
  return text.split(regex).map((part, index) => {
    for (const marker of objectKeys(markersMap)) {
      if (part.startsWith(marker) && part.endsWith(marker)) {
        const Component = markersMap[marker];
        return (
          <Component key={index}>
            {part.slice(marker.length, -marker.length)}
          </Component>
        );
      }
    }
    return part;
  });
};

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
  );
}
