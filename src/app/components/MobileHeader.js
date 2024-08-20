import React from "react";
// Assuming you're using Feather Icons for the hamburger icon

const MobileHeader = () => {
  return (
    <div className="md:hidden flex justify-between items-center p-4 bg-white shadow-md rounded-b-lg">
      <div className="flex items-center">
        <img src="/images/zuai-logo.svg" alt="ZuAi logo" className="h-6" />
      </div>
      <img
        src="/images/menu.svg"
        alt="menu"
        className="h-6 w-6 cursor-pointer"
      />
    </div>
  );
};

export default MobileHeader;
