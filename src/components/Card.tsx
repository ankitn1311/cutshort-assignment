import { FC } from "react";
import { CardType } from "./steps/StepContentThree";

type Props = {
  data: CardType;
  active: boolean;
  setActive: () => void;
};
const Card: FC<Props> = ({ data, active, setActive }) => {
  return (
    <div
      onClick={setActive}
      className={`flex flex-col gap-6 p-6 border rounded-lg cursor-pointer ${
        active ? "border-indigo-600" : "border-gray-300"
      }`}>
      <div
        className={`w-8 h-8 ${active ? "text-indigo-600" : "text-gray-700"}`}>
        {data.icon}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold text-gray-700">{data.heading}</p>
        <p className="text-gray-500">{data.subHeading}</p>
      </div>
    </div>
  );
};

export default Card;
