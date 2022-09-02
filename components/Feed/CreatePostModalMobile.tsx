import { Dialog, Transition } from "@headlessui/react";
import { PhotographIcon, XIcon } from "@heroicons/react/solid";
import { FC, Fragment, PropsWithChildren, useRef, useState } from "react";
import Avatar from "../Avatar";
import PrimaryButton from "../Buttons/PrimaryButton";
import TextArea from "../TextFields/TextArea";
import VideoIcon from "../VideoIcon";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { setOpenPostModal } from "../../state/postsReducers";
import { PostInitialState, Preview, PreviewType } from "../../types/post";
import VideoUploadModal from "./VideoUploadModal";
import ImageAndVideoPreview from "./ImageAndVideoPreview";
import SecondaryButton from "../Buttons/SecondaryButton";

interface IProps extends PropsWithChildren {}

export const CreatePostModalMobile: FC<IProps> = ({}) => {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector((state) => state.posts.openPostModalMobile);
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
        className="relative z-[1] w-[90%] sm:hidden"
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
        />

        <div className="fixed inset-0 overflow-y-auto w-full">
          <div className="flex min-h-full items-center justify-center text-center w-full min-w-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-screen h-screen min-w-full transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="flex items-center px-6 py-2 justify-between border-b-[1px] border-gray-500 mb-2 text-sky-900"
                >
                  <button ref={closeButtonRef} onClick={closeModal}>
                    <XIcon className="w-6 h-6" />
                  </button>
                  <span className="text-lg text-center font-bold">
                    Create Post
                  </span>
                  <PrimaryButton disabled className="rounded-md mt-4">
                    Post
                  </PrimaryButton>
                </Dialog.Title>
                <form className="w-full p-4">
                  <div className="flex items-center gap-2 pb-2">
                    <Avatar className="h-8 w-8" />
                    <span className="font-semibold">Chukwuka Emi</span>
                  </div>
                  <div className="w-full h-[20rem] pb-4 overflow-y-auto">
                    <TextArea
                      className="w-full placeholder:text-gray-500 placeholder:text-lg"
                      placeholder="What's on your mind?"
                    />
                    {showPreview.show && (imageStr || post.video) && (
                      <div className="h-full w-full">
                        <ImageAndVideoPreview
                          type={showPreview.type}
                          videoStr={post.video}
                          imageStr={imageStr}
                          clearPreview={clearPreview}
                        />
                      </div>
                    )}
                  </div>
                  {/* <span className="bg-white h-1 w-full" /> */}
                  <div className="fixed left-0 right-0 bottom-0 pb-20 opacity-100 bg-white">
                    <div className="flex flex-col text-sm gap-3 w-full">
                      <input
                        ref={inputRef}
                        id="image-input"
                        accept="image/*"
                        name="image"
                        onChange={handleImage}
                        className="hidden"
                        type="file"
                      />

                      <button
                        onClick={handleClick}
                        type="button"
                        className="text-sky-700 cursor-pointer w-fit flex items-center gap-1 tooltip-target"
                      >
                        <PhotographIcon className="h-8 w-8" />
                        <span className="tooltiptext">Photo</span>
                        <span className="text-sky-700 font-bold">
                          Add a photo
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOpenVideoModal(true)}
                        className="text-sky-700 w-fit flex items-center gap-1 tooltip-target"
                      >
                        <VideoIcon />
                        <span className="tooltiptext">Video</span>
                        <span className="text-sky-700 font-bold">
                          Add a video
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
