const axios = require('axios');

const Transaction = require("../models/transaction.model")
const responses = require("../utils/response");
const generateReference = require('../utils/generatePaymentReference');

const initiatePayment = async (user) => {
    try {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.PAYSTACK_SECRET}`
            }
        }
        const body = {
            amount: Number(process.env.AMOUNT) * 100,
            email: user.email,
            reference: generateReference()
        };

        const response = await axios.post(process.env.PAYSTACK_URL, body, options)
        console.log(response.data);
        await Transaction.create({...body, amount: body.amount / 100});
        return responses.buildSuccessResponse("Transaction Initialized", 200, response.data)
    } catch (error) {
        console.log(error);
        return responses.buildFailureResponse(error?.message, error?.statusCode)
    }
}


const paystackWebhook = async (payload) => {
    try {
        const foundTransaction = await Transaction.findOne({reference: payload.data.reference})
        const updateObject = {
            transactionId: payload.data.id,
            channel: payload.data.channel,
            currency: payload.data.currency,
            ipAddress: payload.data.ip_address,
            paidAt: payload.data.paid_At,
            status: payload.data.status,
        };

        const updatedTransaction = await Transaction.findByIdAndUpdate(
            {_id: foundTransaction._id},
            updateObject, {new: true}
        );
        console.log(updatedTransaction)
        return responses.buildSuccessResponse("Transaction noted", 200);
    } catch (error) {
       console.log(error);
        
    }
}

// const checkPaymentStatus = async () => {
//     try {
//         const transaction = await transactionReference
//         if(transaction.status === success)
//         return {
//             status: 'success',
//             amount: 1000,
//             logged_user: '',
//             message: 'Payment was successful.',
//         }
//     } catch (error) {
//        return responses.buildFailureResponse("Payment not successful", error?.statusCode)
//     }
// }

module.exports = {
    initiatePayment,
    paystackWebhook,
}