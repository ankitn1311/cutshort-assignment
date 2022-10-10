const Header = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <img
        src="/eden-logo.png"
        className="w-10 h-10 select-none"
        alt="eden logo"
      />
      <p className="text-3xl font-bold text-gray-700">Eden</p>
    </div>
  );
};

export default Header;
