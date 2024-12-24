import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { pointQuery } from '@queries/usersQuery';
import { useTimeout } from '@modern-kit/react';
import useUserStore from '@store/useUserStore';
import { getImageUrl } from '@/utils/getImageUrl';
export default function PartClear() {
  const navigate = useNavigate();
  const { mutate: updatePoint, isIdle } = pointQuery.patch();
  const { user } = useUserStore();
  const point = 1500;
  useTimeout(
    () => {
      if (user) {
        updatePoint({ id: user.id, point });
      }
    },
    { delay: 500 }
  );
  return (
    <>
      <S.CompensationSection $backgroundColor="#F0DAAB" $boxShadow="#E5C892">
        <h1>와 파트클리어 축하해</h1>
        <div>
          {/* <S.Img $height="50%" $width="" src={getImageUrl('챕터완료.svg')} /> */}
        </div>
        <p>{point} Point</p>
        <S.RedirectToLearnButton
          $isActive={isIdle}
          onClick={() => {
            navigate('/learn');
          }}
        >
          메인으로
        </S.RedirectToLearnButton>
      </S.CompensationSection>
    </>
  );
}
