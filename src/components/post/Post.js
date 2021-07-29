import React from "react";
import "./Post.css";
import InputOption from "../inputOption/InputOption";

//Icons import
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function Posts({ name, message, photoUrl }) {
  const user = useSelector(selectUser);

  return (
    <div className="post">
      <div className="post-header">
        <Avatar src={user.photoURL}>{user?.email[0]}</Avatar>

        <div className="post-info">
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message} </p>
        <img src={photoUrl} alt="" />
      </div>

      <div className="post-buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={MessageOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Posts;
