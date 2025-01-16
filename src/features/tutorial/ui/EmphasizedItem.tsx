import { calculatePosition } from '@/features/tutorial/service/utils';
import { EmphasizedItemDiv } from '@/features/tutorial/ui/styles';
import useOutsideClick from '@/hooks/useOutsideClick';
import { CSSProperties } from 'react';

type EmphasizedItemBaseProps = {
  onNext: () => void;
  description: string;
};

type EmphasizedItemProps =
  | (EmphasizedItemBaseProps & { id: string; style?: never })
  | (EmphasizedItemBaseProps & { id?: never; style: CSSProperties });

export default function EmphasizedItem({
  onNext,
  id,
  style,
}: EmphasizedItemProps) {
  const EmphasizedItemRef = useOutsideClick(onNext);
  const computedStyle = id ? calculatePosition(id) : style;

  return (
    <>
      <EmphasizedItemDiv
        ref={EmphasizedItemRef}
        style={computedStyle ?? {}}
      ></EmphasizedItemDiv>
    </>
  );
}
