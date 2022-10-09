import { FC } from "react";
import { CardType } from "./steps/StepContentThree";

type Props = {
  index: number;
  data: CardType;
  active: boolean;
  setActive: () => void;
};
const Card: FC<Props> = ({ index, data, active, setActive }) => {
  return (
    <div
      onClick={setActive}
      tabIndex={index + 1}
      className={`flex flex-col gap-6 p-4 md:p-6 border rounded-lg cursor-pointer ${
        active ? "border-indigo-600" : "border-gray-300"
      }`}>
      <div
        className={`w-8 h-8 ${active ? "text-indigo-600" : "text-gray-700"}`}>
        {data.icon}
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-gray-700 md:text-lg">{data.heading}</p>
        <p className="text-sm text-gray-500 md:text-md">{data.subHeading}</p>
      </div>
    </div>
  );
};

export default Card;
