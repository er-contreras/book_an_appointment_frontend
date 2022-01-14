import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/login';
import Details from './components/Details/details';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
