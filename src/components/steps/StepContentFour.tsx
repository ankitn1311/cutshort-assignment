import Button from "../common/Button";

const StepContenFour = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center text-gray-300 bg-indigo-600 rounded-full w-14 h-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Congratulations, Eren!
        </h2>
        <p className="text-sm font-medium text-gray-400">
          You have completed onboarding, you can start using the Eden!
        </p>
      </div>
      <div className="flex flex-col w-full gap-8 md:max-w-md">
        {/* <form className="flex flex-col w-full gap-4">
          <Input label="Full Name" placeholder="Steve Jobs" />
          <Input label="Display Name" placeholder="Steve" />
        </form> */}
        <Button fullWidth={true}>Launch Eden</Button>
      </div>
    </>
  );
};

export default StepContenFour;
