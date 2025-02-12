import { useEffect } from 'react';
import { LEARN_TUTORIAL_STEP } from '@/features/intro/constants';
import FocusedItem from '@/features/intro/ui/FocusedItem';
import useFunnel from '@/hooks/useFunnel';

interface LearnTutorialProps {
  onStepChange?: (step: string) => void;
}

export default function LearnTutorial({ onStepChange }: LearnTutorialProps) {
  const { Funnel, setStep, step } = useFunnel('전체 & 파트 진행도 설명');

  // step이 바뀔 때마다 상위로 전달
  useEffect(() => {
    onStepChange?.(step);
  }, [step, onStepChange]);

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
