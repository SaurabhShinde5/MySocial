import "./_profile.scss";

import { Topnav, Sidebar, Feed, Rightbar } from "../../components";

import coverImg from "../../assets/post/3.jpeg";
import userImg from "../../assets/person/1.jpeg";

const Profile = () => {
  return (
    <>
      <Topnav />
      <div className="profile">
        <Sidebar />
        <div className="profile__right">
          <div className="profile__right-top">
            <div className="profile__cover">
              <img
                className="profile__cover__img"
                src={coverImg}
                alt="profile cover"
              />
              <img
                className="profile__user__img"
                src={userImg}
                alt="user profile"
              />
            </div>
            <div className="profile__info">
              <h4 className="profile__info--name">Saurabh Shinde</h4>
              <span className="profile__info--desc">Hello World!</span>
            </div>
          </div>
          <div className="profile__right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
