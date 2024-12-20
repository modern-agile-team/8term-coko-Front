/**
 * 코드 문자열의 각 줄에 줄 번호를 추가합니다.
 *
 * 주어진 코드 문자열을 줄 단위로 나눈 뒤,
 * 각 줄의 앞에 줄 번호를 `<span>줄번호 |</span>` 형식으로 추가하고,
 * 다시 하나의 문자열로 결합하여 반환합니다.
 *
 * @param {string} code - 줄 번호를 추가할 코드 문자열.
 * @returns {string} 각 줄에 줄 번호가 추가된 문자열.
 *
 * @example
 * const code = "function hello() {\n  console.log('Hello, World!');\n}";
 * const result = addLineNumbersToCode(code);
 * console.log(result);
 * // 출력:
 * // "<span>1 |</span> function hello() {
 * // <span>2 |</span>   console.log('Hello, World!');
 * // <span>3 |</span> }"
 */
const addLineNumbersToCode = (code: string) => {
  const splittedCode = code.split('\n');
  const lineAttachedCode = splittedCode
    .map((code, i) => `<span>${i + 1} |</span> ${code}`)
    .join('\n');
  return lineAttachedCode;
};
export default addLineNumbersToCode;
