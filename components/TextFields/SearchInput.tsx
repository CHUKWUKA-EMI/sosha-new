import React, { FC } from "react";
import InputBase from "./InputBase";
import { SearchIcon } from "@heroicons/react/outline";

interface IProps {
  containerStyle?: string;
  className?: string;
  fullWidth?: boolean;
  placeholder?: string;
  value?: string;
  setValue?: (value: string) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onInput?: React.FormEventHandler<HTMLInputElement>;
}

const SearchInput: FC<IProps> = ({
  fullWidth,
  className,
  placeholder,
  value,
  setValue,
  onChange,
  onInput,
  containerStyle,
}) => {
  return (
    <div
      className={`bg-gray-100 dark:bg-inherit ${containerStyle} flex flex-1 items-center px-2 shadow-sm ${
        fullWidth ? "w-full" : "w-fit"
      } shadow-gray-400`}
    >
      <SearchIcon className="h-6 w-6 dark:text-gray-300 text-sky-800" />
      <InputBase
        fullWidth={fullWidth}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onInput={onInput}
        className={`outline-none dark:bg-inherit z-0 bg-gray-100 ${className}  py-3 px-3`}
      />
      <button onClick={() => setValue?.("")} className={`w-fit h-fit`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${!value ? "hidden" : ""} font-extrabold`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;
