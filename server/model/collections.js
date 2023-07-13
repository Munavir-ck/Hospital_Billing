import mongoose from "mongoose"

const Patients = mongoose.model('Patients', mongoose.Schema({}),'Patient');
const Bills = mongoose.model('Client', mongoose.Schema({}),'Bills');

export { Patients, Bills };
