import React from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";

const Workspace = ({ next }: { next: any }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    next();
  };

  return (
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
  );
};

export default Workspace;
