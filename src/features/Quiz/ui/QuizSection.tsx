import { PropsWithChildren } from 'react';
import { QuizBox } from '../styles';

export default function QuizSection({ children }: PropsWithChildren) {
  return <QuizBox>{children}</QuizBox>;
}
