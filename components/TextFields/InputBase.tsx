/* eslint-disable react/display-name */
import React, { FC } from "react";

interface IProps {
  fullWidth?: boolean;
  type?: string;
  className?: string;
  placeholder?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onInput?: React.FormEventHandler<HTMLInputElement>;
}

const InputBase: FC<IProps> = (props) => {
  return (
    <input
      type={props.type ?? "text"}
      onChange={props.onChange}
      onInput={props.onInput}
      value={props.value}
      placeholder={props.placeholder}
      className={`${props.className} ${props.fullWidth ? "w-full" : ""}`}
    />
  );
};

export default InputBase;
