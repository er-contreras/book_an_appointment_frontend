import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Yachts from './components/yachts';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/home" element={<Yachts />} />
    </Routes>
  );
}

export default App;
