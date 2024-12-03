import { LogoBoxWrapper, LogoBox } from './style';
import { LogoImg } from '../ui/style';
import { getImageUrl } from '@/utils/getImageUrl';

export default function CokoLogo() {
  return (
    <LogoBoxWrapper>
      <LogoBox>
        <LogoImg src={getImageUrl('로고.svg')} />
      </LogoBox>
    </LogoBoxWrapper>
  );
}
