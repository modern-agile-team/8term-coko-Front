/**
 * 주어진 ISO 날짜 문자열을 'YYYY.MM.DD' 형식으로 반환하는 함수
 * @param dateStr ISO 형식의 날짜 문자열
 * @param locale 로케일 (기본값: 'ko-KR')
 * @returns 포맷팅된 날짜 문자열
 */
const formatDate = (
  dateStr: string | null,
  locale: string = 'ko-KR'
): string => {
  if (!dateStr) return ''; // 날짜가 없으면 빈 문자열 반환
  return new Date(dateStr).toLocaleDateString(locale, {
    year: 'numeric', // 4자리 연도(예시: 2025)
    month: '2-digit', // 2자리 월(예시: 01)
    day: '2-digit', // 2자리 일(예시: 01)
  });
};

export default formatDate;
