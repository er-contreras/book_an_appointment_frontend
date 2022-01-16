import '../styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import
{
  faTwitter, faFacebook, faGooglePlus, faVimeo, faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
  <div id="sidebar-content">
    <div className="navigation-title">
      <h2>Yachts!</h2>
    </div>

    <ul className="navigation-panel">
      <li className="yachts-background">YACHTS</li>
      <li>RESERVE FORM</li>
      <li>MY RESERVATIONS</li>
      <li>ADD YACHT</li>
      <li>DELETE YACHT</li>
    </ul>

    <div className="bottom-panel">
      <ul className="icons-panel">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faGooglePlus} />
        <FontAwesomeIcon icon={faVimeo} />
        <FontAwesomeIcon icon={faPinterest} />
      </ul>
      <div>
        <FontAwesomeIcon icon={faCopyright} />
        2021 PLAGGIO & C.S.P.A - PIVA
      </div>
    </div>
  </div>
);

export default Sidebar;
