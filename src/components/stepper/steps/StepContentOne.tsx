import { FC } from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";
import Text from "../../common/Text";

type StepContentOneProps = {
  onNextPress: () => void;
};

const StepContentOne: FC<StepContentOneProps> = ({ onNextPress }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNextPress();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-16">
      <div className="flex flex-col items-center w-full gap-2">
        <Text type="primary" className="w-full text-left md:text-center">
          Welcome! First things first...
        </Text>
        <Text type="secondary" className="w-full text-left md:text-center">
          You can always change them later.
        </Text>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-8 md:max-w-md">
        <div className="flex flex-col w-full gap-4">
          <Input label="Full Name" placeholder="Steve Jobs" />
          <Input label="Display Name" placeholder="Steve" />
        </div>
        <Button fullWidth={true} type="submit">
          Create Workspace
        </Button>
      </form>
    </div>
  );
};

export default StepContentOne;
