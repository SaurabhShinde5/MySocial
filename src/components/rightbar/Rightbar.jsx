import "./_rightbar.scss";

import bday from "../../assets/gift.png";
import ad from "../../assets/ad.png";
import { Users } from "../../dummyData";
import { Online } from "../index";
import friend1 from "../../assets/person/4.jpeg";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday__container">
          <img className="birthday__img" src={bday} alt="birthday gift box" />
          <span className="birthday__text">
            <strong> Naruto Uzumaki</strong> and
            <strong> 3 other friends </strong> have a birthday today
          </span>
        </div>
        <img className="rightbar-ad-img" src={ad} alt="advertisement" />
        <h4 className="rightbar__title">Online Friends</h4>
        <ul className="rightbar__friend-list">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar__title">User information</h4>
        <div className="rightbar__info">
          <div className="rightbar__info-item">
            <span className="rightbar__info-item--key">City: </span>
            <span className="rightbar__info-item--value">Pune</span>
          </div>
          <div className="rightbar__info-item">
            <span className="rightbar__info-item--key">From:</span>
            <span className="rightbar__info-item--value">India</span>
          </div>
          <div className="rightbar__info-item">
            <span className="rightbar__info-item--key">Status:</span>
            <span className="rightbar__info-item--value">Single</span>
          </div>
        </div>
        <h4 className="rightbar__title">User friends</h4>
        <div className="rightbar__followings">
          <div className="rightbar__following">
            <img
              src={friend1}
              alt="user followings"
              className="rightbar__following--image "
            />
            <span className="rightbar__following--name">John Doe</span>
          </div>
          <div className="rightbar__following">
            <img
              src={friend1}
              alt="user followings"
              className="rightbar__following--image "
            />
            <span className="rightbar__following--name">John Doe</span>
          </div>
          <div className="rightbar__following">
            <img
              src={friend1}
              alt="user followings"
              className="rightbar__following--image "
            />
            <span className="rightbar__following--name">John Doe</span>
          </div>
          <div className="rightbar__following">
            <img
              src={friend1}
              alt="user followings"
              className="rightbar__following--image "
            />
            <span className="rightbar__following--name">John Doe</span>
          </div>
          <div className="rightbar__following">
            <img
              src={friend1}
              alt="user followings"
              className="rightbar__following--image "
            />
            <span className="rightbar__following--name">John Doe</span>
          </div>
          <div className="rightbar__following">
            <img
              src={friend1}
              alt="user followings"
              className="rightbar__following--image "
            />
            <span className="rightbar__following--name">John Doe</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
