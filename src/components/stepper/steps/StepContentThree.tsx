import { FC, ReactElement, useState } from "react";
import UserIcon from "../../assets/UserIcon";
import UserGroupIcon from "../../assets/UserGroupIcon";
import Card from "../../common/Card";
import Button from "../../common/Button";
import Text from "../../common/Text";
import { RadioGroup } from "@headlessui/react";

export type CardType = {
  icon: ReactElement;
  heading: string;
  subHeading: string;
};

type StepContentThreeProps = {
  onNextPress: () => void;
};

const StepContentThree: FC<StepContentThreeProps> = ({ onNextPress }) => {
  const cards: CardType[] = [
    {
      icon: <UserIcon />,
      heading: "For myself",
      subHeading: "Write better. Think more clearly. Stay organized.",
    },
    {
      icon: <UserGroupIcon />,
      heading: "With my team",
      subHeading: "Wikis, docs, tasks & projects, all in one place.",
    },
  ];
  const [selectedCard, setSelectedCard] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNextPress();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-16">
      <div className="flex flex-col items-center w-full gap-2">
        <Text type="primary" className="w-full text-left md:text-center">
          How are you planning to use Eden?
        </Text>
        <Text type="secondary" className="w-full text-left md:text-center">
          We'll streamline your setup experience accordingly.
        </Text>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-8 md:max-w-md">
        <RadioGroup
          className="grid grid-cols-2 gap-4 md:gap-8"
          value={selectedCard}
          onChange={setSelectedCard}>
          {cards.map((card, index) => {
            return (
              <RadioGroup.Option
                key={index}
                value={index}
                className="focus:outline-none">
                {({ checked, active }) => (
                  <Card data={card} checked={checked} active={active} />
                )}
              </RadioGroup.Option>
            );
          })}
        </RadioGroup>
        <Button fullWidth={true} type="submit">
          Create Workspace
        </Button>
      </form>
    </div>
  );
};

export default StepContentThree;
