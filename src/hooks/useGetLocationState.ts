import { useLocation } from 'react-router-dom';
/**
 * @description useLocation을 사용해 전달된 state값을 가져오는 함수입니다
 * @returns ex useGetLocationState<{partId:string}>();
 * @example const useGetLocationState<{partId:string}>();
 */
function useGetLocationState(): { [ket: string]: string | undefined } {
  const location = useLocation();
  const state = location.state;
  //state가 빈 객체일 경우
  if (state === null) {
    return {};
  }
  return { ...state };
}

export default useGetLocationState;
