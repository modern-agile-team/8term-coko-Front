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
      const scrollbarWidth =
        window.innerWidth - document.documentElement.offsetWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
      (document.activeElement as HTMLElement).blur();
    } else {
      document.body.style.paddingRight = `0px`;
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isShow]);

  return <ModalPortal>{isShow && <OverRay>{children}</OverRay>}</ModalPortal>;
}
