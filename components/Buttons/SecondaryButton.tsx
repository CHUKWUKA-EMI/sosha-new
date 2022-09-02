import React, { FC, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  label?: string;
  fullWidth?: boolean;
  className: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const SecondaryButton: FC<IProps> = ({
  label = "",
  startIcon,
  endIcon,
  fullWidth,
  type = "button",
  className,
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
      type={type}
      onClick={onClick ? onClick : undefined}
      className={classNames(
        "btn-secondary",
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

export default SecondaryButton;
