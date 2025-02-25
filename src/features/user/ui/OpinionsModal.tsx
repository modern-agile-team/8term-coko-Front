import SortDropdown from '@/common/layout/SortDropdown';
import { OPINIONS_OPTIONS } from '@/features/user/constants';
import { useUserOpinionsQuery } from '@/features/user/queries';
import {
  ContentWrapper,
  ErrorMessage,
  OpinionsFormWrapper,
} from '@/features/user/ui/styles';
import { RefObject, useState } from 'react';
import toast from 'react-hot-toast';

interface OpinionsModalProps {
  modalRef: RefObject<HTMLDivElement | null>;
  closeModal: () => void;
}

export default function OpinionsModal({
  modalRef,
  closeModal,
}: OpinionsModalProps) {
  const [selectedOption, setSelectedOption] =
    useState<keyof typeof OPINIONS_OPTIONS>('버그 제보');
  const [customTitle, setCustomTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const { mutate: createOpinions } = useUserOpinionsQuery.createOpinions();

  const handleSubmit = () => {
    if (selectedOption === '직접 입력' && !customTitle) {
      setError('문의 제목은 필수 입력 사항입니다.');
      return;
    }
    if (!content) {
      setError('내용은 필수 입력 사항입니다.');
      return;
    }
    if (content.length >= 255) {
      setError('내용은 255자 이하로 입력해주세요.');
      return;
    }
    const title = selectedOption === '직접 입력' ? customTitle : selectedOption;
    createOpinions(
      {
        title,
        content,
      },
      {
        onSuccess: () => {
          toast.success('성공적으로 문의를 보냈습니다!');
          closeModal();
        },
      }
    );
  };

  return (
    <OpinionsFormWrapper ref={modalRef}>
      <h1>문의하기</h1>
      <div>
        <label>제목</label>
        <SortDropdown
          options={OPINIONS_OPTIONS}
          onSelectOption={setSelectedOption}
          selectedOption={selectedOption}
          width="200px"
          height="30px"
          iconSize="10px"
          iconRight="15px"
          fontSize="12px"
          ulFontColor="#000"
          liFontColor="#000"
          ulBackgroundColor="#fff"
          liBackgroundColor="#fff"
          borderColor="#000"
        />
      </div>
      {OPINIONS_OPTIONS[selectedOption].dataField === 'etc' && (
        <div>
          <label>
            직접 입력<span>{!!customTitle || '*'}</span>
          </label>
          <input
            type="text"
            value={customTitle}
            onChange={e => setCustomTitle(e.target.value)}
          />
        </div>
      )}
      <div>
        <label>
          내용<span>{!!content || '*'}</span>
        </label>
        <ContentWrapper $isMaxLength={content.length >= 255}>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            maxLength={254}
          />
          <p>
            (<span>{content.length} </span>/ 255)
          </p>
        </ContentWrapper>
      </div>
      <button onClick={handleSubmit}>제출하기</button>
      <ErrorMessage>{error}</ErrorMessage>
    </OpinionsFormWrapper>
  );
}
