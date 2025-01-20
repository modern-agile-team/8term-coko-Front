import {
  FlexContainer,
  PromptContainer,
  PromptMessage,
  ButtonContainer,
  GoBackPromptImg,
  ConfirmButton,
  CancelButton,
} from './styles';
import { getImageUrl } from '@/utils/getImageUrl';
import useOutsideClick from '@hooks/useOutsideClick';

interface GoBackPromptProps {
  onConfirm: () => void; // 뒤로 가기 동작
  onCancel: () => void; // 모달 닫기
}

export default function GoBackPrompt({
  onConfirm,
  onCancel,
}: GoBackPromptProps) {
  const modalRef = useOutsideClick(onCancel);

  return (
    <FlexContainer>
      <PromptContainer ref={modalRef}>
        <PromptMessage>
          <h2>지금 나갈 거야...?</h2>
          <p>진행사항이 사라질 수 있습니다.🚨</p>
        </PromptMessage>
        <GoBackPromptImg src={getImageUrl('우는-코코.svg')} />
        <ButtonContainer>
          <CancelButton onClick={onCancel}>계속하기</CancelButton>
          <ConfirmButton onClick={onConfirm}>나가기</ConfirmButton>
        </ButtonContainer>
      </PromptContainer>
    </FlexContainer>
  );
}
