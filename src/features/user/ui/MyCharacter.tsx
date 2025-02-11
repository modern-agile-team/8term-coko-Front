import { getImageUrl } from '@utils/getImageUrl';
import { MyCharacterImage } from './styles';
import * as S from './styles';
import { useCosmeticItemStore } from '@/store/useCosmeticItemStore';
export default function MyCharacter() {
  const { equippedItems } = useCosmeticItemStore();

  return (
    <>
      <S.MyCharacterBox>
        <MyCharacterImage src={getImageUrl('벗은코코.svg')} />
        <S.ItemImageHead src={getImageUrl(equippedItems['1']?.image)} />
        <S.ItemImageAccessori src={getImageUrl(equippedItems['2']?.image)} />
        <S.ItemImageBody src={getImageUrl(equippedItems['1']?.image)} />
      </S.MyCharacterBox>
    </>
  );
}
