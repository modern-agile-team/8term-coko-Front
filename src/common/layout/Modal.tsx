import { PropsWithChildren, useEffect } from 'react';
import ModalPortal from '../../ModalPortal';
import { OverRayDiv } from '@/common/layout/styles';
import OverRay from '@/common/layout/OverRay';

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
        <OverRay
          overRayStyle={{
            $backgroundColor: 'rgba(0, 0, 0, 0.2)',
            $mixBlendMode: 'normal',
          }}
          outSideClickCallback={outSideClickCallback}
        >
          {children}
        </OverRay>
      )}
    </ModalPortal>
  );
}
