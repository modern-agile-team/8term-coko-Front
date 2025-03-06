import { getImageUrl } from '@/utils/getImageUrl';
import * as S from './styles';
import MyCharacter from '@/features/user/ui/MyCharacter';
import { CosmeticItem, ProfileImageSize } from '@/features/store/types';

interface ProfileImageProps {
  size: ProfileImageSize;
  equippedItems?: CosmeticItem[];
}
export default function ProfileImage({
  size,
  equippedItems = [],
}: ProfileImageProps) {
  const profile = equippedItems.filter(item => item.subCategoryId === 7);

  return (
    <>
      <S.ProfileBorderBox $size={size}>
        {profile && profile.length !== 0 && (
          <img src={getImageUrl(profile[0].image)} />
        )}
        <S.ProfileBox $size={size}>
          <MyCharacter equippedItems={equippedItems} />
        </S.ProfileBox>
      </S.ProfileBorderBox>
    </>
  );
}
