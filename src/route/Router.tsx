import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import NotFound from '@features/error/ui/NotFound';
import QuizTutorial from '@/pages/quiz/tutorial/QuizTutorial';
import QuizErrorBoundary from '@/features/error/ui/QuizErrorBoundary';
import Intro from '@/pages/intro/Intro';

const Learn = lazy(() => import('@/pages/learn/Learn'));
const Quest = lazy(() => import('@/pages/quest/Quest'));
const Ranking = lazy(() => import('@/pages/ranking/Ranking'));
const Quiz = lazy(() => import('@/pages/quiz/Quiz'));
const Store = lazy(() => import('@/pages/store/Store'));
const Profile = lazy(() => import('@/pages/profile/Profile'));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/intro" />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/quest" element={<Quest />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="intro" element={<Intro />} />
      <Route
        path="/quiz"
        element={
          <QuizErrorBoundary>
            <Quiz />
          </QuizErrorBoundary>
        }
      />
      <Route path="/store" element={<Store />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/quiz/tutorial" element={<QuizTutorial />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
