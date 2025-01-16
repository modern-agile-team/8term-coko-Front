import { PropsWithChildren, RefObject, useEffect, useRef } from 'react';

export const useTutorial = (rootRef: RefObject<HTMLElement | null>) => {
  if (rootRef.current !== null) {
    const elementsWithClass =
      rootRef.current.querySelectorAll(`#question-text`);
    console.log(elementsWithClass);
  }
  const Tutorial = ({ children }: PropsWithChildren) => (
    <span className="tutorial">{children}</span>
  );
  return { Tutorial };
};
