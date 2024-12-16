import hljs from 'highlight.js';
import { useLayoutEffect, DependencyList, useState } from 'react';
import emptyChangeToDiv from '@/features/quiz/service/emptyChangeToDiv';

/**
 * 코드 하이라이팅을 적용하는 커스텀텀훅
 *
 * 이 훅은 `dependency` 값이 변경될 때마다 ref로 지정된 코드 블록(<code></code>)을 하이라이팅합니다.
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
  useLayoutEffect(() => {
    hljs.configure({ ignoreUnescapedHTML: true });
    const highlightedCode = hljs.highlight(code, {
      language: 'javascript',
    }).value;
    const splittedCode = highlightedCode.split('\n');
    const lineAttachedCode = splittedCode
      .map((code, i) => `<div>${i + 1} | ${code}`)
      .join('\n');
    setHighlightCode(emptyChangeToDiv(lineAttachedCode));
  }, deps);
  return highlightCode;
};

export default useCodeHighlight;
