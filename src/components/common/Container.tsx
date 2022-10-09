import React, { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {children}
    </div>
  );
};

export default Container;
