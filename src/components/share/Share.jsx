import "./_share.scss";

import person1 from "../../assets/person/1.jpeg";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

const Share = () => {
  return (
    <div className="share">
      <div className="share__container">
        <div className="share__top">
          <img className="profile-img" src={person1} alt="share Profile" />
          <input
            type="text"
            placeholder="What's in your mind?"
            className="share-input"
          />
        </div>
        <div className="share__bottom">
          <div className="share__options">
            <div className="share-option">
              <PermMedia htmlColor="tomato" className="share-icon" />
              <span className="share-option__text">Photo or Video</span>
            </div>
            <div className="share-option">
              <Label htmlColor="blue" className="share-icon" />
              <span className="share-option__text">Tag</span>
            </div>
            <div className="share-option">
              <Room htmlColor="green" className="share-icon" />
              <span className="share-option__text">Location</span>
            </div>
            <div className="share-option">
              <EmojiEmotions htmlColor="goldenrod" className="share-icon" />
              <span className="share-option__text">Feelings</span>
            </div>
          </div>
          <button className="btn">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
