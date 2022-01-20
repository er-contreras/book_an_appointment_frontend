import React from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login';
import Details from './components/Details/Details';
import Upload from './components/Upload';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
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

export default App;
