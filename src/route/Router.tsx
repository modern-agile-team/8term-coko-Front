import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import NotFound from '@features/error/ui/NotFound';

const Learn = lazy(() => import('@/pages/learn/Learn'));
const Quest = lazy(() => import('@/pages/quest/Quest'));
const Ranking = lazy(() => import('@/pages/ranking/Ranking'));
const Quiz = lazy(() => import('@/pages/quiz/Quiz'));
const Store = lazy(() => import('@/pages/store/Store'));
const Profile = lazy(() => import('@/pages/profile/Profile'));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/learn" />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/quest" element={<Quest />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/store" element={<Store />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
