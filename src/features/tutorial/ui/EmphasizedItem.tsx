import {
  TutorialOverRayDiv,
  EmphasizedItemDiv,
} from '@/features/tutorial/ui/styles';
import useOutsideClick from '@/hooks/useOutsideClick';
import { CSSProperties } from 'react';

interface EmphasizedItemProps {
  onNext: () => void;
  description: string;
  style: CSSProperties;
}

export default function EmphasizedItem({ onNext, style }: EmphasizedItemProps) {
  const EmphasizedItemRef = useOutsideClick(onNext);

  return (
    <>
      <EmphasizedItemDiv
        ref={EmphasizedItemRef}
        style={style}
      ></EmphasizedItemDiv>
    </>
  );
}
