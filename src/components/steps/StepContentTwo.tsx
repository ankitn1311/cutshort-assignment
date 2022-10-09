import Button from "../common/Button";
import Input from "../common/Input";

const StepContentTwo = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full gap-2">
        <h2 className="w-full text-2xl font-semibold text-left md:text-3xl md:text-center">
          Let's set up a home for all your work
        </h2>
        <p className="w-full text-sm font-medium text-left text-gray-400 md:text-center">
          You can always create another workspace later.
        </p>
      </div>
      <div className="flex flex-col w-full gap-8 md:max-w-md">
        <form className="flex flex-col w-full gap-4">
          <Input label="Workspace Name" placeholder="Eden" />
          <Input
            startText="www.eden.com/"
            label="Workspace URL"
            subLabel="optional"
            placeholder="Example"
          />
        </form>
        <Button fullWidth={true}>Create Workspace</Button>
      </div>
    </>
  );
};

export default StepContentTwo;
