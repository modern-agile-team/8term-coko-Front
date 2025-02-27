import { HeaderIcon } from '@/common/ui/styles';
import { MAX_RETRIES } from '@/features/user/constants';
import { userKeys } from '@/features/user/queries';
import { isLoggedIn } from '@/features/user/service/authUtils';
import useUserStore from '@/store/useUserStore';
import { getImageUrl } from '@/utils/getImageUrl';
import { useQueryClient } from '@tanstack/react-query';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

interface SSEResponse {
  message: string;
  timestamp: string;
  type: string;
}

export default function SSEProvider({ children }: PropsWithChildren) {
  const queryClient = useQueryClient();
  const { user } = useUserStore();
  const retryCount = useRef(0);
  const [eventSource, setEventSource] = useState<EventSource | null>(null);

  const connectSSE = () => {
    const newEventSource = new EventSource(
      `${import.meta.env.VITE_BASE_URL}/sse`,
      { withCredentials: true }
    );

    newEventSource.onmessage = (event: MessageEvent) => {
      try {
        const parsedData: SSEResponse = JSON.parse(event.data);
        // console.log('🚀 ~ connectSSE ~ parsedData:', parsedData);

        if (parsedData.type === 'hp_refilled') {
          queryClient.invalidateQueries({ queryKey: userKeys.hp() });
          toast.success(parsedData.message, {
            icon: <HeaderIcon src={getImageUrl('과일바구니.svg')} />,
          });
        }
      } catch (err) {
        console.error('SSE 데이터 파싱 실패:');
        toast.error('SSE 데이터 처리 중 오류 발생');
      }
    };

    newEventSource.onerror = () => {
      console.error(`서버 연결 실패`);
      toast.error('서버 연결에 문제가 발생했습니다.');

      newEventSource.close();

      if (retryCount.current < MAX_RETRIES) {
        retryCount.current += 1;
        setTimeout(() => {
          console.log(`서버 연결 재시도`);
          setEventSource(connectSSE());
        }, 5000);
      }
    };

    newEventSource.onopen = () => {
      console.log('SSE 연결 성공');
      retryCount.current = 0;
    };

    return newEventSource;
  };

  useEffect(() => {
    if (isLoggedIn(user)) {
      setEventSource(connectSSE());
    }

    return () => {
      console.log('SSE 연결 해제');
      eventSource?.close();
    };
  }, [queryClient]);

  return children;
}
