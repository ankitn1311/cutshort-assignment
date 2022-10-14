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

  const renderCustomInput = () => (
    <div className="flex flex-row w-full">
      <div className="flex items-center justify-center p-3 text-gray-400 bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg dark:text-gray-400 dark:border-gray-800 dark:bg-gray-600">
        {startText}
      </div>
      <input
        {...inputProps}
        className={`flex-1 p-3 text-sm border dark:bg-gray-500 border-gray-200 dark:border-gray-800 placeholder:text-gray-400 rounded-r-lg focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:outline-none ${fullWidthStyle} ${className}`}
      />
    </div>
  );

  const renderLabel = () => (
    <label
      htmlFor={inputProps.id ?? ""}
      className="font-medium text-gray-600 dark:text-gray-300 ">
      {label}{" "}
      {subLabel && (
        <span className="text-sm text-gray-400 dark:text-gray-600">
          ({subLabel})
        </span>
      )}
    </label>
  );

  return (
    <div className={`flex flex-col gap-2 text-sm gap ${fullWidthStyle}`}>
      {renderLabel()}
      {startText ? (
        renderCustomInput()
      ) : (
        <input
          {...inputProps}
          className={`p-3 text-sm border dark:text-white dark:bg-gray-500 dark:border-gray-800  border-gray-200 placeholder:text-gray-400 rounded-lg focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-400 focus:outline-none ${fullWidthStyle} ${className}`}
        />
      )}
    </div>
  );
};

export default Input;
