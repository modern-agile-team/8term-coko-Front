import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main/Main';
import Quest from '../pages/Quest/Quest';
import Ranking from '../pages/Ranking/Ranking';
import Quiz from '../pages/Quiz/Quiz';
import Admin from '../admin/Admin';
import CreateQuiz from '../admin/CreateQuiz';
import Login from '../pages/login/login';
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/quest" element={<Quest />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
          <Route path="/quiz/:section/:part" element={<Quiz />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/*어드민 페이지 부분 문제조회/추가 이외에 규모 확장 시 레포 분리 */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/create-quiz" element={<CreateQuiz />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
