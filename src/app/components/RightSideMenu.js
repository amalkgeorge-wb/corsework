const RightSideMenu = () => {
  return (
    <div className=" hidden md:flex fixed right-2 top-0 h-screen flex-col justify-start items-center bg-transparent p-4 space-y-6 w-22">
      <div className="bg-white px-2 py-1 rounded-3xl">
        <div className="flex flex-row items-center">
          <img src="/images/coin.svg" alt="Coin Icon" className="w-8 h-8" />
          <div className="text-xs mt-1 text-gray-600  ">120</div>
        </div>
      </div>
      <div className="bg-white px-2 py-1 rounded-3xl">
        <div className="flex flex-row items-center ">
          <img src="/images/flame.svg" alt="Flame Icon" className="w-8 h-8" />
          <p className="text-xs mt-1 text-gray-600">24</p>
        </div>
      </div>
      <div className="p-1 bg-white rounded-full">
        <div className="flex items-center bg-white rounded-full p-1 border-[#EAF0F2] border ">
          <img
            src="/images/event.svg"
            alt="Calendar Icon"
            className="w-8 h-8"
          />
        </div>
      </div>
      <div className="p-1 bg-white rounded-full">
        <div className="flex items-center bg-white rounded-full p-1 border-[#EAF0F2] border ">
          <img
            src="/images/note_stack.svg"
            alt="Note Icon"
            className="w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideMenu;
