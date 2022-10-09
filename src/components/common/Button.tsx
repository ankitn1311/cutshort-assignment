import React, { FC, ReactNode } from "react";

type DefaultButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const sizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

type ButtonProps = {
  children: ReactNode;
  fullWidth?: boolean;
  size?: keyof typeof sizes;
} & DefaultButtonProps;

const Button: FC<ButtonProps> = ({
  size = "md",
  fullWidth = false,
  children,
  className,
  ...buttonProps
}) => {
  const fullWidthStyle = fullWidth ? "w-full" : "";

  const getSizeStyle = () => {
    switch (size) {
      case "xs": {
        return "text-xs p-2";
      }
      case "sm": {
        return "text-sm p-3";
      }
      case "md": {
        return "text-md p-4";
      }
      case "lg": {
        return "text-lg p-5";
      }
      case "xl": {
        return "text-xl p-6";
      }
    }
  };

  return (
    <button
      {...buttonProps}
      className={`p-3 text-gray-200 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-600 focus:outline-none focus:ring-indigo-600 focus:ring-offset-1 focus:ring-2 text-sm font-medium rounded-lg ${fullWidthStyle} ${getSizeStyle()} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
