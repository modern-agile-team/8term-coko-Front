import { LogoImg } from './style';

interface LogoItemProps {
  Logo: string;
}

export default function LogoItem({ Logo }: LogoItemProps) {
  return (
    <>
      <LogoImg src={Logo} alt="CoKo 로고" />
    </>
  );
}
