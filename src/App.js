import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Yachts from './components/yachts';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Yachts />} />
    </Routes>
  );
}

export default App;
