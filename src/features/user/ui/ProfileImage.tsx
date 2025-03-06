import { getImageUrl } from '@/utils/getImageUrl';
import * as S from './styles';
import MyCharacter from '@/features/user/ui/MyCharacter';
import { userCosmeticItemsQuery } from '@/features/user/queries';
import { CosmeticItem, ProfileImageSize } from '@/features/store/types';

interface ProfileImageProps {
  size: ProfileImageSize;
  equippedItems: CosmeticItem[];
}
export default function ProfileImage({
  size,
  equippedItems,
}: ProfileImageProps) {
  const { data: userEquippedItems } =
    userCosmeticItemsQuery.useGetEquippedItem();
  const profile = userEquippedItems?.filter(item => item.subCategoryId === 7);

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
