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
const replaceEmptyWithHTMLElement = (text: string) => {
  let index = 0;
  const newText = text.replace(/(#empty#)/g, () => {
    const replacement = `<span id="emptyBlock${index}" class="empty"></span>`;
    index++;
    return replacement;
  });

  return newText;
};

export default replaceEmptyWithHTMLElement;
