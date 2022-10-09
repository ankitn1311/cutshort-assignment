import React, { FC } from "react";

type InputDefaultProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputProps = {
  label: string;
  startText?: string;
  subLabel?: string;
  fullWidth?: boolean;
} & InputDefaultProps;

const Input: FC<InputProps> = ({
  label,
  startText,
  subLabel,
  fullWidth = false,
  className,
  ...inputProps
}) => {
  const fullWidthStyle = fullWidth ? "w-full" : "";
  return (
    <div className={`flex flex-col gap-2 text-sm gap ${fullWidthStyle}`}>
      <label
        htmlFor={inputProps.id ?? ""}
        className="font-medium text-gray-600 ">
        {label}{" "}
        {subLabel && (
          <span className="text-sm text-gray-400">({subLabel})</span>
        )}
      </label>
      {startText ? (
        <div className="flex flex-row w-full">
          <div className="flex items-center justify-center p-3 text-gray-400 bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg">
            {startText}
          </div>
          <input
            {...inputProps}
            className={`flex-1 p-3 text-sm border border-gray-200 placeholder:text-gray-400 rounded-r-lg focus:ring-1 focus:ring-indigo-600 focus:outline-none ${fullWidthStyle} ${className}`}
          />
        </div>
      ) : (
        <input
          {...inputProps}
          className={`p-3 text-sm border border-gray-200 placeholder:text-gray-400 rounded-lg focus:ring-1 focus:ring-indigo-600 focus:outline-none ${fullWidthStyle} ${className}`}
        />
      )}
    </div>
  );
};

export default Input;
