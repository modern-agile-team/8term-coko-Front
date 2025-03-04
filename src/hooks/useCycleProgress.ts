interface UseCycleProgressParams {
  value: number;
  cycleLength?: number;
  step?: number;
}

interface UseCycleProgressResult {
  cycle: number;
  steps: number[];
  positionInCycle: number;
  progress: number;
}

/**
 * @description 주어진 값(value)을 기반으로 해당 값이 속한 사이클, 진행도, 및 주요 단계들을 계산하는 커스텀 훅입니다.
 *
 * @param {UseCycleProgressParams} params - 입력 파라미터를 포함하는 객체입니다.
 * @param {number} params.value - 현재 값(예: 레벨, 페이지 번호, 점수 등)
 * @param {number} [params.cycleLength=100] - 하나의 사이클 길이 (기본값: 100)
 * @param {number} [params.step=10] - 주요 단계를 나누는 간격 (기본값: 10)
 *
 * @returns {UseCycleProgressResult} 계산된 사이클 정보를 담은 객체를 반환합니다.
 * @returns {number} return.cycle - 현재 값이 속한 사이클 번호 (예: 1 사이클은 1~100, 2 사이클은 101~200)
 * @returns {number[]} return.steps - 사이클의 주요 단계 배열 (예: [100, 90, 80, ...])
 * @returns {number} return.positionInCycle - 현재 사이클 내 위치 (예: 25)
 * @returns {number} return.progress - 사이클 진행도 (%) (예: 25)
 *
 * @example
 * const { cycle, steps, positionInCycle, progress } = useCycleProgress({ value: 125, cycleLength: 100, step: 10 });
 * console.log(cycle); // 2 (1~100 → 1사이클, 101~200 → 2사이클)
 * console.log(steps); // [200, 190, 180, ..., 110]
 * console.log(positionInCycle); // 25 (현재 사이클 내 위치)
 * console.log(progress); // 25 (25/100 * 100)
 */
export default function useCycleProgress({
  value,
  cycleLength = 100,
  step = 10,
}: UseCycleProgressParams): UseCycleProgressResult {
  const cycle = Math.floor((value - 1) / cycleLength) + 1;
  const start = (cycle - 1) * cycleLength + 1;
  const end = cycle * cycleLength;

  // 주요 단계 배열 생성 (예: 100, 90, 80, ...)
  const steps: number[] = [];
  for (let lv = end; lv >= start; lv -= step) {
    steps.push(lv);
  }

  const positionInCycle = ((value - 1) % cycleLength) + 1;
  const progress = (positionInCycle / cycleLength) * 100;

  return { cycle, steps, positionInCycle, progress };
}
