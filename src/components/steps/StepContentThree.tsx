import Button from "../common/Button";
import Input from "../common/Input";

const StepContentThree = () => {
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
        <form className="flex flex-col w-full gap-4">
          <Input label="Full Name" placeholder="Steve Jobs" />
          <Input label="Display Name" placeholder="Steve" />
        </form>
        <Button fullWidth={true}>Create Workspace</Button>
      </div>
    </>
  );
};

export default StepContentThree;
