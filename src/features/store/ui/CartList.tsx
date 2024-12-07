import { getImageUrl } from '@utils/getImageUrl';
import * as S from '../styles';
const testItem = [
  {
    id: 1,
    label: '해적 베레모',
    img: '해적-베레모.svg',
    place: '500',
  },
  {
    id: 2,
    label: '해적 의상',
    img: '해적-의상.svg',
    place: '1000',
  },
  {
    id: 3,
    label: '해적 베레모',
    img: '해적-베레모.svg',
    place: '500',
  },
  {
    id: 4,
    label: '해적 베레모',
    img: '해적-베레모.svg',
    place: '500',
  },
  {
    id: 5,
    label: '해적 베레모',
    img: '해적-베레모.svg',
    place: '500',
  },
];
interface CartListProps {
  query: string;
}
export default function CartList({ query }: CartListProps) {
  return (
    <>
      <S.StoreCartListWrapper>
        {testItem.map(item => (
          <S.StoreItem key={item.id}>
            <S.ItemLabel>{item.label}</S.ItemLabel>
            <S.ItemImage src={getImageUrl(item.img)} />
            <S.ItemLabel>{item.place} Point</S.ItemLabel>
          </S.StoreItem>
        ))}
        <S.PlaceLabel>총 1500포인트</S.PlaceLabel>
      </S.StoreCartListWrapper>
    </>
  );
}
