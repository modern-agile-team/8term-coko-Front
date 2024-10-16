import { useEffect } from 'react';

const useRefreshWaringAlert = () => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // 경고 메시지를 설정합니다.
      event.preventDefault();
      event.returnValue = ''; // 대부분의 브라우저에서 필수로 설정해야 작동
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};
export default useRefreshWaringAlert;
