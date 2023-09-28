import React from "react";
import Logo from "./Logo";
import SidebarRoutes from "./SidebarRoutes";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="h-full flex border-r shadow-sm bg-white flex-col">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
