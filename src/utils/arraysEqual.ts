/**
 * 1차원 배열 2개의 요소를 비교하는 함수
 * @param array1 T타입 배열
 * @param array2 T타입 배열
 * @type 제네릭에는 배열 안 요소의 타입을 입력합니다.
 * @returns boolean
 */
const arraysEqual = (array1: any[], array2: any[]) => {
  return JSON.stringify(array1) === JSON.stringify(array2);
};
export default arraysEqual;
