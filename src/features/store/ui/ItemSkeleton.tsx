import { SkeletonBase } from '@/common/layout/styles';
import { ItemContainer } from '@/features/store/ui/styles';

interface ItemSkeletonProps {
  limit: number;
}
export default function ItemSkeleton({ limit }: ItemSkeletonProps) {
  const limitArray = Array.from({ length: limit }, (_, i) => i + 1);
  return (
    <>
      <ItemContainer>
        {limitArray.map(value => (
          <SkeletonBase width="100%" height="100%" key={value} />
        ))}
      </ItemContainer>
    </>
  );
}
