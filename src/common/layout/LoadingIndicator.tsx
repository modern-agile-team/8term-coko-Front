import { LoadingSpinner, LoadingWrapper } from '@/common/layout/style';
import { useIsFetching } from '@tanstack/react-query';

const LoadingIndicator = () => {
  const isFetching = useIsFetching(); // 현재 Fetching 상태 감지

  return isFetching > 0 ? (
    <LoadingWrapper>
      <LoadingSpinner />
      <span>Loading...</span>
    </LoadingWrapper>
  ) : null;
};

export default LoadingIndicator;
