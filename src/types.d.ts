// 타입에서 HOC 주입 props를 제거하는 헬퍼 타입
export type SubtractInjectedProps<P, Injected> = Omit<P, keyof Injected>;
