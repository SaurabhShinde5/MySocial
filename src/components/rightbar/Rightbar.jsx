import "./_rightbar.scss";

import bday from "../../assets/gift.png";
import ad from "../../assets/ad.png";
import { Users } from "../../dummyData";
import { Online } from "../index";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
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
      </div>
    </div>
  );
};

export default Rightbar;
