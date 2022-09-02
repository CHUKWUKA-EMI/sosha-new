import React, { FC, useEffect, useRef, useState } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { Popover } from "react-tiny-popover";
import emojiData, { emojiHeader } from "../utils/emojidata";
import { useEffectOnce } from "./UseEffectOnce";
import { EmojiMapType } from "../types/emoji";
import SearchInput from "./TextFields/SearchInput";

interface IProps {
  isPopoverOpen: boolean;
  setIsPopoverOpen: (isPopoverOpen: boolean) => void;
  position?: "top" | "bottom" | "left" | "right";
  top?: number;
}

const Emojis: FC<IProps> = ({
  isPopoverOpen,
  setIsPopoverOpen,
  position,
  top,
}) => {
  const clickButtonRef = useRef<SVGSVGElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [emojis, setEmojis] = useState<EmojiMapType[]>([]);
  const [selectedEmojiCategory, setSelectedEmojiCategory] = useState<
    string | null
  >("Smileys & people");
  const [pointedEmoji, setPointedEmoji] = useState({
    emoji: "👋",
    description: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setEmojis(emojiData);
    return () => {};
  }, []);

  useEffectOnce(() => {
    clickButtonRef.current?.focus();
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setTimeout(() => {
      const re = new RegExp(e.target.value, "i");
      const searchRes = emojis.filter((em) => {
        if (
          em.categoryName.toLowerCase().match(re) ||
          em.descriptions.join(" ").toLowerCase().match(re) ||
          em.keywords.join(" ").toLowerCase().match(re)
        ) {
          return em;
        }
      });
      // setEmojis(searchRes);
      setSelectedEmojiCategory(searchRes[0]?.categoryName);
      console.log(searchRes);
      console.log(e.target.value);
    }, 1000);
  };

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={[position ?? "top"]}
      containerStyle={{
        zIndex: "40",
        height: "fit-content",
        width: "fit-content",
        top: `${top}px`,
      }}
      onClickOutside={() => setIsPopoverOpen(false)}
      content={() => (
        <div className="flex flex-col w-[20rem] relative basis-auto overflow-x-hidden items-center justify-between h-[25rem] bg-white rounded-lg border border-gray-700 text-black">
          <div className="w-full mb-9 absolute top-0 left-0 right-1 opacity-100 z-40 bg-white">
            <div className="w-[90%] mx-auto py-2">
              <SearchInput
                fullWidth
                value={searchTerm}
                setValue={setSearchTerm}
                onInput={handleSearch}
                placeholder="Search emojis"
                containerStyle="rounded-full border border-gray-600 mx-auto"
                className="rounded-full placeholder:text-gray-600"
              />
            </div>
            <div className="flex items-center pt-1 justify-between w-full border-b border-gray-600">
              {emojiHeader.map((header, i) => (
                <button
                  aria-label={header.name}
                  onClick={() => setSelectedEmojiCategory(header.name)}
                  type="button"
                  key={i}
                  className={`w-fit relative hover:bg-gray-200 h-fit p-3 `}
                >
                  <span className={`font-bold`}>{header.emoji}</span>
                  <div
                    className={`text-lg absolute bottom-0 left-0 right-0 h-[3px] w-full ${
                      selectedEmojiCategory === header.name ? "bg-sky-800" : ""
                    } `}
                  />
                </button>
              ))}
            </div>
            <div className="w-full py-4 px-3 font-medium text-lg text-gray-500 tracking-wider  opacity-100 bg-white">
              {selectedEmojiCategory}
            </div>
          </div>

          <div className="w-full h-full z-30 overflow-y-scroll overflow-x-hidden pt-4 mx-auto">
            <div className="w-full h-full flex items-center mt-4 mx-auto flex-wrap justify-between px-3 gap-2">
              {emojis
                .find((emoji) => emoji.categoryName === selectedEmojiCategory)
                ?.children.map((data, i) => (
                  <button
                    key={i}
                    onMouseOver={() =>
                      setPointedEmoji({
                        emoji: data.emoji,
                        description: data.description,
                      })
                    }
                    onMouseOut={() =>
                      setPointedEmoji({
                        emoji: "👋",
                        description: "",
                      })
                    }
                    type="button"
                    className=""
                  >
                    <span className="text-2xl">{data.emoji}</span>
                  </button>
                ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-start gap-6 h-fit p-3 border-t border-gray-600">
            <span className="text-2xl">{pointedEmoji.emoji}</span>
            <div className="font-light text-sm text-gray-600">
              {pointedEmoji.description.length >= 20
                ? `${pointedEmoji.description.slice(0, 21)}...`
                : pointedEmoji.description}
            </div>
          </div>
        </div>
      )}
    >
      <button type="button" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        <EmojiHappyIcon ref={clickButtonRef} className="w-8 h-8" />
      </button>
    </Popover>
  );
};

export default Emojis;
