import Sidebar from './sidebar';
import '../styles/Home.css';
import HomeMainContent from './home_main_content';

const Home = () => (
  <div id="home-page">
    <Sidebar />
    <HomeMainContent />
  </div>
);

export default Home;
