import queryString from 'query-string';
/**
 *
 * @param params @type string[]  가져오고싶은 쿼리값을 배열에 작성
 * @returns 배열 형태로 값이 전달됩니다
 * @example ['section-id','part'] => ['1' , 'EASY']
 */
function getParams(params: string[]): string[] {
  const parsedQuery = queryString.parse(location.search);
  const result: string[] = [];
  params.forEach(param => {
    result.push(parsedQuery[param] as string);
  });
  return result;
}

export default getParams;
