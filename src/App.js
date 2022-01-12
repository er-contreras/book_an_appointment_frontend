import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
