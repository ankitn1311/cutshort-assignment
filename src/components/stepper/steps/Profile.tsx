import React from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";

const Profile = ({ next }: { next: any }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    next();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-md gap-8">
      <div className="flex flex-col w-full gap-4">
        <Input label="Full Name" placeholder="Steve Jobs" />
        <Input label="Display Name" placeholder="Steve" />
      </div>
      <Button fullWidth={true} type="submit">
        Create Profile
      </Button>
    </form>
  );
};

export default Profile;
