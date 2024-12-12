import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Store from '@/pages/store/Store';
import Learn from '@/pages/learn/Learn';
import Quest from '@/pages/quest/Quest';
import Ranking from '@/pages/ranking/Ranking';
import Quiz from '@/pages/quiz/Quiz';
import Profile from '@/pages/profile/Profile';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/learn" />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/store" element={<Store />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
