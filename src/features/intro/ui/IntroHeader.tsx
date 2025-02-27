import {
  IntroHeaderLink,
  IntroHeaderWrapper,
} from '@/features/intro/ui/styles';
import { getImageUrl } from '@/utils/getImageUrl';
import { Link, useLocation } from 'react-router-dom';

export default function IntroHeader() {
  const location = useLocation();
  return (
    <IntroHeaderWrapper>
      <Link to="/learn">
        <img src={getImageUrl('로고.svg')} alt="사이트 로고" />
      </Link>
      <div>
        <IntroHeaderLink to="/intro" $active={location.pathname === '/intro'}>
          사이트 소개
        </IntroHeaderLink>
        <IntroHeaderLink
          to="/intro/creators"
          $active={location.pathname === '/intro/creators'}
        >
          만든 사람들
        </IntroHeaderLink>
      </div>
    </IntroHeaderWrapper>
  );
}
