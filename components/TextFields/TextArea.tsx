import React, { FC, useEffect, useRef, useState } from "react";

interface IProps {
  className?: string;
  placeholder?: string;
  parent?: string;
}

const TextArea: FC<IProps> = ({ className, placeholder, parent }) => {
  const [value, setValue] = useState("");
  const textInputRef = useRef<HTMLTextAreaElement>(null);
  let keyArr: string[] = [];

  useEffect(() => {
    textInputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);

    if (parent === "messageBox" && e.target.scrollHeight >= 90) {
      return;
    }
    if (e.target.scrollHeight < 56) return;
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    keyArr.push(e.code);
    if (
      keyArr[0] == "MetaLeft" &&
      keyArr[1] === "KeyA" &&
      keyArr[2] === "Backspace"
    ) {
      e.target.style.height = "56px";
      keyArr = [];
    }
    if (
      keyArr[0] == "MetaLeft" &&
      keyArr[1] === "KeyA" &&
      keyArr[2] === "MetaLeft" &&
      keyArr[3] === "KeyX"
    ) {
      e.target.style.height = "56px";
      keyArr = [];
    }
    if (e.code === "Backspace") {
      if (e.target.style.height === "56px") return;
      e.target.style.height = `${e.target.scrollHeight - 1}px`;
    }
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <textarea
      autoFocus
      ref={textInputRef}
      id="textArea"
      role="textbox"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      className={classNames(
        `${className} ${
          parent === "messageBox" ? "max-h-[85px]" : ""
        } outline-none box-border resize-none p-1 mt-3 bg-white`
      )}
    />
  );
};

export default TextArea;
