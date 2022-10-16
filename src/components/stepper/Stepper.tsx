import React, { Fragment, useCallback, useState } from "react";
import StepperCircle from "./StepperCircle";
import StepContentFour from "./steps/StepContentFour";
import StepContentOne from "./steps/StepContentOne";
import StepContentThree from "./steps/StepContentThree";
import StepContentTwo from "./steps/StepContentTwo";

const Stepper = () => {
  const steps = [1, 2, 3, 4];

  const [activeStep, setActiveStep] = useState(1);

  const handleNextStep = () => {
    setActiveStep((prevStep) => (prevStep % 4) + 1);
  };

  const getContent = useCallback(() => {
    switch (activeStep) {
      case 1: {
        return <StepContentOne onNextPress={handleNextStep} />;
      }
      case 2: {
        return <StepContentTwo onNextPress={handleNextStep} />;
      }
      case 3: {
        return <StepContentThree onNextPress={handleNextStep} />;
      }
      case 4: {
        return <StepContentFour onNextPress={handleNextStep} />;
      }
      default: {
        return <StepContentOne onNextPress={handleNextStep} />;
      }
    }
  }, [activeStep]);

  return (
    <div className="flex flex-col items-center justify-start w-full gap-10 md:justify-center md:gap-16">
      <div className="flex items-center w-full max-w-md">
        {steps.map((step) => {
          return (
            <Fragment key={step}>
              <StepperCircle
                onClick={() => setActiveStep(step)}
                activeStep={activeStep}
                currentStep={step}
                steps={steps.length}>
                {step}
              </StepperCircle>
            </Fragment>
          );
        })}
      </div>
      {getContent()}
    </div>
  );
};

export default Stepper;
