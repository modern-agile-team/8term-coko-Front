import { Quiz } from '@/features/quiz/types';
import { CATEGORY_STEP } from '@/features/tutorial/constants';
import FocusedItem from '@/features/tutorial/ui/FocusedItem';
import useFunnel from '@/hooks/useFunnel';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

interface QuizTourProps {
  category: Quiz['category'];
}
export default function QuizTour({ category }: QuizTourProps) {
  const { Funnel, setStep, step } = useFunnel('진행도 설명1');
  useEffect(() => {
    if (step === '' && category === 'COMBINATION') {
      toast('직접 문제를 풀어보세요!');
    }
  }, [step]);

  useEffect(() => {
    if (category !== 'COMBINATION') {
      setStep(CATEGORY_STEP[category]);
    }
  }, [category]);

  return (
    <>
      <Funnel>
        <Funnel.Step name="진행도 설명1">
          <FocusedItem
            id="progress-bar"
            onNext={() => setStep('진행도 설명2')}
            description="이건 진행바야"
          />
        </Funnel.Step>
        <Funnel.Step name="진행도 설명2">
          <FocusedItem
            id="progress-bar"
            onNext={() => setStep('목숨 설명')}
            description={`얼마나 문제를 풀었고 
            얼마나 남았는지 알 수 있지`}
          />
        </Funnel.Step>
        <Funnel.Step name="목숨 설명">
          <FocusedItem
            id="header-item-과일바구니"
            onNext={() => setStep('포인트 설명')}
            description={`이 과일은 목숨이고
            문제를 틀리면 하나씩 감소해`}
          />
        </Funnel.Step>
        <Funnel.Step name="포인트 설명">
          <FocusedItem
            id="header-item-포인트"
            onNext={() => setStep('조합형 설명')}
            description="이건 포인트야"
          />
        </Funnel.Step>
        <Funnel.Step name="조합형 설명">
          <FocusedItem
            id="combination"
            onNext={() => setStep('스킵 설명')}
            description={`조합형의 문제는 요소를 클릭하거나
            마우스로 끌어다 놓으면 돼!`}
          />
        </Funnel.Step>
        <Funnel.Step name="스킵 설명">
          <FocusedItem
            id="skip-button"
            onNext={() => setStep('제출 설명')}
            description={`스킵 버튼으로 
            모르는 문제는 넘길 수 있어!`}
          />
        </Funnel.Step>
        <Funnel.Step name="제출 설명">
          <FocusedItem
            id="submit-button"
            onNext={() => setStep('')}
            description="답을 입력하고 이 버튼을 누르면
            다음 문제로 넘어가"
          />
        </Funnel.Step>
        <Funnel.Step name="객관식 설명">
          <FocusedItem
            id="multiple-choice"
            onNext={() => setStep('')}
            description="객관식 문제는 4지선다형으로
            문제에 맞는 답을 선택하면 돼!"
          />
        </Funnel.Step>
        <Funnel.Step name="OX 설명">
          <FocusedItem
            id="ox-selector"
            onNext={() => setStep('')}
            description="문제를 보고 O랑 X중에 옳은것을 선택하면 돼!"
          />
        </Funnel.Step>
        <Funnel.Step name="단답형 설명">
          <FocusedItem
            id="short-answer"
            onNext={() => setStep('')}
            description="단답형 문제는 여기에 정답을 써넣으면 돼!"
          />
        </Funnel.Step>
      </Funnel>
    </>
  );
}
