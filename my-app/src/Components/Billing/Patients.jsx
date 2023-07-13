import React, { useEffect, useState } from "react";

import axios from "../../Axios/axios";

function Patients({ setInvoice_id, invoice_id }) {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get(`/get_patients`).then((res) => {
      setPatients(res.data);
      setInvoice_id(res.data[0]._id);
    });
  }, []);

  const handleClick = (id) => {
    setInvoice_id(id);
  };
 

  console.log(invoice_id);
  return (
    <div className="w-80 h-32 mx-auto hover:cursor-pointer">
      <ul role="list">
        {patients.map((item) => (
         <li className={`py-3 border-4 border-gray-300 rounded-xl sm:py-4 ${invoice_id === item._id ? "bg-slate-100" : "bg-cyan-500"}`}>
            <div
              className="flex items-center space-x-4"
              onClick={() => handleClick(item._id)}
            >
              <div className="ml-2 ">
                <img
                  className="w-20 h-20 rounded-xl"
                  src={item.image}
                  alt="Bonnie image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {item.Name}
                </p>
                <p className="text-sm text-gray-900 truncate dark:text-gray-400">
                  {item.Age},{item.Gender}
                </p>
                <p className="text-sm text-gray-900 truncate dark:text-gray-400">
                  Bill No: {item._id.substring(7)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Patients;
