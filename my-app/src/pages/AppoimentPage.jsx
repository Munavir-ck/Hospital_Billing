import React from "react";
import Appoiments from "../Components/Appoiments/Appoiments";
import SideBar from "../Components/SideBar/SideBar";



function AppoimentPage() {
  return (
    <div className="flex flex-col sm:flex-row">
      <SideBar />

      <div className="p-4 bg-slate-300 h-screen sm:ml-64 flex-1">
        <div className="p-4 border-2 rounded-lg dark:border-gray-700">
          <Appoiments />

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      </div>
    </div>
  );
}

export default AppoimentPage;
