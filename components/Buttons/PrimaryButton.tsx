import React, { FC, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  startIcon?: JSX.Element;
  disabled?: boolean;
  endIcon?: JSX.Element;
  label?: string;
  fullWidth?: boolean;
  className: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}
const PrimaryButton: FC<IProps> = ({
  label = "",
  startIcon,
  endIcon,
  fullWidth,
  type = "button",
  className,
  disabled,
  onClick,
  children,
}) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  if (startIcon) endIcon = undefined;
  if (endIcon) startIcon = undefined;
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick ? onClick : undefined}
      className={classNames(
        "btn-primary",
        `${className} ${fullWidth ? "w-full" : ""}`
      )}
    >
      {startIcon ? (
        <span className="flex w-full items-center gap-3">
          <span>{startIcon}</span>
          <span>{label}</span>
        </span>
      ) : endIcon ? (
        <span className="flex w-full items-center gap-3">
          <span>{label}</span>
          <span>{endIcon}</span>
        </span>
      ) : (
        <span>{label}</span>
      )}
      {children}
    </button>
  );
};

export default PrimaryButton;
