interface GridPosition {
  gridColumn: number;
  gridRow: number;
}

/** @description 파트들의 위치를 계산하는 함수 */
const getPartGridPosition = (index: number): GridPosition => {
  const positions: GridPosition[] = [
    { gridColumn: 4, gridRow: 1 },
    { gridColumn: 3, gridRow: 2 },
    { gridColumn: 2, gridRow: 3 },
    { gridColumn: 3, gridRow: 4 },
  ];

  /** positions 배열의 인덱스를 4개 단위로 반복 */
  const basePosition = positions[index % 4];
  /** 행의 이동을 계산 */
  const moveRow = Math.floor(index / 4) * 4;

  return {
    gridColumn: basePosition.gridColumn,
    gridRow: basePosition.gridRow + moveRow,
  };
};

export default getPartGridPosition;
