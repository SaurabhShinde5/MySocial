import "./_post.scss";

import heart from "../../assets/heart.png";
import likes from "../../assets/like.png";
import { MoreVert } from "@mui/icons-material";

import { Users } from "../../dummyData";
import { useState } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top-left">
            <img
              className="profile-img"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="post profile "
            />
            <span className="profile__username">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="post__date">{post.date}</span>
          </div>
          <div className="post__top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{post?.desc}</span>
          <img className="post__img" src={post.photo} alt="random post" />
        </div>
        <div className="post__bottom">
          <div className="post__bottom-left">
            <img
              className="like-icon"
              src={heart}
              onClick={likeHandler}
              alt="Heart icon"
            />
            <img
              className="like-icon"
              src={likes}
              onClick={likeHandler}
              alt="thumbs up icon"
            />
            <span className="like-counter">{like} people liked it</span>
          </div>
          <div className="post__bottom-right">
            <span className="comment-counter">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
