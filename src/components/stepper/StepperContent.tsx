import { FC, ReactNode } from "react";
import CheckIcon from "../assets/CheckIcon";
import Text from "../common/Text";

type StepContentOneProps = {
  data: {
    heading: string;
    subHeading: string;
    render: (prop: Function) => ReactNode;
  };
  activeStep: number;
  steps: number;
  handleNext: Function;
};

const StepperContent: FC<StepContentOneProps> = ({
  data: { heading, subHeading, render },
  activeStep,
  steps,
  handleNext,
}) => {
  const lastStep = activeStep === steps - 1;

  return (
    <div
      className={`flex flex-col items-center justify-center w-full gap-12 md:gap-16`}>
      {lastStep && (
        <div className="flex items-center justify-center text-gray-300 bg-indigo-600 rounded-full w-14 h-14">
          <CheckIcon />
        </div>
      )}
      <div className="flex flex-col items-center w-full gap-2">
        <Text type="primary" className="w-full text-center">
          {heading}
        </Text>
        <Text type="secondary" className="w-full text-center">
          {subHeading}
        </Text>
      </div>
      {render(handleNext)}
    </div>
  );
};

export default StepperContent;
