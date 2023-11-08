import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {

  return (
    <div>
      <div className={s.item}>
        <img
          src="https://w7.pngwing.com/pngs/948/148/png-transparent-computer-icons-user-avatar-avatar-heroes-monochrome-silhouette.png"
          alt="e"
        />
        {props.message}
        <div style={{color:'lightblue'}}>
          <span style={{color:'pink'}}>like</span> {props.likeCount}
        </div>
      </div>
    </div>
  );
};

export default Posts;
