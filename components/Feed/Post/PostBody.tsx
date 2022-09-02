import React, { FC, useState } from "react";
import { Post } from "../../../types/post";
import ImageAndVideoContainer from "./ImageAndVideoContainer";

const PostBody: FC<Post> = (post) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleText = (text: string) => {
    if (text.length <= 140 || showFullText)
      return <div className="w-full">{text}</div>;

    return (
      <div className="w-full">
        <div className="w-full">
          {`${text.slice(0, 141)}`}{" "}
          <a
            className="text-sm cursor-pointer dark:text-gray-400 font-bold hover:underline dark:hover:text-sky-700 hover:text-sky-700 hover:decoration-sky-700"
            onClick={() => setShowFullText(true)}
          >
            ...see more
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col">
      {post.content && (
        <div className="w-full tracking-widest space-x-2 font-normal px-4 py-2 text-base first-line:font-serif first-line:uppercase first-line:tracking-widest first-letter:text-4xl first-letter:font-semibold first-letter:mr-3 first-letter:float-left">
          {handleText(post.content)}
        </div>
      )}
      {(post.imgUrl || post.videoUrl) && (
        <ImageAndVideoContainer
          type={post.imgUrl ? "image" : post.videoUrl ? "video" : "none"}
          videoUrl={post.videoUrl}
          imageUrl={post.imgUrl}
        />
      )}
    </div>
  );
};

export default PostBody;
