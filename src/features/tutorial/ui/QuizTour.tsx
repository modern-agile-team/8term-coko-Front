import { Quiz } from '@/features/quiz/types';
import { CATEGORY_STEP } from '@/features/tutorial/constants';
import EmphasizedItem from '@/features/tutorial/ui/EmphasizedItem';
import { TutorialOverRayDiv } from '@/features/tutorial/ui/styles';
import useFunnel from '@/hooks/useFunnel';
import useModal from '@/hooks/useModal';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

interface QuizTourProps {
  category: Quiz['category'];
}
export default function QuizTour({ category }: QuizTourProps) {
  const { Funnel, setStep, step } = useFunnel('진행도 설명1');
  const { Modal, closeModal, isShow, openModal } = useModal();

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
      <TutorialOverRayDiv>
        <Funnel>
          <Funnel.Step name="진행도 설명1">
            <EmphasizedItem
              onNext={() => setStep('진행도 설명2')}
              description="이건 진행바야"
              style={{
                width: '60vw',
                height: '23px',
              }}
            />
          </Funnel.Step>
          <Funnel.Step name="진행도 설명2">
            <EmphasizedItem
              onNext={() => setStep('목숨 설명')}
              description="얼마나 문제를 풀었고,
            얼마나 남았는지 알 수 있지"
              style={{
                top: '8%',
                left: '13%',
              }}
            />
          </Funnel.Step>
          <Funnel.Step name="목숨 설명">
            <EmphasizedItem
              onNext={() => setStep('포인트 설명')}
              description="이 과일은 목숨이고
            문제를 틀리면 하나씩 감소해"
              style={{
                top: '5%',
                right: '0.3%',
              }}
            />
          </Funnel.Step>
          <Funnel.Step name="포인트 설명">
            <EmphasizedItem
              onNext={() => setStep('조합형 설명')}
              description="이건 포인트야"
              style={{
                top: '5%',
                right: '8%',
              }}
            />
          </Funnel.Step>
          <Funnel.Step name="조합형 설명">
            <EmphasizedItem
              onNext={() => setStep('스킵 설명')}
              description="'조합형'의 문제는 요소를 클릭하거나
            마우스로 끌어다 놓으면 돼!"
              style={{
                bottom: '8%',
                left: '5%',
              }}
            />
          </Funnel.Step>
          <Funnel.Step name="스킵 설명">
            <EmphasizedItem
              onNext={() => setStep('제출 설명')}
              description="스킵 버튼으로 
            모르는 문제는 넘길 수 있어!"
              style={{
                bottom: '1%',
                left: '10%',
              }}
            />
          </Funnel.Step>
          <Funnel.Step name="제출 설명">
            <EmphasizedItem
              onNext={() => setStep('')}
              description="답을 입력하고 이 버튼을 누르면
            다음 문제로 넘어가"
              style={{
                bottom: '1%',
                right: '18%',
              }}
            />
          </Funnel.Step>
          <Funnel.Step name="객관식 설명">
            <EmphasizedItem
              onNext={() => setStep('')}
              description="객관식 문제는 4지선다형으로
            문제에 맞는 답을 선택하면 돼!"
              style={{
                bottom: '3%',
                left: '26%',
              }}
            />
          </Funnel.Step>
          <Funnel.Step name="OX 설명">
            <EmphasizedItem
              onNext={() => setStep('')}
              description="문제를 보고 O랑 X중에 옳은것을 선택하면 돼!"
              style={{
                bottom: '2%',
                left: '21%',
              }}
            />
          </Funnel.Step>
          <Funnel.Step name="단답형 설명">
            <EmphasizedItem
              onNext={() => setStep('')}
              description="단답형 문제는 여기에 정답을 써넣으면 돼!"
              style={{
                bottom: '2%',
                left: '30%',
              }}
            />
          </Funnel.Step>
        </Funnel>
      </TutorialOverRayDiv>
    </>
  );
}
