import {
  TutorialOverRayDiv,
  EmphasizedItemDiv,
} from '@/features/tutorial/ui/styles';
import useOutsideClick from '@/hooks/useOutsideClick';
import { getImageUrl } from '@/utils/getImageUrl';
import { CSSProperties } from 'react';

interface EmphasizedItemProps {
  onNext: () => void;
  description: string;
  style: CSSProperties;
}

export default function EmphasizedItem({
  onNext,
  description,
  style,
}: EmphasizedItemProps) {
  const EmphasizedItemRef = useOutsideClick(onNext);

  return (
    <>
      <EmphasizedItemDiv ref={EmphasizedItemRef} style={style}>
        <TutorialOverRayDiv />
        <p>{description}</p>
        <img src={getImageUrl('튜토리얼.svg')} />
      </EmphasizedItemDiv>
    </>
  );
}
