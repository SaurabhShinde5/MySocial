import "./_topnav.scss";

import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import Person1 from "../../assets/person/1.jpeg";

const Topnav = () => {
  return (
    <div className="topnav__container">
      <div className="topnav__left">
        <span className="logo">MySocial :)</span>
      </div>
      <div className="topnav__center">
        <div className="search-bar">
          <Search className="search__icon" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="search__input"
          />
        </div>
      </div>
      <div className="topnav__right">
        <div className="topnav__links">
          <span className="topnav__link">Homepage</span>
          <span className="topnav__link">Timeline</span>
        </div>
        <div className="topnav__icons">
          <div className="topnav__icon-item">
            <Person className="icon" />
            <span className="topnav__icon-badge">1</span>
          </div>
          <div className="topnav__icon-item">
            <Chat className="icon" />
            <span className="topnav__icon-badge">2</span>
          </div>
          <div className="topnav__icon-item">
            <Notifications className="icon" />
            <span className="topnav__icon-badge">1</span>
          </div>
        </div>
        <img className="profile-img" src={Person1} alt="topnav profile" />
      </div>
    </div>
  );
};

export default Topnav;
