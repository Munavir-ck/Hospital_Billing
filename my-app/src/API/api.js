
import axios  from "../Axios/axios";


export const get_patients = ()=>{
    try {
      
        const response = axios.get('/get_patients')
        return response
    } catch (error) {

        return error?.response;
        
    }


}

export const get_invoice=( invoice_id)=>{
const response= axios
.get("/get_invoice", {
  params: {
    invoicID: invoice_id,
  },
})
return response
}

