import "./_closeFriend.scss";

const CloseFriend = ({ user }) => {
  return (
    <li className="sidebar__friend">
      <img
        className="profile-img"
        src={user.profilePicture}
        alt="close friend in sidebar"
      />
      <span className="sidebar__friend-name">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
