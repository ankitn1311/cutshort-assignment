import { RadioGroup } from "@headlessui/react";
import React, { useState } from "react";
import Button from "../../common/Button";
import UserIcon from "../../assets/UserIcon";
import UserGroupIcon from "../../assets/UserGroupIcon";
import Card, { CardType } from "../../common/Card";

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

const Plan = ({ next }: { next: any }) => {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    next();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-md gap-12">
      <RadioGroup
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"
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
        Select Plan
      </Button>
    </form>
  );
};

export default Plan;
