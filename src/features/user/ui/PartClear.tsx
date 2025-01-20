import { useNavigate } from 'react-router-dom';
import * as S from '@features/quiz/ui/styles';
import { partProgressQuery, pointQuery } from '@features/user/queries';
import useUserStore from '@store/useUserStore';
import { getImageUrl } from '@utils/getImageUrl';
import { User } from '@/features/user/types';
import { DEFAULT_POINT } from '@/features/user/constants';
interface PartClearProps {
  partId: number;
}
export default function PartClear({ partId }: PartClearProps) {
  const { user } = useUserStore() as { user: User };

  const { mutate: updatePoint, isIdle: isPointIdle } = pointQuery.patch();
  const { mutate: updatePartProgress, isIdle: isProgressIdle } =
    partProgressQuery.updatePartProgress();

  const navigate = useNavigate();

  const handleNavigateToLearn = () => {
    updatePoint({ id: user.id, point: DEFAULT_POINT });

    updatePartProgress({
      userId: user.id,
      partId,
      partStatus: 'COMPLETED',
    });

    navigate('/learn');
  };

  return (
    <>
      <S.CompensationSection $backgroundColor="#F0DAAB" $boxShadow="#E5C892">
        <S.PartClearTextDiv>
          축하해!&nbsp;<p>파트 {partId}</p>&nbsp;을 다 깼구나!
        </S.PartClearTextDiv>
        <S.DashLineHr $color="#fff" />
        <S.PartClearImageBox>
          <S.Img
            $height="200px"
            $width="121px"
            src={getImageUrl('파트완료_왼쪽.svg')}
          />
          <S.Img
            $height="200px"
            $width="300px"
            src={getImageUrl('파트완료_가운데.svg')}
          />
          <S.Img
            $height="200px"
            $width="121px"
            src={getImageUrl('파트완료_오른쪽.svg')}
          />
        </S.PartClearImageBox>
        <S.PartClearPoint>{DEFAULT_POINT} Point</S.PartClearPoint>
        <S.RedirectToLearnButton
          $margin="0 88px 0 0"
          $isActive={isPointIdle && isProgressIdle}
          onClick={() => {
            handleNavigateToLearn();
          }}
        >
          메인으로
        </S.RedirectToLearnButton>
      </S.CompensationSection>
    </>
  );
}
