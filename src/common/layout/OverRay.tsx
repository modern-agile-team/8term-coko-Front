import { OverRayDiv } from '@/common/layout/styles';
import { OverRayDivProps } from '@/common/types';
import { PropsWithChildren, useEffect } from 'react';

export default function OverRay({
  children,
  overRayStyle,
}: PropsWithChildren<{ overRayStyle: OverRayDivProps }>) {
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

  return (
    <OverRayDiv
      $backgroundColor={overRayStyle.$backgroundColor}
      $mixBlendMode={overRayStyle.$mixBlendMode}
    >
      {children}
    </OverRayDiv>
  );
}
