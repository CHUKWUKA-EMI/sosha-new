import React, { FC, PropsWithChildren } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import TextField from "../TextFields/TextField";

interface IProps extends PropsWithChildren {}

const Signup: FC<IProps> = ({}) => {
  return (
    <div className="w-full">
      <h3>Create your account</h3>
      <div className="w-full">
        <TextField fullWidth />
        <TextField fullWidth />
      </div>
      <PrimaryButton label="Next" className="" />
    </div>
  );
};

export default Signup;
