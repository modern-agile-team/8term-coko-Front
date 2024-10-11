import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Learn from './pages/learn/Learn';
import Quest from './pages/Quest/Quest';
import Ranking from './pages/Ranking/Ranking';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/learn" />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/quest" element={<Quest />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
