/**
 *@description 현재 페이지와 마지막 페이지를 비교하여 마지막 현재 페이지가 마지막 페이지 이하일때만 페이지를 넘길 수 있게 해주는 함수입니다.
 * @param currentPage 현재 페이지
 * @param lastPage 마지막 페이지
 * @param nextPage 페이지를 넘기는 함수
 * @param onSuccess 조건에 맞을때 실행될 콜백함수
 * @param onFailure 조건에 맞지 않았을 떄 실행될 콜백함수
 * @returns 작업의 성공 여부에 따라 boolean값으로 리턴
 * @example handlePage(10,11,nextPage) => true,nextPage 함수를 실행
 * handlePage(11,5,nextPage,()=>{},()=>{}) => false, nextPage 함수를 실행하지 않음
 */
const handlePage = (
  currentPage: number,
  lastPage: number,
  nextPage: () => void,
  onSuccess?: () => void,
  onFailure?: () => void
): void => {
  if (currentPage >= lastPage) {
    onFailure && onFailure();
  }
  onSuccess && onSuccess();
  nextPage();
};
export default handlePage;
