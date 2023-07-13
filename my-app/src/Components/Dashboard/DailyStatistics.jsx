import React from 'react'

function DailyStatistics() {
  return (
    <div>
       <div className="container mx-auto mt-12">
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div className="relative mt-4 w-56">
           
          </div>
          <div className="text-sm font-medium text-gray-500 truncate"></div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
          400
          </div>
        </div>
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 truncate">
            Today Booking
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
           20
          </div>
        </div>
        <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 truncate">
            Total Slots Booked
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            10
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DailyStatistics
