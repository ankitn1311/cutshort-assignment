import { Fragment, useState } from "react";
import Container from "./components/common/Container";
import StepperCircle from "./components/common/StepperCircle";
import StepContenFour from "./components/steps/StepContentFour";
import StepContentOne from "./components/steps/StepContentOne";
import StepContentThree from "./components/steps/StepContentThree";
import StepContentTwo from "./components/steps/StepContentTwo";

function App() {
  const steps = [1, 2, 3, 4];

  const [activeStep, setActiveStep] = useState(1);

  const getContent = (currentStep: number) => {
    switch (currentStep) {
      case 1: {
        return <StepContentOne onNextPress={() => setActiveStep(2)} />;
      }
      case 2: {
        return <StepContentTwo onNextPress={() => setActiveStep(3)} />;
      }
      case 3: {
        return <StepContentThree onNextPress={() => setActiveStep(4)} />;
      }
      case 4: {
        return <StepContenFour onNextPress={() => setActiveStep(1)} />;
      }
    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center w-full gap-10 px-6">
        <div className="flex flex-col items-center justify-center w-full gap-16">
          <div className="flex flex-row items-center gap-2">
            <img
              src="/eden-logo.png"
              className="w-10 h-10 select-none"
              alt="eden logo"
            />
            <p className="text-3xl font-bold">Eden</p>
          </div>
          <div className="flex items-center w-full px-6 md:max-w-md">
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
          {getContent(activeStep)}
        </div>
      </div>
    </Container>
  );
}

export default App;
