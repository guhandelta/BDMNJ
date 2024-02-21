"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  //video path
    let videosrc = "/videos/meeting.mp4";

    return (
    <div>
        <h1>BDM</h1>
        <ReactPlayer
            width="1920px"
            height="1080px"
            className="mt-36"
            controls={false}
            url={videosrc}
            playing={true}
            loop={true}
            // light is usefull incase of dark mode
            light={false}
            // picture in picture
            pip={true}
        />
        <source src={videosrc} type="video/mp4" />
    </div>
    );
};

export default VideoPlayer;