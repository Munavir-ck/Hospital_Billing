import mongoose from "mongoose";
import { Bills,Patients } from "../model/collections.js";



const patients = async (req, res) => {
    try {
      const patientData = await Patients.find({})
      res.status(200).json(patientData);
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'An error occurred' });
    }
  };
  
const get_invoice=async (req,res)=>{
    try {
        console.log(222222222);
       console.log( req.query.invoicID);
       const Id=req.query.invoicID

      
        if (Id) {
            const invoice=await Bills.findOne({
                patient:Id
                })
            // const objectId = new mongoose.Types.ObjectId(Id); 
            const patientData = await Patients.findOne({_id:Id})

            console.log(patientData);
            const data={patientData,invoice}
            res.status(200).json(data);
        }
      
        

   
      } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred' });
      }
}

export {
    patients,
    get_invoice
}
