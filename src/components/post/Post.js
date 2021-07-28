import React from "react";
import "./Post.css";
import InputOption from "../inputOption/InputOption";

//Icons import
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

function Posts({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGAjDXIMzV7Ig/profile-displayphoto-shrink_200_200/0/1615268128311?e=1632355200&v=beta&t=NS-OqRRZJL8m4HXmQlbGwoCQ2gOCl3LEUJW9OB8ODD4" />
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
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
