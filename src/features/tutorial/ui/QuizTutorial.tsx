import { Quiz } from '@/features/quiz/types';
import { CATEGORY_STEP, TUTORIAL_STEP } from '@/features/tutorial/constants';
import FocusedItem from '@/features/tutorial/ui/FocusedItem';
import useFunnel from '@/hooks/useFunnel';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

interface QuizTutorialProps {
  category: Quiz['category'];
}
export default function QuizTutorial({ category }: QuizTutorialProps) {
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
        {TUTORIAL_STEP.map(step => (
          <Funnel.Step name={step.name} key={step.name}>
            <FocusedItem
              id={step.id}
              onNext={() => setStep(step.nextStep)}
              description={step.description}
            />
          </Funnel.Step>
        ))}
      </Funnel>
    </>
  );
}
