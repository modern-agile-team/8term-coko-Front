import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '@utils/getImageUrl';

interface GoBackButtonProps {
  onClick?: () => void; // 기본적으로 뒤로 가기 동작이지만 필요 시 커스터마이징 가능
}

export default function GoBackButton({ onClick }: GoBackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1); // 기본 뒤로가기
    }
  };

  return (
    <StyledButton onClick={handleClick}>
      <StyledImg src={getImageUrl('뒤로가기-버튼.svg')} alt="뒤로가기" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: none;
  background: none;
`;

const StyledImg = styled.img`
  width: 50px;
  height: 25px;
`;
