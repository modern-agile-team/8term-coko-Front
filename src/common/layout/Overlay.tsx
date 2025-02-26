import { OverlayDiv } from '@/common/layout/styles';
import { OverlayDivProps } from '@/common/types';
import { PropsWithChildren, useEffect } from 'react';
import { useOutsidePointerDown } from '@modern-kit/react';

export default function Overlay({
  children,
  overlayStyle,
}: PropsWithChildren<{ overlayStyle: OverlayDivProps }>) {
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

  const handleClick: React.MouseEventHandler<HTMLDivElement> = e => {
    if (e.target === e.currentTarget && outSideClickCallback) {
      outSideClickCallback();
    }
  };

  return (
    <OverlayDiv
      $backgroundColor={overlayStyle.$backgroundColor}
      $mixBlendMode={overlayStyle.$mixBlendMode}
    >
      {children}
    </OverlayDiv>
  );
}
