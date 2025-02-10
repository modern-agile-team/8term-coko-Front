import Loader from '@/common/layout/Loader';
import Login from '@/features/auth/ui/Login';
import { isLoggedIn } from '@/features/user/service/authUtils';
import useUserStore from '@/store/useUserStore';
import { noop } from '@modern-kit/utils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { user } = useUserStore();
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (isLoggedIn(user)) {
      navigate('/learn');
    } else {
      setIsChecking(false);
    }
  }, [user]);

  if (isChecking) return <Loader />;

  return <Login openModal={noop} closeModal={noop} />;
}
