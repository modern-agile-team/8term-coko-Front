import { useEffect } from 'react';

interface UseBeforeUnloadProps {
  enabled?: boolean;
}

const useBeforeUnload = ({
  enabled = true, // 기본적으로 이벤트 바인딩
}: UseBeforeUnloadProps = {}): void => {
  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    return (event.returnValue = '');
  };
  useEffect(() => {
    if (!enabled) return; // enabled가 false이면 이벤트 바인딩하지 않음

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enabled]);
};
export default useBeforeUnload;
