import { LogoBoxWrapper, LogoBox } from './style';
import { LogoImg } from '../ui/style';

export default function CokoLogo() {
  return (
    <LogoBoxWrapper>
      <LogoBox>
        {/* 로고 이미지는 나오지 않아서 수정할 부분 */}
        <LogoImg src="https://cdn0.iconfinder.com/data/icons/entypo/90/big35-256.png" />
      </LogoBox>
    </LogoBoxWrapper>
  );
}
