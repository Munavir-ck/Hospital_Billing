import express from "express";

import { patients,get_invoice} from "../controller/user.js";

const router=express.Router()



router.get("/get_patients",patients)
router.get("/get_invoice",get_invoice)

export default router