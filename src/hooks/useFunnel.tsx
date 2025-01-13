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
/**
 * `useFunnel` 훅
 *
 * 이 훅은 상태를 기반으로 여러 단계(스텝) 중 하나만 활성화 상태로 렌더링하는 로직을 제공합니다.
 *
 * @template T
 * @param {T} defaultStep - 초기 활성화 스텝.
 * @returns {UseFunnelReturn<T>} 현재 활성화된 스텝을 설정하거나 렌더링하는 로직 제공.
 * @example 
         const { Funnel, setStep } = useFunnel('로그인 유도');
         <Funnel>
          <Funnel.Step name="로그인 유도">
            <GoToLogin setStep={setStep} />
          </Funnel.Step>
          <Funnel.Step name="로그인">
            <Login closeModal={closeModal} openModal={noop} />
          </Funnel.Step>
        </Funnel>
 */
const useFunnel = <T,>(defaultStep: T): UseFunnelReturn<T> => {
  const [step, setStep] = useState<T>(defaultStep);

  /**
   * `Step` 컴포넌트
   *
   * 각 스텝의 내용을 정의하는 컴포넌트입니다.
   *
   * @param {StepProps} props - 스텝의 이름과 내용을 받습니다.
   * @returns {ReactNode} 스텝의 내용을 렌더링합니다.
   */
  const Step: FC<StepProps> = ({ children }) => {
    return children;
  };

  /**
   * `Funnel` 컴포넌트
   *
   * 현재 활성화된 스텝만 렌더링합니다.
   *
   * @param {FunnelProps} props - `Step` 컴포넌트 배열을 받습니다.
   * @returns {ReactNode | null} 현재 활성화된 스텝의 내용을 렌더링하거나 없으면 null 반환.
   */
  const Funnel: FunnelComponent = ({ children }) => {
    const currentStep = children.find(
      (child: ReactNode) =>
        isValidElement(child) && (child.props as StepProps).name === step
    );
    return currentStep || null;
  };

  Funnel.Step = Step;
  return { setStep, Funnel };
};
export default useFunnel;
