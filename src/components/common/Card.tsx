import { FC } from "react";
import { CardType } from "../stepper/steps/StepContentThree";

type Props = {
  data: CardType;
  active: boolean;
  checked: boolean;
};
const Card: FC<Props> = ({ data, checked, active }) => {
  const activeClasses = active ? "ring-2 ring-indigo-500 ring-offset-1" : "";

  return (
    <div
      className={`flex flex-col gap-6 p-4 md:p-6 border rounded-lg cursor-pointer ${
        checked ? "border-indigo-600" : "border-gray-300"
      } ${activeClasses}`}>
      <div
        className={`w-8 h-8 ${checked ? "text-indigo-600" : "text-gray-700"}`}>
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
