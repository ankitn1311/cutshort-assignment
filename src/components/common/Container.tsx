import React, { FC, ReactNode, useContext } from "react";
import { setTheme } from "../../state/actions/global";
import { GlobalContext } from "../../state/contexts/GlobalContext";

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  const {
    state: { darkMode },
    dispatch,
  } = useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center w-screen min-h-screen dark:bg-gray-700">
      <nav
        className="flex flex-col justify-end w-full"
        onClick={() => dispatch(setTheme(!darkMode))}>
        <p className="self-end p-4 text-gray-700 cursor-pointer hover:text-black dark:hover:text-white hover:underline dark:text-gray-200">
          {darkMode ? "light mode" : "dark mode"}
        </p>
      </nav>
      <div className="flex flex-col items-center self-stretch justify-center w-full p-4 md:mt-20">
        {children}
      </div>
    </div>
  );
};

export default Container;
