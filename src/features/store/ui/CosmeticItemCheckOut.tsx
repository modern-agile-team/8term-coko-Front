import StoreItem from '@/features/store/ui/StoreItem';
import {
  CheckOutDetailBox,
  ConfirmButtonListWrapper,
  CosmeticItemCheckOutWrapper,
} from '@/features/store/ui/styles';
import { PropsWithChildren } from 'react';

export default function CosmeticItemCheckOut({ children }: PropsWithChildren) {
  return <CosmeticItemCheckOutWrapper>{children}</CosmeticItemCheckOutWrapper>;
}

interface StoreItemProps {
  name: string;
  image: string;
  price: number;
}

CosmeticItemCheckOut.DetailBox = ({ children }: PropsWithChildren) => {
  return <CheckOutDetailBox>{children}</CheckOutDetailBox>;
};

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

interface ConfirmButtonListProps {
  onAccept: () => void;
  onReject: () => void;
}

CosmeticItemCheckOut.ConfirmButtonList = ({
  onAccept,
  onReject,
}: ConfirmButtonListProps) => {
  return (
    <ConfirmButtonListWrapper>
      <button onClick={onReject}>거절</button>
      <button onClick={onAccept}>수락</button>
    </ConfirmButtonListWrapper>
  );
};
