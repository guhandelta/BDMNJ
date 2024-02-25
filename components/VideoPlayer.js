"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  //video path
    let videosrc = "/videos/meeting.mp4";

    return (
        <>
            <ReactPlayer
                width="1700px"
                height="1080px"
                className=""
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
        </>
    );
};

export default VideoPlayer;