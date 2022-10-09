import { ReactElement, useState } from "react";
import UserIcon from "../assets/icons/User";
import UserGroupIcon from "../assets/icons/UserGroup";
import Card from "../Card";
import Button from "../common/Button";

export type CardType = {
  icon: ReactElement;
  heading: string;
  subHeading: string;
};

const StepContentThree = () => {
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

  return (
    <>
      <div className="flex flex-col items-center w-full gap-2">
        <h2 className="w-full text-2xl font-semibold text-left md:text-3xl md:text-center">
          How are you planning to use Eden?
        </h2>
        <p className="w-full text-sm font-medium text-left text-gray-400 md:text-center">
          We'll streamline your setup experience accordingly.
        </p>
      </div>
      <div className="flex flex-col w-full gap-8 md:max-w-md">
        <div className="grid grid-cols-2 gap-8">
          {cards.map((card, index) => {
            return (
              <Card
                setActive={() => setSelectedCard(index)}
                key={card.heading}
                data={card}
                active={selectedCard === index}
              />
            );
          })}
        </div>
        <Button fullWidth={true}>Create Workspace</Button>
      </div>
    </>
  );
};

export default StepContentThree;
