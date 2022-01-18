import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/login';
import Details from './components/Details/details';
import Upload from './components/upload';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="details" element={<Details />} />
      <Route path="form" element={<Upload />} />

      <Route
        path="*"
        element={(
          <main style={{ padding: '1rem', fontSize: '6rem' }}>
            <p>Theres nothing here!</p>
          </main>
        )}
      />
    </Routes>
  );
}

export default App;
