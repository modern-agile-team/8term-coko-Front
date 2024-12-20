import { getImageUrl } from '@utils/getImageUrl';
import { MyCharacterImage } from './styles';
import * as S from './styles';
export default function MyCharacter() {
  return (
    <>
      <S.MyCharacterBox>
        <S.ItemImageHead src={getImageUrl('해적-베레모.svg')} />
        <S.ItemImageAccessori src={getImageUrl('안경.svg')} />
        <MyCharacterImage src={getImageUrl('벗은코코.svg')} />
        <S.ItemImageBody src={getImageUrl('유치원-의상.svg')} />
      </S.MyCharacterBox>
    </>
  );
}
