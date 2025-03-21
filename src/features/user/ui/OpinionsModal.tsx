import Select from '@/features/intro/ui/Select';
import { Quiz } from '@/features/quiz/types';
import { ERROR_MESSAGES, OPINIONS_OPTIONS } from '@/features/user/constants';
import { userOpinionsQuery } from '@/features/user/queries';
import {
  ContentWrapper,
  ErrorMessage,
  OpinionsFormWrapper,
  SelectWrapper,
} from '@/features/user/ui/styles';
import { RefObject, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

interface OpinionsModalProps {
  modalRef: RefObject<HTMLDivElement | null>;
  closeModal: () => void;
  quizzes: Quiz[];
}

export default function OpinionsModal({
  modalRef,
  closeModal,
  quizzes,
}: OpinionsModalProps) {
  const [selectedOption, setSelectedOption] = useState<
    (typeof OPINIONS_OPTIONS)[number]['label'] | '퀴즈'
  >('버그 제보');
  const [customTitle, setCustomTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [quizInfo, setQuizInfo] = useState('');

  const isQuizPage = useLocation().pathname === '/quiz';

  const { mutate: createOpinions } = userOpinionsQuery.useCreateOpinions();

  const getTitle = () => {
    const titleMap: Record<string, string> = {
      '직접 입력': customTitle,
      퀴즈: quizInfo,
    };

    return titleMap[selectedOption] || selectedOption;
  };

  const getErrorMessage = () => {
    if (!content) {
      return ERROR_MESSAGES.REQUIRED_CONTENT;
    }
    if (content.length >= 255) {
      return ERROR_MESSAGES.CONTENT_TOO_LONG;
    }

    if (selectedOption === '직접 입력' && !customTitle) {
      return ERROR_MESSAGES.REQUIRED_TITLE;
    }

    if (selectedOption === '퀴즈' && !quizInfo) {
      return ERROR_MESSAGES.REQUIRED_QUIZ;
    }

    return null;
  };

  const validation = () => {
    const errorMessage = getErrorMessage();

    if (errorMessage) {
      setError(errorMessage);
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validation()) {
      return;
    }
    const title = getTitle();

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
            {isQuizPage && <Select.Option value="퀴즈" label="퀴즈" />}
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
      {selectedOption === '퀴즈' && (
        <div>
          <label>퀴즈</label>
          <SelectWrapper>
            <Select
              buttonName={quizInfo.match(/문제 \d+/)?.[0] || '문제 선택'}
              onChange={setQuizInfo}
            >
              {quizzes.map((quiz, index) => (
                <Select.Option
                  value={`파트Id ${quiz.partId} 문제Id ${quiz.id} 문제 ${
                    index + 1
                  }`}
                  label={`문제 ${index + 1}`}
                  key={quiz.id}
                />
              ))}
            </Select>
          </SelectWrapper>
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
