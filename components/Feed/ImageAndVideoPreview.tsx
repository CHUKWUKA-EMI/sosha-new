/* eslint-disable @next/next/no-img-element */
import { XIcon } from "@heroicons/react/outline";
import React, { FC } from "react";

interface IProps {
  type: "image" | "video" | "none";
  imageStr?: string | null;
  videoStr?: string | null;
  clearPreview?: () => void;
}

const ImageAndVideoPreview: FC<IProps> = ({
  type,
  imageStr,
  videoStr,
  clearPreview,
}) => {
  return (
    <div className="w-full h-full p-2 rounded-md border border-gray-400 relative mb-10">
      <button
        type="button"
        onClick={clearPreview}
        className="absolute top-3 shadow-md shadow-gray-500 right-3 bg-white hover:bg-gray-100 text-gray-700 rounded-full w-fit h-fit p-1"
      >
        <XIcon className="w-6 h-6" />
      </button>
      <div className="w-full h-full">
        {type === "image" && imageStr && (
          <img
            className="w-full h-full rounded-md"
            alt="image"
            src={imageStr}
          />
        )}
        {type === "video" && videoStr && (
          <iframe
            className="w-full h-full flex-auto rounded-md"
            seamless
            src={videoStr}
            title="YouTube video player"
            frameBorder="none"
            allow="accelerometer; autoplay;camera; clipboard-write; encrypted-media; gyroscope;microphone; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="w-full flex justify-end"></div>
    </div>
  );
};

export default ImageAndVideoPreview;
