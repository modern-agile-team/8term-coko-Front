type CalculatePosition = (id: string) => DOMRect | null;

export const calculatePosition: CalculatePosition = id => {
  const element = document.getElementById(id);
  if (!element) return null;

  const rect = element.getBoundingClientRect();

  return rect;
};

// DOMRect 타입 정의
type Position = {
  top: string;
  left: string;
};

type FindMostSpaciousDirection = (rect: DOMRect) => Position;
// DOMRect를 기반으로 요소의 위치 정보를 계산하는 함수
export const findDirection: FindMostSpaciousDirection = rect => {
  const leftDistance = rect.left;
  const rightDistance = window.innerWidth - rect.right;
  const topDistance = rect.top;
  const bottomDistance = window.innerHeight - rect.bottom;
  const position: Position = {
    top: `${topDistance}px`,
    left: `${leftDistance}px`,
  };

  //오른쪽 여백이 300 미만인 경우에는
  if (rightDistance < 300) {
    position.left = `${leftDistance - 200}px`;
  }

  if (bottomDistance < 300) {
    position.top = `${topDistance - 300}px`;
  }

  return position;
};
