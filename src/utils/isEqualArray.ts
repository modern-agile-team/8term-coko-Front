/**
 * @description 2개의 1차원 배열을 순서와 내부 값이 일치하는지 비교하는 함수입니다.
 *
 *
 * @param array1 첫번째 array
 * @param array2 두번째 array
 *
 * @returns boolean값
 *
 * @example isEqualArray([1,2,3,4,5],['a',2,3,1]);
 * //false
 */
const isEqualArray = <T>(
  array1: T[] | readonly T[],
  array2: T[] | readonly T[]
): boolean => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
export default isEqualArray;
