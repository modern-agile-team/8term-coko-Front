import { useMediaQuery } from '@modern-kit/react';
import { mediaQueryMap } from '@style/mediaQueryMap';

type Position = {
  top: string;
  left: string;
};

type FindMostSpaciousDirection = (rect: DOMRect) => Position;

export const calculateTutorialPopupPosition: FindMostSpaciousDirection =
  rect => {
    const isMobile = useMediaQuery(mediaQueryMap.mobile);

    const leftDistance = rect.left;
    const rightDistance = window.innerWidth - rect.right;
    const topDistance = rect.top;
    const bottomDistance = window.innerHeight - rect.bottom;

    const position: Position = {
      top: `${topDistance}px`,
      left: `${leftDistance}px`,
    };

    // 모바일 환경에서는 상, 하 여백이 많은 쪽으로 조정
    if (isMobile) {
      position.top =
        bottomDistance < 150
          ? `${topDistance - 70}px`
          : `${topDistance + 70}px`;
      return position;
    }

    // 남은 여백을 보고 위치 재조정
    if (rightDistance < 300) {
      position.left = `${leftDistance - 200}px`;
    }

    if (bottomDistance < 300) {
      position.top = `${topDistance - 300}px`;
    }

    return position;
  };
