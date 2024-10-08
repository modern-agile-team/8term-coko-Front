import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main/Main';
import Quest from '../pages/Quest/Quest';
import Ranking from '../pages/Ranking/Ranking';
import Quiz from '../pages/Quiz/Quiz';
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/quest" element={<Quest />}></Route>
          <Route path="/Ranking" element={<Ranking />}></Route>
          <Route path="/Quiz/:section/:part" element={<Quiz />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
