
const mongoose = require("mongoose")

const staffSchema = mongoose.Schema({
    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },

    email: {
        type: String,
    },

    phone: {
        type: String,
    },

    employeeId: {
        type: String,
        unique: true
    },

    companyRole: {
        type: String,
    },

    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },

    dateOfBirth: {
        type: String,
    },

    company: {
        type: mongoose.Types.ObjectId,
        ref: "Company",
        required: true,
    },

    password: {
        type: String
    },
    resetPin: {
        type: Number
    }

    
}, {
    timestamps: true
})
    

module.exports = mongoose.model("Staff", staffSchema)

