/**
 * @description 2개의 배열을 비교하는 함수입니다.
 *
 * @template T 배열 내부 요소의 타입
 *
 * @param T[] array 첫번째 array
 * @param T[] array 두번째 array
 *
 * @returns boolean값
 *
 * @example arraysEquial<number>([1,2,3,4,5],[1,2,3,4,1]);
 * //false
 */
const arraysEqual = <T>(array1: T[], array2: T[]) => {
  return JSON.stringify(array1) === JSON.stringify(array2);
};
export default arraysEqual;
