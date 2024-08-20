import React from "react";

const SideMenu = () => {
  return (
    <div className="hidden md:flex bg-[#F8FAFC] w-[52px] flex-col items-center gap-4 rounded-[16px] m-3 py-2">
      <div className="rounded-full">
        <img src="/images/zuai-logo.svg" alt="zuai logo" />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-6 h-6 rounded-full bg-[#6947BF] p-1">
          <img src="/images/dashboard.svg" alt="dashboard logo" />
        </div>
        <div className="w-6 h-6 rounded">
          <img src="/images/book.svg" alt="book logo" />
        </div>
        <div className="w-6 h-6 rounded">
          <img src="/images/file_copy.svg" alt="file logo" />
        </div>
        <div className="w-6 h-6 rounded">
          <img src="/images/quiz.svg" alt="quiz logo" />
        </div>
      </div>
      <div className="mt-auto">
        <div className="w-6 h-6 bg-orange-400 rounded-full">
          <img src="/images/profile.svg" alt="profile logo" />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
