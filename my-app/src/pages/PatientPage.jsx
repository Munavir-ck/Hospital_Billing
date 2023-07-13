import React from 'react'
import Patients from '../Components/Billing/Patients'
import SideBar from '../Components/SideBar/SideBar'

import PatientsList from "../Components/Patients/Patients";
function PatientPage() {
  return (
    <div className="flex flex-col sm:flex-row">
    <SideBar />

    <div className="p-4 bg-slate-300 h-screen sm:ml-64 flex-1">
      <div className="p-4 border-2 rounded-lg dark:border-gray-700">
        <PatientsList />

        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    </div>
  </div>
  )
}

export default PatientPage
