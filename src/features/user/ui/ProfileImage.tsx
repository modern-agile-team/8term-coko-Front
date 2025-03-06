import { getImageUrl } from '@/utils/getImageUrl';
import * as S from './styles';
import MyCharacter from '@/features/user/ui/MyCharacter';
import { userCosmeticItemsQuery } from '@/features/user/queries';
export default function ProfileImage({ isIcon }: { isIcon: boolean }) {
  const { data: userEquippedItems } =
    userCosmeticItemsQuery.useGetEquippedItem();
  const profile = userEquippedItems?.filter(item => item.subCategoryId === 7);

  return (
    <>
      <S.ProfileBorderBox $isIcon={isIcon}>
        {profile && <img src={getImageUrl(profile[0].image)} />}
        <S.ProfileBox $isIcon={isIcon}>
          <MyCharacter />
        </S.ProfileBox>
      </S.ProfileBorderBox>
    </>
  );
}
