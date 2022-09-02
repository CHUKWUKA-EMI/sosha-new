import { Dialog, Transition } from "@headlessui/react";
import { PhotographIcon, XIcon } from "@heroicons/react/solid";
import { FC, Fragment, PropsWithChildren, useRef, useState } from "react";
import Avatar from "../Avatar";
import PrimaryButton from "../Buttons/PrimaryButton";
import Emojis from "../Emojis";
import TextArea from "../TextFields/TextArea";
import VideoIcon from "../VideoIcon";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { setOpenPostModal } from "../../state/postsReducers";
import ImageAndVideoPreview from "./ImageAndVideoPreview";
import { PostInitialState, Preview, PreviewType } from "../../types/post";
import VideoUploadModal from "./VideoUploadModal";
import SecondaryButton from "../Buttons/SecondaryButton";
import { EmojiHappyIcon } from "@heroicons/react/outline";

interface IProps extends PropsWithChildren {}

export const CreatePostModal: FC<IProps> = ({}) => {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector(
    (state) => state.posts.openPostModalDesktop
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef(null);

  const [post, setPost] = useState<PostInitialState>({
    content: "",
    image: null,
    video: null,
  });
  const [showPreview, setShowPreview] = useState<Preview>({
    type: "none",
    show: false,
  });
  const [openEmoji, setOpenEmoji] = useState(false);
  const [imageStr, setImageStr] = useState<string | null | undefined>(null);
  const [openVideoUpload, setOpenVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [canPreviewVideo, setCanPreviewVideo] = useState(false);
  const [error, setError] = useState("");

  const handleClick = () => {
    inputRef.current?.click();
  };

  const closeModal = () => {
    dispatch(setOpenPostModal("none"));
    if (imageStr) {
      URL.revokeObjectURL(imageStr);
    }
    if (showPreview) setShowPreview({ show: false, type: "none" });
    setPost({ content: "", image: null, video: null });
    setOpenEmoji(false);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const previewUrl = URL.createObjectURL(e.target.files[0]);
      setImageStr(previewUrl);
      setShowPreview({ show: true, type: "image" });
    }
  };

  const closeVideoModal = () => {
    setOpenVideoModal(false);
    setVideoUrl("");
  };

  const forwardUrl = () => {
    setPost({ ...post, video: videoUrl });
    setShowPreview({ show: true, type: "video" });
    setOpenVideoModal(false);
    setVideoUrl("");
  };

  const clearPreview = () => {
    setPost({ ...post, video: "", image: null });
    setImageStr("");
    setShowPreview({ show: false, type: "none" });
  };

  return (
    <Transition appear show={modalState} as={Fragment}>
      <Dialog
        as="div"
        initialFocus={closeButtonRef}
        className="relative z-[5] w-[90%] hidden sm:block"
        onClose={closeModal}
      >
        <div
          className="fixed inset-0 opacity-60 bg-gray-600"
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
        <VideoUploadModal
          parent="none"
          canPreview={canPreviewVideo}
          setCanPreview={setCanPreviewVideo}
          setVideoUrl={setVideoUrl}
          videoUrl={videoUrl}
          error={error}
          setError={setError}
          isOpen={openVideoUpload}
          closeModal={closeVideoModal}
          forwardUrl={forwardUrl}
          clear={clearPreview}
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="fixed inset-0 overflow-y-auto w-full">
            <div className="flex inset-0 w-screen min-h-screen justify-center p-4 min-w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[60%] lg:w-[45%] mt-[3.5rem] h-[70%] min-h-[60%] max-h-[70%] min-w-[70%] lg:min-w-[40%] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center px-6 py-2 justify-between sm:grid sm:grid-cols-3 border-b-[1px] border-gray-500 mb-2 text-sky-900"
                  >
                    <span className="text-lg text-center font-bold col-span-2 pl-[50%]">
                      Create Post
                    </span>

                    <div className="col-span-1 pl-[90%]">
                      <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={closeModal}
                        className="w-fit h-fit p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        <XIcon className="w-6 h-6" />
                      </button>
                    </div>
                  </Dialog.Title>
                  <form className="w-full p-4 relative">
                    <div className="flex items-center gap-2 pb-2">
                      <Avatar className="h-8 w-8" />
                      <span className="font-semibold">Chukwuka Emi</span>
                    </div>
                    <div className="w-full h-[20rem] pb-4 overflow-y-auto">
                      <TextArea
                        className="w-full sm:h-auto placeholder:text-gray-500 placeholder:text-xl"
                        placeholder="What's on your mind?"
                      />
                      {showPreview.show && (imageStr || post.video) && (
                        <div className="w-full h-full">
                          <ImageAndVideoPreview
                            type={showPreview.type}
                            videoStr={post.video}
                            imageStr={imageStr}
                            clearPreview={clearPreview}
                          />
                        </div>
                      )}
                    </div>
                    <div className="bg-white h-2 w-full mt-2 mb-20" />
                    <div className="flex flex-col px-4 mt-4 fixed left-0 right-0 bottom-0 opacity-100 bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex text-sm items-center gap-3 w-full">
                          <input
                            ref={inputRef}
                            id="image-input"
                            accept="image/*"
                            onChange={handleImage}
                            name="image"
                            className="hidden"
                            type="file"
                          />

                          <button
                            onClick={handleClick}
                            type="button"
                            className="text-sky-700 flex items-center gap-1 tooltip-target"
                          >
                            <PhotographIcon className="h-8 w-8" />
                            <span className="tooltiptext">Photo</span>
                          </button>

                          <button
                            onClick={() => setOpenVideoModal(true)}
                            type="button"
                            className="text-sky-700 flex items-center gap-1 tooltip-target"
                          >
                            <VideoIcon />
                            <span className="tooltiptext">Video</span>
                          </button>
                        </div>

                        <div className="z-40">
                          <Emojis
                            top={0}
                            isPopoverOpen={openEmoji}
                            setIsPopoverOpen={setOpenEmoji}
                          />
                        </div>
                      </div>
                      <PrimaryButton
                        type="submit"
                        disabled
                        fullWidth
                        className="rounded-md mt-3 mb-3"
                      >
                        Post
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
