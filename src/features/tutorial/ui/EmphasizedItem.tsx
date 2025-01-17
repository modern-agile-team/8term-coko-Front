import { calculatePosition } from '@/features/tutorial/service/utils';
import { PopupPosition } from '@/features/tutorial/types';
import {
  EmphasizedItemDiv,
  TutorialPopupWrapper,
  TutorialOverRayDiv,
} from '@/features/tutorial/ui/styles';
import useOutsideClick from '@/hooks/useOutsideClick';
import { getImageUrl } from '@/utils/getImageUrl';

interface EmphasizedItemProps {
  id: string;
  onNext: () => void;
  description: string;
  popupPosition?: PopupPosition;
}

export default function EmphasizedItem({
  onNext,
  id,
  description,
}: EmphasizedItemProps) {
  const EmphasizedItemRef = useOutsideClick(onNext);
  const rect = calculatePosition(id);

  const computedStyle = {
    width: `${rect?.width}px`,
    height: `${rect?.height}px`,
    top: `${rect?.top}px`,
    left: `${rect?.left}px`,
  };

  return (
    <>
      <TutorialPopupWrapper ref={EmphasizedItemRef} $popupPosition={rect}>
        <p>{description}</p>
        <img src={getImageUrl('튜토리얼.svg')} />
      </TutorialPopupWrapper>
      <TutorialOverRayDiv>
        <EmphasizedItemDiv style={computedStyle ?? {}} />
      </TutorialOverRayDiv>
    </>
  );
}
