import { PartStatus } from '@/features/learn/types';
import { useUserHpQuery } from '@/features/user/queries';
import { isLoggedIn } from '@/features/user/service/authUtils';
import useUserStore from '@/store/useUserStore';
import hljs from 'highlight.js';
import { DependencyList, useState, useLayoutEffect, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

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

export const useLocationQuizState = () => {
  const { state } = useLocation();
  if (state === null) {
    throw new Error('잘못된 접근입니다.');
  }
  const { partId, partStatus } = state;
  if (!partId) {
    throw new Error('partId가 없습니다.');
  }

  return { partId, partStatus } as {
    partId: number;
    partStatus: PartStatus;
  };
};

type useHpUpdate = (isCorrect: boolean) => void;
export const useHpUpdate: useHpUpdate = isCorrect => {
  const { mutate: hpUpdate } = useUserHpQuery.updateHp();
  const { data: userHp } = useUserHpQuery.getHpWhenLoggedIn();
  const { user } = useUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (Number(userHp?.hp) === 0) {
      toast('목숨이 다 소진되었습니다.');
      navigate('/');
    }

    if (isCorrect) return;

    if (isLoggedIn(user) && userHp) {
      hpUpdate({
        hp: Number(userHp.hp) - 1,
        hpStorage: userHp.hpStorage,
      });
    }
  }, [isCorrect]);
};
