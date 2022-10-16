import { Fragment, ReactNode, useState } from "react";
import StepperContent from "./StepperContent";
import StepperCircle from "./StepperCircle";
import Profile from "./steps/Profile";
import Workspace from "./steps/Workspace";
import Plan from "./steps/Plan";
import Final from "./steps/Final";

type Step = {
  heading: string;
  subHeading: string;
  render: (prop: Function) => ReactNode;
};

const Stepper = () => {
  const steps: Step[] = [
    {
      heading: "Welcome! First things first...",
      subHeading: "You can always change them later.",
      render: (handleNext: Function) => <Profile next={handleNext} />,
    },
    {
      heading: "Let's set up a home for all your work",
      subHeading: "You can always change them later.",
      render: (handleNext: Function) => <Workspace next={handleNext} />,
    },
    {
      heading: "How are you planning to use Eden?",
      subHeading: "We'll streamline your setup experience accordingly.",
      render: (handleNext: Function) => <Plan next={handleNext} />,
    },
    {
      heading: "Congratulations, Eren!",
      subHeading:
        "You have completed onboarding, you can start using the Eden!",
      render: (handleNext: Function) => <Final next={handleNext} />,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNextStep = () => {
    setActiveStep((prevStep) => (prevStep + 1) % steps.length);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full gap-10 md:justify-center md:gap-16">
      <div className="flex items-center w-full max-w-md">
        {steps.map((step, index) => {
          return (
            <Fragment key={step.heading}>
              <StepperCircle
                onClick={() => setActiveStep(index)}
                activeStep={activeStep}
                currentStep={index}
                steps={steps.length}>
                {index + 1}
              </StepperCircle>
            </Fragment>
          );
        })}
      </div>
      <StepperContent
        steps={steps.length}
        activeStep={activeStep}
        handleNext={handleNextStep}
        data={steps[activeStep]}
      />
    </div>
  );
};

export default Stepper;
