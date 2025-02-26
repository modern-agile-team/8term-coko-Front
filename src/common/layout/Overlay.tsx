import { OverlayDiv } from '@/common/layout/styles';
import { OverlayDivProps } from '@/common/types';
import { PropsWithChildren, useEffect } from 'react';
import { useOutsidePointerDown } from '@modern-kit/react';

export default function Overlay({
  children,
  overlayStyle,
  outSideClickCallback,
}: PropsWithChildren<{
  overlayStyle: OverlayDivProps;
  outSideClickCallback?: () => void;
}>) {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.offsetWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';
    (document.activeElement as HTMLElement).blur();

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = `0px`;
    };
  }, []);
  const overlayRef = useOutsidePointerDown<HTMLDivElement>(
    outSideClickCallback ?? (() => {})
  );

  return (
    <OverlayDiv
      ref={overlayRef}
      $backgroundColor={overlayStyle.$backgroundColor}
      $mixBlendMode={overlayStyle.$mixBlendMode}
    >
      {children}
    </OverlayDiv>
  );
}
