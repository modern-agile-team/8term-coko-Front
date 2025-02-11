import {
  CosmeticItemFooter,
  CosmeticItemHeader,
  CosmeticItemLi,
  ItemImage,
} from '@/features/store/ui/styles';
import { getImageUrl } from '@utils/getImageUrl';
import { PropsWithChildren } from 'react';
export default function StoreItem({
  children,
  onClick,
}: PropsWithChildren<{ onClick?: () => void }>) {
  return <CosmeticItemLi onClick={onClick}>{children}</CosmeticItemLi>;
}
interface StoreItemHeaderProps {
  name: string;
  onRemove?: () => void;
}
StoreItem.Header = ({ name, onRemove }: StoreItemHeaderProps) => (
  <CosmeticItemHeader>
    <label>{name}</label>
    {onRemove && <span onClick={onRemove}>X</span>}
  </CosmeticItemHeader>
);
interface StoreItemImageProps {
  image: string;
}

StoreItem.Image = ({ image }: StoreItemImageProps) => (
  <ItemImage src={getImageUrl(image)} />
);

StoreItem.Footer = ({ children }: PropsWithChildren) => (
  <CosmeticItemFooter>{children}</CosmeticItemFooter>
);
