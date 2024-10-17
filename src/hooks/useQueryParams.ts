import { useLocation } from 'react-router-dom';
/**
 *
 * @param params @type string[]  가져오고싶은 쿼리값을 배열에 작성
 * @returns 배열 형태로 값이 전달됩니다
 * @example ['section-id','part'] => ['1' , 'EASY']
 */
function useQueryParams(params: string[]): (string | null)[] {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const result: (string | null)[] = [];
  params.forEach(param => {
    result.push(queryParams.get(param));
  });

  return result;
}

export default useQueryParams;
