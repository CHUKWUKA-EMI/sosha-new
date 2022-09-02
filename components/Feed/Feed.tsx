import React, { FC, useState } from "react";
import Avatar from "../Avatar";
import PhotographIcon from "@heroicons/react/solid/PhotographIcon";
import VideoIcon from "../VideoIcon";
import { CreatePostModal } from "./CreatePostModal";
import { useAppDispatch } from "../../state/hooks";
import { setOpenPostModal } from "../../state/postsReducers";
import VideoUploadModal from "./VideoUploadModal";
import UserInfo from "./UserInfo";
import Posts from "./Posts";

const Feed: FC = () => {
  const dispatch = useAppDispatch();
  const [openVideoUpload, setOpenVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [canPreviewVideo, setCanPreviewVideo] = useState(false);
  const [error, setError] = useState("");

  function openPostModal() {
    dispatch(setOpenPostModal("desktop"));
  }

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("image", e.target.files);
  };

  const closeVideoModal = () => {
    setOpenVideoModal(false);
    setVideoUrl("");
  };

  return (
    <div className="w-full xs:px-4 sm:px-8 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-stretch">
      <CreatePostModal />
      <VideoUploadModal
        parent="feed"
        canPreview={canPreviewVideo}
        setCanPreview={setCanPreviewVideo}
        setVideoUrl={setVideoUrl}
        videoUrl={videoUrl}
        error={error}
        setError={setError}
        isOpen={openVideoUpload}
        closeModal={closeVideoModal}
      />
      <div className="hidden sm:block w-full">
        <UserInfo />
      </div>
      <div className="md:col-span-2">
        <div className="hidden sm:block dark:bg-[#1d2226] bg-white shadow-sm shadow-gray-500 dark:shadow-gray-700 w-full rounded-lg py-1">
          <div className="flex items-center w-full gap-2 mx-auto p-2">
            <Avatar className="h-12 w-12" />
            <button
              onClick={openPostModal}
              className="w-full text-left dark:text-white dark:border dark:border-gray-400 dark:hover:bg-gray-400 hover:bg-gray-200 dark:bg-inherit bg-gray-100 pl-3 rounded-full h-12"
            >
              What&apos;s on your mind?
            </button>
          </div>
          <div className="flex items-center justify-around py-1">
            <input
              id="image-input"
              accept="image/*"
              name="image"
              onChange={handleImage}
              className="hidden"
              type="file"
            />
            <label htmlFor="image-input">
              <span className="text-sky-700 dark:text-sky-500 cursor-pointer flex items-center gap-1">
                <PhotographIcon className="h-8 w-8" />
                <span className="text-sky-800 dark:text-white font-semibold">
                  Photo
                </span>
              </span>
            </label>

            <button
              onClick={() => setOpenVideoModal(true)}
              className="text-sky-700 dark:text-sky-500 flex items-center gap-1"
            >
              <VideoIcon />
              <span className="text-sky-800 dark:text-white font-semibold">
                Video
              </span>
            </button>
          </div>
        </div>
        <Posts />
      </div>
      <div className="hidden lg:block w-full">right</div>
    </div>
  );
};

export default Feed;
