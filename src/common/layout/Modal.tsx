import { PropsWithChildren, useEffect } from 'react';
import { OverRay } from './style';
import ModalPortal from '../../ModalPortal';

interface ModalProps {
  isShow: boolean;
}

export default function Modal({
  isShow,
  children,
}: PropsWithChildren<ModalProps>) {
  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isShow]);

  return <ModalPortal>{isShow && <OverRay>{children}</OverRay>}</ModalPortal>;
}
