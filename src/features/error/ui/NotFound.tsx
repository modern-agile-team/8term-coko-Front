import {
  GoToMainLink,
  NotFoundImage,
  NotFoundText,
  NotFoundWrapper,
} from '@/features/error/ui/styles';
import { getImageUrl } from '@/utils/getImageUrl';

interface NotFoundProps {
  error?: Error;
}

export default function NotFound({ error }: NotFoundProps) {
  return (
    <NotFoundWrapper>
      <NotFoundText $margin="0 0 74px 0">
        여기가 어디야? 아무래도 길을 잃어버렸나봐 ! 
      </NotFoundText>
      <NotFoundImage src={getImageUrl('404이미지.webp')} />
      <NotFoundText $margin="45px 0 59px 0">
        죄송합니다. 페이지를 찾을 수 없습니다. <br />
        존재하지 않는 주소를 입력하셨거나 요청하신 페이지의 주소가 변경,
        삭제되어 찾을 수 없습니다.
      </NotFoundText>
      <GoToMainLink to="/learn">메인으로</GoToMainLink>
    </NotFoundWrapper>
  );
}
