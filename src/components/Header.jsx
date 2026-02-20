import { FiSearch } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();

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
        
        <FontAwesomeIcon
          icon={faComment} className="header-icon"
          onClick={() => navigate("/chat")}
          style={{ cursor: "pointer" }}
        />

        <FontAwesomeIcon
          icon={faUser}
          className="header-icon user-icon"
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </header>
  );
};

export default Header;
