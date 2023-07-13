import React, { useEffect, useState } from "react";
import axios from "../../Axios/axios";
import { get_invoice } from "../../API/api";

function Invoice({ invoice_id }) {
  const [invoice, setInvoice] = useState("");
  const [patient, setPatient] = useState("");

  useEffect(() => {
    get_invoice(invoice_id).then((res) => {
      setInvoice(res.data.invoice);
      setPatient(res.data.patientData);
    });
  }, [invoice_id]);

  return (
    <div>
      <section class="p-20 bg-white rounded-xl">
        <div className="max-w-3xl mx-auto py-10 bg-white border-4 border-blue-100 rounded-lg">
          <article className="overflow-hidden">
            <div className="bg-[white] rounded-b-md">
              <div className="flex  justify-between p-5 w-full">
                <h1 className="font-bold">Billing Details</h1>
                <button className="w-32 h-10 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                  Print Bill
                </button>
              </div>
              <div className="p-9 bg-slate-200">
                <div className="flex ">
                  <div className="grid grid-cols-5 gap-1">
                    <div className="text-sm font-light text-slate-500">
                      <p className="text-sm font-normal text-slate-700">
                        Patient Name
                      </p>
                      <h1 className="font-bold mt-5">{patient.Name}</h1>
                    </div>
                    <div className="text-sm font-light text-slate-500">
                      <p className="text-sm font-normal text-slate-700">
                        Age/Gender
                      </p>
                      <h1 className="font-bold mt-5">
                        {patient.Age}/{patient.Gender}
                      </h1>
                    </div>
                    <div className="text-sm font-light text-slate-500">
                      <p className="text-sm font-normal text-slate-700">
                        BILL NO
                      </p>
                      <h1 className="font-bold mt-5">2323312323</h1>
                    </div>
                    <div className="text-sm font-light text-slate-500">
                      <p className="text-sm font-normal text-slate-700">Date</p>
                      <h1 className="font-bold mt-5">15/5/2030</h1>
                    </div>
                    <div className="text-sm font-light text-slate-500">
                      <p className="text-sm font-normal text-slate-700">
                        Reciept No
                      </p>
                      <h1 className="font-bold mt-5">36356564</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8">
                <div className="flex flex-col mx-0 mt-8">
                  <table className="min-w-full divide-y divide-slate-500">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="hidden py-3.5 px-3 text-center text-sm font-extrabold text-slate-700 sm:table-cell"
                        >
                          Sr.No
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-center text-sm font-extrabold text-slate-700 sm:pl-6 md:pl-0"
                        >
                          ServiceName
                        </th>
                        <th
                          scope="col"
                          className="hidden py-3.5 px-3 text-right text-sm font-extrabold text-slate-700 sm:table-cell"
                        >
                          Fees
                        </th>
                        <th
                          scope="col"
                          className="hidden py-3.5 px-3 text-right text-sm font-extrabold text-slate-700 sm:table-cell"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-3 pr-4 text-right text-sm font-extrabold text-slate-700 sm:pr-6 md:pr-0"
                        >
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoice.Services &&
                        invoice.Services.length > 0 &&
                        invoice.Services.map((item, i) => (
                          <tr className="border-b border-slate-200">
                            <td className="hidden px-3 py-4 text-sm text-center  text-slate-500 sm:table-cell">
                              {item.Fees}
                            </td>
                            <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                              <div className="font-medium text-slate-700">
                                {item.ServiceName}
                              </div>
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                              {item.Fees}
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                              {item.Quantity}
                            </td>
                            <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                              {item.Amount}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th
                          scope="row"
                          colspan="3"
                          className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                        >
                          Subtotal
                        </th>
                        <th
                          scope="row"
                          className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                        >
                          Subtotal
                        </th>
                        <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          {invoice.total}
                        </td>
                      </tr>

                      <tr>
                        <th
                          scope="row"
                          colspan="3"
                          className="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0"
                        >
                          Tax
                        </th>
                        <th
                          scope="row"
                          className="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden"
                        >
                          Tax
                        </th>
                        <td className="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          $0.00
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          colspan="3"
                          className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0"
                        >
                          Total
                        </th>
                        <th
                          scope="row"
                          className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden"
                        >
                          Total
                        </th>
                        <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                          {invoice.total}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Invoice;
