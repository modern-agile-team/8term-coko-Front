import HeaderItem from '@/common/ui/HeaderItem';
import { useUserHpQuery } from '@/features/user/queries';
import useUserStore from '@/store/useUserStore';
import { getImageUrl } from '@/utils/getImageUrl';

export default function HeaderItemContainer() {
  const { user } = useUserStore();
  const { data: userHp } = useUserHpQuery.getHp();

  return (
    <>
      {user && (
        <>
          <HeaderItem
            icon={getImageUrl('포인트.svg')}
            point={user.point}
            color={'#FFCD35'}
          />
          <HeaderItem
            icon={getImageUrl('과일바구니.svg')}
            point={userHp.hp}
            color={'#FE0F0F'}
          />
        </>
      )}
    </>
  );
}
