import SortDropdown from '@/common/layout/SortDropdown';
import Select from '@/features/intro/ui/Select';
import { useLocationQuizState } from '@/features/quiz/hooks';
import { OPINIONS_OPTIONS } from '@/features/user/constants';
import { useUserOpinionsQuery } from '@/features/user/queries';
import {
  ContentWrapper,
  ErrorMessage,
  OpinionsFormWrapper,
  SelectWrapper,
} from '@/features/user/ui/styles';
import { RefObject, use, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

interface OpinionsModalProps {
  modalRef: RefObject<HTMLDivElement | null>;
  closeModal: () => void;
}

export default function OpinionsModal({
  modalRef,
  closeModal,
}: OpinionsModalProps) {
  const [selectedOption, setSelectedOption] = useState<
    (typeof OPINIONS_OPTIONS)[number]['label'] | '현재 퀴즈'
  >('버그 제보');

  const [customTitle, setCustomTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const isQuizPage = useLocation().pathname === '/quiz';
  const { partId } = useLocationQuizState();
  console.log(partId);
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
        <SelectWrapper>
          <Select
            buttonName={selectedOption}
            onChange={value =>
              setSelectedOption(
                value as (typeof OPINIONS_OPTIONS)[number]['label']
              )
            }
          >
            {OPINIONS_OPTIONS.map(option => (
              <Select.Option
                value={option.label}
                label={option.label}
                key={option.id}
              />
            ))}
            {isQuizPage && (
              <Select.Option value="현재 퀴즈" label="현재 퀴즈" />
            )}
          </Select>
        </SelectWrapper>
      </div>
      {selectedOption === '직접 입력' && (
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
      {selectedOption === '현재 퀴즈' && (
        <div>
          <label>현재 퀴즈</label>
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
