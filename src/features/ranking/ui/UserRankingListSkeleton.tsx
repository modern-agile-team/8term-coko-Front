import Skeleton from '@common/layout/Skeleton';

export default function UserRankingListSkeleton() {
  return Array.from({ length: 5 }).map((_, index) => (
    <Skeleton
      key={index}
      width="100%"
      height="115px"
      style={{
        borderRadius: '20px',
        marginBottom: '27px',
        boxShadow: '0 7px #bdbdbd',
      }}
    />
  ));
}
