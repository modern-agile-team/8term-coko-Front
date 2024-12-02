import { ReactNode, isValidElement, FC, useState } from 'react';
//Step 컴포넌트의 프롭스 타입
//name과 children을 받는다
type StepProps = {
  name: string;
  children: ReactNode;
};

//Funnel 컴포넌트의 Props 타입
//ReactNode [] 타입을 받는다.
interface FunnelProps {
  children: ReactNode[];
}

//FunnelComponent  FC<FunnelProps> 타입을 상속받음으로써
// 함수형 컴포넌트임을 알리고 props를  children: ReactNode[]타입 으로 지정
interface FunnelComponent extends FC<FunnelProps> {
  Step: FC<StepProps>;
}

type UseFunnelReturn<T> = {
  setStep: (step: T) => void;
  Funnel: FunnelComponent;
};

const useFunnel = <T,>(defaultStep: T): UseFunnelReturn<T> => {
  const [step, setStep] = useState<T>(defaultStep);

  const Step: FC<StepProps> = ({ children }) => {
    return children;
  };

  const Funnel: FunnelComponent = ({ children }) => {
    const currentStep = children.find(
      (child: ReactNode) => isValidElement(child) && child.props.name === step
    );
    return currentStep || null;
  };

  Funnel.Step = Step;
  return { setStep, Funnel };
};
export default useFunnel;
