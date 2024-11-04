/**
 * @description 2개의 1차원 배열을 순서와 내부 값이 일치하는지 비교하는 함수입니다.
 *
 *
 * @param array1 첫번째 array
 * @param array2 두번째 array
 *
 * @returns boolean값
 *
 * @example isArrayContentEqual([1,2,3,4,5],['a',2,3,1]);
 * //false
 */
const isArrayContentEqual = (array1: any[], array2: any[]): boolean => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
export default isArrayContentEqual;
