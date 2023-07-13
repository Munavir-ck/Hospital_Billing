import React,{ useState }  from "react";
import Patients from "../Components/Billing/Patients";

import Header from "../Components/Billing/Header";
import Invoice from "../Components/Billing/Invoice";
import SideBar from "../Components/SideBar/SideBar";


function BillingPage() {

    const [invoice_id,setInvoice_id] = useState('');

    console.log(invoice_id,66666666666);
  return (
    <div className="flex flex-col sm:flex-row">
    <SideBar />
  
    <div className="p-4 bg-slate-300 sm:ml-64 flex-1">
      <div className="p-4 border-2 rounded-lg dark:border-gray-700">
        <div>
          <Header />
        </div>
  
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <Patients setInvoice_id={setInvoice_id} invoice_id={invoice_id} />
          <Invoice  invoice_id={invoice_id}/>
        </div>
  
        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    </div>
  </div>
  
  );
}

export default BillingPage;
