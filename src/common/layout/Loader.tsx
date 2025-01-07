import { LoadingSpinner, LoadingWrapper } from '@/common/layout/style';

export default function Loader() {
  return (
    <LoadingWrapper>
      <LoadingSpinner />
      <span>Loading...</span>
    </LoadingWrapper>
  );
}
