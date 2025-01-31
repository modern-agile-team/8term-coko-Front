import { PartStatus } from '@features/learn/types';

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
export const addLineNumbersToCode = (code: string) => {
  const splittedCode = code.split('\n');
  const lineAttachedCode = splittedCode
    .map((code, i) => `<span>${i + 1} |</span> ${code}`)
    .join('\n');
  return lineAttachedCode;
};

/**
 * 특정 문자열(#empty#)을 HTML 요소로 대체합니다.
 *
 * 주어진 문자열에서 `#empty#`를 찾아
 * `<span>` 요소로 대체하며, 각 요소에 고유 ID를 부여합니다.
 * 대체되는 요소의 ID는 `emptyBlock0`, `emptyBlock1`과 같이 순차적으로 증가합니다.
 *
 * @param {string} text - HTML 요소로 대체할 입력 문자열.
 * @returns {string} 대체된 HTML 요소를 포함한 문자열.
 *
 * @example
 * const text = "이곳은 #empty#입니다. 여기도 #empty#입니다.";
 * const result = replaceEmptyWithHTMLElement(text);
 * console.log(result);
 * // 출력:
 * // "이곳은 <span id='emptyBlock0' class='empty'></span>입니다. 여기도 <span id='emptyBlock1' class='empty'></span>입니다."
 */
export const replaceEmptyWithHTMLElement = (text: string) => {
  let index = 0;
  const newText = text.replace(/(#empty#)/g, () => {
    const replacement = `<span id="emptyBlock${index}" class="empty"></span>`;
    index++;
    return replacement;
  });

  return newText;
};

export const isCompleted = (currentStatus: PartStatus) =>
  currentStatus === 'COMPLETED';
