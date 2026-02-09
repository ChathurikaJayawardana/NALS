import { FiSearch } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className="header-right">
        <div className="search">
          <input type="text" placeholder="Search" />
          <FiSearch />
        </div>

        <FontAwesomeIcon icon={faBell} className="header-icon" />
        <FontAwesomeIcon icon={faComment} className="header-icon" />
        <FontAwesomeIcon icon={faUser} className="header-icon user-icon" />
      </div>
    </header>
  );
};

export default Header;
