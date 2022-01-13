import '../styles/Sidebar.css';

const Sidebar = () => (
  <div id="sidebar-page">
    <div id="sidebar-content">
      <div>
        <h2>Yachts!</h2>
      </div>

      <ul className="navigation-panel">
        <li>Yacht</li>
        <li>Reserve form</li>
        <li>My Reservations</li>
        <li>Add Yacht</li>
        <li>Delete Yacht</li>
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
  </div>
);

export default Sidebar;
