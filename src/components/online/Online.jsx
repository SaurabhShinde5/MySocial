import "./_online.scss";

const Online = ({ user }) => {
  return (
    <li className="rightbar-friend">
      <div className="rightbar__profile-img__container">
        <img
          className="profile-img"
          src={user.profilePicture}
          alt="friend profile"
        />
        <span className="rightbar-online"></span>
      </div>
      <span className="rightbar__profile-username">{user.username}</span>
    </li>
  );
};

export default Online;
