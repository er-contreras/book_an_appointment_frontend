import '../styles/Sidebar.css';

const Sidebar = () => (
  <div id="sidebar-content">
    <div className="navigation-title">
      <h2>Yachts!</h2>
    </div>

    <ul className="navigation-panel">
      <li>YACHTS</li>
      <li>RESERVE FORM</li>
      <li>MY RESERVATIONS</li>
      <li>ADD YACHT</li>
      <li>DELETE YACHT</li>
    </ul>

    <div className="bottom-panel">
      <ul className="icons-panel">
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Google</li>
        <li>Vimeo</li>
        <li>Pinterest</li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
