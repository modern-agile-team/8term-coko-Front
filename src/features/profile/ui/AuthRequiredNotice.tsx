import * as S from './styles';
import { Link } from 'react-router-dom';

export default function AuthRequiredNotice({
  title,
  description,
  linkTo,
  linkText,
}: {
  title: string;
  description: string;
  linkTo: string;
  linkText: string;
}) {
  return (
    <S.BadgeWrapper>
      <S.EmptyBadgeContainer>
        <p>{title}</p>
        <S.BadgeGuideText>{description}</S.BadgeGuideText>
        <Link to={linkTo}>{linkText}</Link>
      </S.EmptyBadgeContainer>
    </S.BadgeWrapper>
  );
}
