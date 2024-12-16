import hljs from 'highlight.js';
import { useLayoutEffect, DependencyList, useState, useEffect } from 'react';
import replaceEmptyWithHTMLElement from './replaceEmptyWithHTMLElement';

/**
 * 코드 하이라이팅을 적용하는 커스텀텀훅
 *
 * 이 훅은 `dependency` 값이 변경될 때마다 코드를 하이라이팅 합니다.
 * #empty#로 되어있는 부분을 빈 코드블럭으로 변경시켜줍니다.
 * 문제 페이지에서 사용되는 훅입니다.
 *
 * @param {DependencyList} deps - 하이라이팅을 다시 적용할 조건이 되는 의존성. 의존성이 변경될 때마다 하이라이팅이 갱신됩니다.
 * @returns {React.RefObject<HTMLElement>} - 코드 블록을 참조할 수 있는 `ref`
 *
 * @example
 * const codeRef = useCodeHighlight(code);
 * return <pre><code ref={codeRef}>{code}</code></pre>;
 */
const useCodeHighlight = (code: string, deps?: DependencyList) => {
  const [highlightCode, setHighlightCode] = useState<string>('');

  useEffect(() => {
    hljs.configure({ ignoreUnescapedHTML: true });
    const highlightedCode = hljs.highlight(code, {
      language: 'javascript',
    }).value;
    setHighlightCode(highlightedCode);
  }, deps);

  return highlightCode;
};

export default useCodeHighlight;
