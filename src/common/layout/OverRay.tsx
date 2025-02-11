import { OverRayDiv } from '@/common/layout/styles';
import { OverRayDivProps } from '@/common/types';
import { PropsWithChildren, useEffect } from 'react';
import { useOutsidePointerDown } from '@modern-kit/react';

interface OverRayProps {
  overRayStyle: OverRayDivProps;
  outSideClickCallback?: () => void;
}
export default function OverRay({
  children,
  overRayStyle,
  outSideClickCallback,
}: PropsWithChildren<OverRayProps>) {
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
    <OverRayDiv
      onClick={handleClick}
      $backgroundColor={overRayStyle.$backgroundColor}
      $mixBlendMode={overRayStyle.$mixBlendMode}
    >
      {children}
    </OverRayDiv>
  );
}
