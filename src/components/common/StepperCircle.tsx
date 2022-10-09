import { FC, ReactNode } from "react";

type StepperCircleProps = {
  children: ReactNode;
  activeStep: number;
  currentStep: number;
  steps: number;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const StepperCircle: FC<StepperCircleProps> = ({
  activeStep,
  currentStep,
  steps,
  children,
  ...props
}) => {
  const lastStep = currentStep === steps;
  const active = currentStep === activeStep;
  const completed = currentStep < activeStep;

  return (
    <>
      <div
        {...props}
        className={`relative cursor-pointer flex items-center justify-center w-10 h-10  border rounded-full ${
          completed || active
            ? "bg-indigo-600 text-gray-300"
            : "border-gray-300 text-gray-700"
        }`}>
        {children}
      </div>
      {!lastStep && (
        <>
          <div
            className={`flex-1 border-t ${
              completed ? "border-t-indigo-600" : ""
            } ${active ? "border-t-indigo-600" : ""} `}></div>
          <div
            className={`flex-1 border-t ${
              completed ? "border-t-indigo-600" : ""
            }`}></div>
        </>
      )}
    </>
  );
};

export default StepperCircle;
