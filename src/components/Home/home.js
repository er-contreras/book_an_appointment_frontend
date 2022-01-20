import React from 'react';
import Sidebar from '../Sidebar';
import '../../styles/Home.css';
import HomeMainContent from './HomeMainContent';

const Home = () => (
  <div id="home-page">
    <Sidebar />
    <HomeMainContent />
  </div>
);

export default Home;
