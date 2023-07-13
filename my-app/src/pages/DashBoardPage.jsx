import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import DailyStatistics from '../Components/Dashboard/DailyStatistics'
import LineChart from '../Components/Dashboard/LineChart'




function DashBoardPage() {
  return (
    <div className="flex flex-col sm:flex-row">
    <SideBar />
  
    <div className="p-4 h-screen bg-slate-300 sm:ml-64 flex-1">
      <div className="p-4 border-2 rounded-lg dark:border-gray-700">
      
  
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <DailyStatistics />
          <LineChart />
        </div>
  
        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    </div>
  </div>
  )
}

export default DashBoardPage
