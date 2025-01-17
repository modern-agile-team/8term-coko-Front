type CalculatePosition = (id: string) => DOMRect | null;
import { isMobile } from '@modern-kit/utils';

export const calculatePosition: CalculatePosition = id => {
  const element = document.getElementById(id);
  if (!element) return null;

  const rect = element.getBoundingClientRect();

  return rect;
};

type Position = {
  top: string;
  left: string;
};
type FindMostSpaciousDirection = (rect: DOMRect) => Position;

export const calculateTutorialPopupPosition: FindMostSpaciousDirection =
  rect => {
    const leftDistance = rect.left;
    const rightDistance = window.innerWidth - rect.right;
    const topDistance = rect.top;
    const bottomDistance = window.innerHeight - rect.bottom;
    const position: Position = {
      top: `${topDistance}px`,
      left: `${leftDistance}px`,
    };
    //모바일 환경에서는
    //상, 하 여백이 많은쪽으로
    if (isMobile()) {
      if (bottomDistance < 150) {
        console.log(position.top);
        position.top = `${topDistance - 70}px`;
        return position;
      }
      position.top = `${topDistance + 50}px`;
      return position;
    }
    //남은 여백을 보고 위치 재조정
    if (rightDistance < 300) {
      position.left = `${leftDistance - 200}px`;
    }

    if (bottomDistance < 300) {
      position.top = `${topDistance - 300}px`;
    }
    return position;
  };
