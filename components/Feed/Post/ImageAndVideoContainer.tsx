/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { FC } from "react";

interface IProps {
  type: "image" | "video" | "none";
  imageUrl?: string;
  videoUrl?: string;
}

const ImageAndVideoContainer: FC<IProps> = ({ type, imageUrl, videoUrl }) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        {type === "image" && imageUrl && (
          <img
            placeholder="blur"
            className="w-full h-full"
            alt="image"
            src={imageUrl}
          />
        )}
        {type === "video" && videoUrl && (
          <iframe
            className="w-full h-full flex-auto rounded-md"
            seamless
            src={videoUrl}
            title="YouTube video player"
            frameBorder="none"
            allow="accelerometer; autoplay;camera; clipboard-write; encrypted-media; gyroscope;microphone; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default ImageAndVideoContainer;
