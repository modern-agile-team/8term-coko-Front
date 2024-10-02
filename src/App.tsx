import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Quest from './pages/Quest/Quest';
import Ranking from './pages/Ranking/Ranking';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/quest" element={<Quest />}></Route>
          <Route path="/Ranking" element={<Ranking />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
