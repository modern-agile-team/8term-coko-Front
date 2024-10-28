import { ReactNode } from 'react';
import { QuizBox } from '../styles';

interface QuizSectionProps {
  children: ReactNode;
}

export default function QuizSection({ children }: QuizSectionProps) {
  return <QuizBox>{children}</QuizBox>;
}
