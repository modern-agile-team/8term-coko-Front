import Skeleton from '@common/layout/Skeleton';

export default function MyRankSkeleton() {
  return (
    <Skeleton
      width="100%"
      height="115px"
      style={{
        borderRadius: '20px',
        marginBottom: '27px',
        boxShadow: '0 7px #bdbdbd',
      }}
    />
  );
}
