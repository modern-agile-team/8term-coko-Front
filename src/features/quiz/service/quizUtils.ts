import { PartStatus } from '@/features/quiz/types';
import hljs from 'highlight.js';
import { DependencyList, useState, useLayoutEffect } from 'react';

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

/**
 * 주어진 코드 문자열을 하이라이트 처리된 HTML로 변환하는 React 커스텀 훅입니다.
 *
 * `highlight.js` 라이브러리를 사용하여 특정 언어의 코드 구문을 강조하고,
 * 이를 하이라이트 처리된 HTML 문자열로 반환합니다.
 * 의존성 배열(`deps`)을 통해 재렌더링 조건을 제어할 수 있습니다.
 * 코드 "문자열" 을 반환하기 때문에 html-react-parser과 xss에 취약한 점을 보완하기 위해 dompurify를 같이 사용하는것을 권장드립니다.
 *
 * @param {string} code - 하이라이트 처리할 코드 문자열.
 * @param {DependencyList} [deps] - 훅 실행을 제어할 의존성 배열. 기본값은 `undefined`이며, 이 경우 `code`와 `language`를 기본 의존성으로 사용합니다.
 * @param {string} [language='javascript'] - 코드 하이라이트에 사용할 언어. 기본값은 'javascript'입니다.
 * @returns {string} 하이라이트 처리된 HTML 문자열.
 *
 * @example
 * const code = `
 * const greet = (name) => {
 *   console.log(\`Hello, \${name}!\`);
 * };
 * greet('World');
 * `;
 *
 * const highlightedCode = useCodeHighlight(code, [code], 'javascript');
 *
 * return (
 *   <pre>
 *     <code>
 *      {parse(dompurify.sanitize(addLineNumberCode), options)}
 *     </code>
 *   </pre>
 * );
 */
export const useCodeHighlight = (
  code: string,
  deps?: DependencyList,
  language: string = 'javascript'
) => {
  const [highlightCode, setHighlightCode] = useState<string>('');

  useLayoutEffect(() => {
    try {
      hljs.configure({ ignoreUnescapedHTML: true });
      const highlightedCode = hljs.highlight(code, { language }).value;
      setHighlightCode(highlightedCode);
    } catch (error) {
      setHighlightCode(code);
    }
  }, deps ?? [code, language]);

  return highlightCode;
};

export const isCompleted = (currentStatus: PartStatus) =>
  currentStatus === 'COMPLETED';
