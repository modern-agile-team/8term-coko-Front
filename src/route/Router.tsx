import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main/Main';
import Quest from '../pages/quest/Quest';
import Ranking from '../pages/ranking/Ranking';
import Quiz from '../pages/quiz/Quiz';
import Login from '../pages/login/Login';
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/quest" element={<Quest />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
