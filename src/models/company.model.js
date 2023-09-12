const mongoose = require("mongoose")

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        
    },
    regNo: {
        type: String,
        unique: true
    },
    contactEmail: {
        type: String,
        unique: true
    },
    website: {
        type: String,
        
    },
    contactPhone: {
        type: String,
        
    },
    logo: {
        type: String,
    
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    }
})

module.exports = mongoose.model("company", companySchema)
// const companySchema = {
//     name: "string", //required
//     address: "string",
//     cacNo: "string",
//     contactEmail: "string",
//     website: "string",
//     contactPhone: "String",
//     logo: "string"
// }