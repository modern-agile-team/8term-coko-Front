import { PropsWithChildren, useEffect } from 'react';
import ModalPortal from '../../ModalPortal';
import { OverRayDiv } from '@/common/layout/styles';

interface ModalProps {
  isShow: boolean;
}

export default function Modal({
  isShow,
  children,
}: PropsWithChildren<ModalProps>) {
  return (
    <ModalPortal>
      {isShow && (
        <OverRayDiv
          $backgroundColor="rgba(0, 0, 0, 0.2)"
          $mixBlendMode="normal"
        >
          {children}
        </OverRayDiv>
      )}
    </ModalPortal>
  );
}
