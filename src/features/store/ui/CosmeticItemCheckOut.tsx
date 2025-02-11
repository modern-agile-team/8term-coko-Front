import StoreItem from '@/features/store/ui/StoreItem';
import { CosmeticItemCheckOutWrapper } from '@/features/store/ui/styles';
import { PropsWithChildren } from 'react';

export default function CosmeticItemCheckOut({ children }: PropsWithChildren) {
  return (
    <CosmeticItemCheckOutWrapper>
      <div>{children}</div>
    </CosmeticItemCheckOutWrapper>
  );
}

interface StoreItemProps {
  name: string;
  image: string;
  price: number;
}
CosmeticItemCheckOut.StoreItem = ({ name, image, price }: StoreItemProps) => {
  return (
    <StoreItem>
      <StoreItem.Header name={name} />
      <StoreItem.Image image={image} />
      <StoreItem.Footer>
        <label>{price} Point</label>
      </StoreItem.Footer>
    </StoreItem>
  );
};
