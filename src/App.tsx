import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Route as RoutePage } from './pages/Route';
import { ExitDetail } from './pages/ExitDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/route" element={<RoutePage />} />
        <Route path="/exit/:exitId" element={<ExitDetail />} />
      </Routes>
    </Router>
  );
}

export default App;