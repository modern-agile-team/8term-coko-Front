import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Learn from '../pages/Learn/Learn';
import Quest from '../pages/Quest/Quest';
import Ranking from '../pages/Ranking/Ranking';
import Admin from '../admin/Admin';
import CreateQuiz from '../admin/CreateQuiz';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/learn" />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/quest" element={<Quest />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
          {/*어드민 페이지 부분 문제조회/추가 이외에 규모 확장 시 레포 분리 */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/create-quiz" element={<CreateQuiz />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
