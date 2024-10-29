import React from "react";

type Props = {
  videoSource: string;
  caption: string;
};

const VideoCard = ({ caption, videoSource }: Props) => {
  return (
    <div className="space-y-4">
      <video className="w-full rounded-3xl" controls>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <p className="text-base text-gray-400 text-center">{caption}</p>
    </div>
  );
};

export default VideoCard;
