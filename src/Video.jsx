import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hS_WqkyUah8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="text_wrap">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dignissimos ipsa rem, alias delectus, consectetur voluptate veniam vel
          quae eveniet dolor exercitationem quaerat? Aliquam error magnam, fuga
          nostrum sint voluptas.
        </p>
      </div>
    </div>
  );
}

export default Video;
