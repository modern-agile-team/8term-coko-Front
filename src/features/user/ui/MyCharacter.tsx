import { getImageUrl } from '@utils/getImageUrl';
import { MyCharacterImage } from './styles';

export default function MyCharacter() {
  return (
    <>
      <MyCharacterImage
        src={getImageUrl('테스트캐릭터.svg')}
      ></MyCharacterImage>
    </>
  );
}
