import { EmphasizedItemDiv } from '@/features/tutorial/ui/styles';
import useOutsideClick from '@/hooks/useOutsideClick';
import { getImageUrl } from '@/utils/getImageUrl';
import { useRef } from 'react';

interface EmphasizedItemProps {
  onNext: () => void;
  description: string;
}

export default function EmphasizedItem({
  onNext,
  description,
}: EmphasizedItemProps) {
  const EmphasizedItemRef = useOutsideClick(onNext);

  return (
    <>
      <div ref={EmphasizedItemRef}>
        <EmphasizedItemDiv>{description}</EmphasizedItemDiv>
        <img src={getImageUrl('튜토리얼.svg')} />
      </div>
    </>
  );
}
