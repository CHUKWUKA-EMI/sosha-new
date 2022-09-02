import { FC, useState } from "react";
import { Switch } from "@headlessui/react";

interface IProps {
  className?: string;
  enabled: boolean;
  handleChange: () => void;
}

export const ToggleButton: FC<IProps> = ({
  enabled,
  handleChange,
  className,
}) => {
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-2">Dark mode</Switch.Label>
        <Switch
          checked={enabled}
          onChange={handleChange}
          className={`${enabled ? "bg-sky-900" : "bg-gray-300"}
          relative flex items-center h-fit w-[70px] ${className} shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            className={`${
              enabled
                ? "translate-x-0 text-white"
                : "translate-x-8 text-gray-600"
            } transform transition duration-200 ease-in-out font-light`}
          >
            {enabled ? "ON" : "OFF"}
          </span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-4" : "-translate-x-7"}
            pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};
