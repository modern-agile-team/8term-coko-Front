import { useEffect } from 'react';
import { usePreservedCallback } from '@modern-kit/react';

interface UseBeforeUnloadProps {
  enabled?: boolean;
  beforeUnloadAction?: (event: BeforeUnloadEvent) => void;
}

const useBeforeUnload = ({
  enabled = true, // 기본적으로 이벤트 바인딩
  beforeUnloadAction, // noop으로 기본 함수 설정도 가능
}: UseBeforeUnloadProps = {}): void => {
  // usePreservedCallback는 함수의 참조를 유지해주는 커스텀 훅입니다. @modern-kit 참고
  // props로 전달하는 함수의 참조를 유지해야되는 이유는 함수도 결국 객체이기 때문에  props로 전달하는 함수는 리렌더링마다 재생성되기 때문에
  // useCallback으로 관리하더라도 매번 재생성됩니다. 이런 문제를 해결하기 위해 usePreservedCallback와 같은 훅을 사용
  //내부적으로 ref를 통해 최신 콜백함수 유지 useCallback을 통해 함수 참조값 메모이제이션
  const handleBeforeUnload = usePreservedCallback(
    (event: BeforeUnloadEvent) => {
      event.preventDefault();

      // beforeUnloadAction이 있을 경우 호출
      if (beforeUnloadAction) {
        beforeUnloadAction(event);
      }
      return (event.returnValue = '');
    }
  );

  useEffect(() => {
    if (!enabled) return; // enabled가 false이면 이벤트 바인딩하지 않음

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enabled, handleBeforeUnload]);
};
export default useBeforeUnload;
