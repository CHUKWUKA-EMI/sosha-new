import { Transition, Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import React, { FC, Fragment } from "react";

import { validateVideoUrl } from "../../utils/validateVideoUrl";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import TextField from "../TextFields/TextField";
import ImageAndVideoPreview from "./ImageAndVideoPreview";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  forwardUrl?: () => void;
  videoUrl: string;
  setVideoUrl: (videoUrl: string) => void;
  canPreview: boolean;
  setCanPreview: (canPreview: boolean) => void;
  error?: string;
  setError?: (error: string) => void;
  parent: string;
  clear?: () => void;
}

const VideoUploadModal: FC<IProps> = ({
  isOpen,
  closeModal,
  videoUrl,
  setCanPreview,
  canPreview,
  error,
  setError,
  setVideoUrl,
  parent,
  forwardUrl,
  clear,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      const result = validateVideoUrl(e.target.value);
      if (!result.isValid) {
        setError && setError("Invalid or unsupported video url");
        setCanPreview(false);
        clearError();
        return;
      }

      setVideoUrl(result.url);
      setCanPreview(true);
      setError && setError("");
    }, 3000);
  };

  function clearError() {
    setTimeout(() => setError && setError(""), 2000);
  }

  const handleUpload = () => {
    if (parent !== "feed") return forwardUrl && forwardUrl();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[5] w-[90%]" onClose={closeModal}>
        <div
          className="fixed inset-0 opacity-80 bg-gray-800"
          aria-hidden="true"
        />
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="fixed inset-0 overflow-y-auto w-full">
            <div className="flex min-h-full items-center justify-center p-4 text-center w-full min-w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full -mt-[1rem] h-[80%] min-h-[60%] min-w-[100%] sm:min-w-[60%] lg:min-w-[50%] max-w-[40%] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center px-6 py-2 justify-between border-b-[1px] border-gray-500 mb-2 text-sky-900"
                  >
                    <span className="text-lg text-center font-bold">
                      Embed a video
                    </span>

                    <div className="col-span-1">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="w-fit h-fit p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        <XIcon className="w-6 h-6" />
                      </button>
                    </div>
                  </Dialog.Title>
                  <form className="w-full p-4">
                    {error && (
                      <span className="text-sm font-semibold text-red-400">
                        {error}
                      </span>
                    )}
                    <TextField
                      onChange={handleChange}
                      type="url"
                      fullWidth
                      placeholder="Enter a youtube video url"
                    />
                    {videoUrl && canPreview && (
                      <div className="h-[20rem] w-full">
                        <ImageAndVideoPreview
                          type="video"
                          videoStr={videoUrl && canPreview ? videoUrl : ""}
                          clearPreview={clear}
                        />
                      </div>
                    )}
                    <div className="w-full pt-4 flex items-center justify-end gap-3">
                      <SecondaryButton
                        onClick={closeModal}
                        className="rounded-full"
                      >
                        Cancel
                      </SecondaryButton>
                      <PrimaryButton
                        onClick={handleUpload}
                        className="rounded-full"
                      >
                        {parent === "feed" ? "Post" : "Continue"}
                      </PrimaryButton>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VideoUploadModal;
