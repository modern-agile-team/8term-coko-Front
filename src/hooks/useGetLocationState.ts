import { useLocation } from 'react-router-dom';
/**
 * @description useLocation을 사용해 전달된 state값을 가져오는 함수입니다
 * @returns ex useGetLocationState<{partId:string}>();
 * @example const useGetLocationState<{partId:string}>();
 */
function useGetLocationState(): { [key: string]: string } {
  const location = useLocation();
  const state = location.state;
  return { ...state };
}

export default useGetLocationState;
