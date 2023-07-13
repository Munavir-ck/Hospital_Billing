import React from "react";

function Appoiments() {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Patient Name
              </th>
              <th scope="col" className="px-6 py-3">
                Doctor Name
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Arun
              </th>
              <td className="px-6 py-4">Jhone</td>
              <td className="px-6 py-4">10:00 PM</td>
              <td className="px-6 py-4">2342423423434</td>
              <td className="px-6 py-4">Active</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Arun
              </th>
              <td className="px-6 py-4">Jhone</td>
              <td className="px-6 py-4">10:00 PM</td>
              <td className="px-6 py-4">2342423423434</td>
              <td className="px-6 py-4">Active</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Arun
              </th>
              <td className="px-6 py-4">Jhone</td>
              <td className="px-6 py-4">10:00 PM</td>
              <td className="px-6 py-4">2342423423434</td>
              <td className="px-6 py-4">Active</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Arun
              </th>
              <td className="px-6 py-4">Jhone</td>
              <td className="px-6 py-4">10:00 PM</td>
              <td className="px-6 py-4">2342423423434</td>
              <td className="px-6 py-4">Active</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Arun
              </th>
              <td className="px-6 py-4">Jhone</td>
              <td className="px-6 py-4">10:00 PM</td>
              <td className="px-6 py-4">2342423423434</td>
              <td className="px-6 py-4">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appoiments;
