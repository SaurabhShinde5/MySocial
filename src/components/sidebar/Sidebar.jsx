import "./_sidebar.scss";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";

import { Users } from "../../dummyData";
import { CloseFriend } from "../index";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <RssFeed className="sidebar__icon" />
            <span className="sidebar__list-item__text">Feed</span>
          </li>
          <li className="sidebar__list-item">
            <Chat className="sidebar__icon" />
            <span className="sidebar__list-item__text">Chats</span>
          </li>
          <li className="sidebar__list-item">
            <PlayCircleFilledOutlined className="sidebar__icon" />
            <span className="sidebar__list-item__text">Videos</span>
          </li>
          <li className="sidebar__list-item">
            <Group className="sidebar__icon" />
            <span className="sidebar__list-item__text">Groups</span>
          </li>
          <li className="sidebar__list-item">
            <Bookmark className="sidebar__icon" />
            <span className="sidebar__list-item__text">Bookmarks</span>
          </li>
          <li className="sidebar__list-item">
            <HelpOutline className="sidebar__icon" />
            <span className="sidebar__list-item__text">Questions</span>
          </li>
          <li className="sidebar__list-item">
            <WorkOutline className="sidebar__icon" />
            <span className="sidebar__list-item__text">Jobs</span>
          </li>
          <li className="sidebar__list-item">
            <Event className="sidebar__icon" />
            <span className="sidebar__list-item__text">Event</span>
          </li>
          <li className="sidebar__list-item">
            <School className="sidebar__icon" />
            <span className="sidebar__list-item__text">Courses</span>
          </li>
        </ul>
        <button className="sidebar__button">Show more</button>
        <ul className="sidebar__friend__list">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
