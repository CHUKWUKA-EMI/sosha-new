import React, { FC, HTMLInputTypeAttribute } from "react";
import InputBase from "./InputBase";

interface IProps {
  fullWidth?: boolean;
  placeholder?: string;
  value?: any;
  type?: HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const TextField: FC<IProps> = ({
  fullWidth,
  placeholder,
  value,
  onChange,
  type,
}) => {
  return (
    <InputBase
      type={type}
      fullWidth={fullWidth}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`outline-none placeholder:text-gray-500 border-2 border-sky-600 bg-white py-3 px-3 rounded-lg`}
    />
  );
};

export default TextField;
