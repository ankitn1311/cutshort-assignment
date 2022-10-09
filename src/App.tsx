import { ReactNode, useState } from "react";
import Button from "./components/common/Button";
import Container from "./components/common/Container";
import Input from "./components/common/Input";
import StepperCircle from "./components/common/StepperCircle";

const data = [
  {
    heading: "Welcome! First things first...",
    subheading: "You can always change them later.",
  },
];

function App() {
  const steps = [1, 2, 3, 4];

  const [activeStep, setActiveStep] = useState(1);

  return (
    <Container>
      <div className="flex flex-col items-center w-full gap-10 px-6 ">
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="flex flex-row items-center gap-4">
            <i>i</i>
            <p className="text-3xl font-bold">Eden</p>
          </div>
          <div className="flex items-center justify-center w-full px-6">
            {steps.map((step) => {
              return (
                <StepperCircle
                  onClick={() => setActiveStep(step)}
                  activeStep={activeStep}
                  currentStep={step}
                  steps={steps.length}>
                  {step}
                </StepperCircle>
              );
            })}
          </div>
          <div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Welcome! First things first...
              </h2>
              <p className="text-sm font-medium text-gray-400">
                You can always change them later.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full gap-8 md:max-w-md">
            <form className="flex flex-col w-full gap-4">
              <Input label="Full Name" placeholder="Steve Jobs" />
              <Input label="Display Name" placeholder="Steve" />
            </form>
            <Button fullWidth={true}>Create Workspace</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
