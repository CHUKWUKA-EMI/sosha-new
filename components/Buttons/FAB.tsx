import React, { FC } from "react";

interface IProps {
  category: "primary" | "secondary";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  label: string;
  fullWidth?: boolean;
  className: string;
  onClick?: () => void;
}

const FAB: FC<IProps> = ({
  label,
  startIcon,
  endIcon,
  fullWidth,
  className,
  onClick,
  category,
}) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  if (startIcon) endIcon = undefined;
  if (endIcon) startIcon = undefined;
  return (
    <button
      onClick={onClick ? onClick : undefined}
      className={classNames(
        `btn-${category} shadow-md rounded-full shadow-gray-600`,
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
    </button>
  );
};

export default FAB;
