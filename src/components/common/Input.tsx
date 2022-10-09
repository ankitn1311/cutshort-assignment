import React, { FC } from "react";

type InputDefaultProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = {
  label: string;
  fullWidth?: boolean;
} & InputDefaultProps;

const Input: FC<InputProps> = ({
  label,
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
        {label}
      </label>
      <input
        {...inputProps}
        className={`p-3 text-sm border border-gray-200 placeholder:text-gray-400 rounded-lg focus:ring-1 focus:ring-indigo-600 focus:outline-none ${fullWidthStyle} ${className}`}
      />
    </div>
  );
};

export default Input;
