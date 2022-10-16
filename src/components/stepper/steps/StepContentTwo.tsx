import { FC } from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";
import Text from "../../common/Text";

type StepContentTwoProps = {
  onNextPress: () => void;
};

const StepContentTwo: FC<StepContentTwoProps> = ({ onNextPress }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNextPress();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 md:gap-16">
      <div className="flex flex-col items-center w-full gap-2">
        <Text type="primary" className="w-full text-center">
          Let's set up a home for all your work
        </Text>
        <Text type="secondary" className="w-full text-center">
          You can always create another workspace later.
        </Text>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-md gap-8">
        <div className="flex flex-col w-full gap-4">
          <Input label="Workspace Name" placeholder="Eden" />
          <Input
            startText="www.eden.com/"
            label="Workspace URL"
            subLabel="optional"
            placeholder="Example"
          />
        </div>
        <Button fullWidth={true} type="submit">
          Create Workspace
        </Button>
      </form>
    </div>
  );
};

export default StepContentTwo;
