export type PopupPosition = 'top' | 'left' | 'bottom' | 'right';

export interface TutorialStep {
  name: string;
  id: string;
  nextStep: string;
  description: string;
}

export type rects = Record<string, DOMRect>;
