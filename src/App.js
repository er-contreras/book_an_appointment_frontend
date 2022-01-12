import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Yachts from './components/yachts';
import Login from './components/login';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Yachts />} />
    </Routes>
  );
}

export default App;
