import { PropsWithChildren, useEffect } from 'react';
import { OverRayDiv } from './style';
import ModalPortal from '../../ModalPortal';

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
