import { PropsWithChildren } from 'react';
import ModalPortal from '@/ModalPortal';
import OverRay from '@common/layout/OverRay';

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
        <OverRay
          overRayStyle={{
            $backgroundColor: 'rgba(0, 0, 0, 0.4)',
            $mixBlendMode: 'normal',
          }}
        >
          {children}
        </OverRay>
      )}
    </ModalPortal>
  );
}
