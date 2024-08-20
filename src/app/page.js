// src/app/page.js
import FileUpload from "./components/FileUpload";
import CourseworkList from "./components/CourseworkList";
import CourseworkExplore from "./components/CourseworkExplore";
import SideMenu from "./components/SideMenu";
import CourseworkForm from "./components/CourseworkForm";
import RightSideMenu from "./components/RightSideMenu";
import MobileHeader from "./components/MobileHeader";

export default function Home() {
  return (
    <div>
      <MobileHeader />
      <div className="flex bg-[#E5ECF3]">
        {/* Side menu */}

        <SideMenu />

        {/* Main content */}
        <div className="flex-grow flex p-6 overflow-y-auto max-h-screen">
          {/* Scrollable content area */}
          <div className="flex-grow max-w-6xl p-6 flex flex-col items-start">
            <FileUpload />
            <CourseworkExplore title="My Coursework" />
            <CourseworkExplore title="Explore Coursework" tab />
          </div>

          {/* Right side menu */}
          <RightSideMenu />
        </div>
      </div>
    </div>
  );
}
