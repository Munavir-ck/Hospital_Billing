import React from "react";
import SidebarButtons from "./SidebarButtons";
import { BiSolidDashboard } from "react-icons/bi";
import { SiConsul } from "react-icons/si";
import { FaHospitalSymbol } from "react-icons/fa";
import { LiaHospital } from "react-icons/lia";
import { FaStethoscope } from "react-icons/fa";
import { GrSupport } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";



function SideBar() {

 
   
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <div
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto bg-blue-800 dark:bg-gray-800">
          <div>
            <div className="flex items-center px-20 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
              <FaHospitalSymbol size={80} color="green"/>
            </div>
              <h1> HOSPITAL</h1>
          </div>

          <ul className="space-y-2 font-medium pb-20">
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                <SidebarButtons
                  title="Dashboard"
                  to="/dashboard"
                  icon={<BiSolidDashboard />}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                <SidebarButtons
                  title="Billing"
                  to="/"
                  icon={<SiConsul />}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                <SidebarButtons
                  title="Appoiments"
                  to="/appoiments"
                  icon={<LiaHospital />}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                <SidebarButtons
                  title="Patients"
                  to="/patients"
                  icon={<FaStethoscope />}
                />
              </div>
            </li>
          </ul>
          <ul>
            <li className="">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                <SidebarButtons
                  title="Support"
                  to="/dashboard"
                  icon={<GrSupport />}
                />
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                <SidebarButtons
                  title="Settings"
                  to="/dashboard"
                  icon={<FcSettings />}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

     
    </div>
  );
}

export default SideBar;
