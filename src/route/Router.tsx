import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import NotFound from '@features/error/ui/NotFound';
import QuizTutorialPage from '@/pages/quiz/tutorial/QuizTutorialPage';
import LearnTutorialPage from '@/pages/learn/tutorial/LearnTutorialPage';
import QuizErrorBoundary from '@/features/error/ui/QuizErrorBoundary';
import Intro from '@/pages/intro/Intro';

const LoginPage = lazy(() => import('@/pages/login/LoginPage'));
const Learn = lazy(() => import('@/pages/learn/Learn'));
const Quest = lazy(() => import('@/pages/quest/Quest'));
const Ranking = lazy(() => import('@/pages/ranking/Ranking'));
const Quiz = lazy(() => import('@/pages/quiz/Quiz'));
const Store = lazy(() => import('@/pages/store/Store'));
const Profile = lazy(() => import('@/pages/profile/Profile'));

const getInitialRoute = () => {
  const visited = localStorage.getItem('visited');

  if (!visited) {
    localStorage.setItem('visited', 'true');
    return '/intro';
  }
  return '/learn';
};

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={getInitialRoute()} />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/quest" element={<Quest />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/login" element={<LoginPage />} />
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
      <Route path="/quiz/tutorial" element={<QuizTutorialPage />} />
      <Route path="/learn/tutorial" element={<LearnTutorialPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
