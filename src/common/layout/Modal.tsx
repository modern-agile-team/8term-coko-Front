import { PropsWithChildren } from 'react';
import ModalPortal from '@/ModalPortal';
import Overlay from '@/common/layout/Overlay';

interface ModalProps {
  isShow: boolean;
  outSideClickCallback?: () => void;
}

export default function Modal({
  isShow,
  children,
  outSideClickCallback,
}: PropsWithChildren<ModalProps>) {
  return (
    <ModalPortal>
      {isShow && (
        <Overlay
          overlayStyle={{
            $backgroundColor: 'rgba(0, 0, 0, 0.4)',
            $mixBlendMode: 'normal',
          }}
          outSideClickCallback={outSideClickCallback}
        >
          {children}
        </Overlay>
      )}
    </ModalPortal>
  );
}
