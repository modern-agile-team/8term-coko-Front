import { useNavigate } from 'react-router-dom';
import { CompensationSection } from '../styles';
import { pointQuery } from '@queries/usersQuery';
import { useTimeout } from '@modern-kit/react';
import useUserStore from '@store/useUserStore';
export default function PartClear() {
  const navigate = useNavigate();
  const { mutate: updatePoint } = pointQuery.patch();
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
      <CompensationSection>
        <h1>와 파트클리어 축하해</h1>
        <button
          onClick={() => {
            navigate('/learn');
          }}
        >
          넘어가기
        </button>
      </CompensationSection>
    </>
  );
}
