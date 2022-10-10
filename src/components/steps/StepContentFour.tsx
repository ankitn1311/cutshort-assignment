import { FC } from "react";
import CheckIcon from "../assets/CheckIcon";
import Button from "../common/Button";
import Text from "../common/Text";

type StepContentFourProps = {
  onNextPress: () => void;
};

const StepContentFour: FC<StepContentFourProps> = ({ onNextPress }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-16">
      <div className="flex items-center justify-center text-gray-300 bg-indigo-600 rounded-full w-14 h-14">
        <CheckIcon />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Text type="primary" className="w-full text-center">
          Congratulations, Eren!
        </Text>
        <Text type="secondary" className="w-full text-center">
          You have completed onboarding, you can start using the Eden!
        </Text>
      </div>
      <div className="flex flex-col w-full gap-8 md:max-w-md">
        <Button fullWidth={true} onClick={onNextPress}>
          Launch Eden
        </Button>
      </div>
    </div>
  );
};

export default StepContentFour;
