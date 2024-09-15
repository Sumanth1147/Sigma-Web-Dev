import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

const Company = mongoose.model('Company', CompanySchema);
export default Company;
