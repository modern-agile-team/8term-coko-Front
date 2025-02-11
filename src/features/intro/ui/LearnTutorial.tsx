import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LEARN_TUTORIAL_STEP } from '@/features/intro/constants';
import FocusedItem from '@/features/intro/ui/FocusedItem';
import useFunnel from '@/hooks/useFunnel';

export default function LearnTutorial() {
  const { Funnel, setStep, step } = useFunnel('전체 & 파트 진행도 설명');
  const navigate = useNavigate();

  useEffect(() => {
    if (step === '') {
      navigate('/quiz/tutorial');
    }
  }, [step]);

  return (
    <Funnel>
      {LEARN_TUTORIAL_STEP.map(step => (
        <Funnel.Step name={step.name} key={step.name}>
          <FocusedItem
            id={step.id}
            description={step.description}
            onNext={() => setStep(step.nextStep)}
          />
        </Funnel.Step>
      ))}
    </Funnel>
  );
}
