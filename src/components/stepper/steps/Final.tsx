import React from "react";
import Button from "../../common/Button";

const Final = ({ next }: { next: any }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    next();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-md gap-12">
      <Button fullWidth={true} type="submit">
        Launch Eden
      </Button>
    </form>
  );
};

export default Final;
