const paymentServices = require('../services/payments.services');

const initiatePayment = async (req, res) => {
    try {
     const data = await paymentServices.initiatePayment(req.user)
     res.status(data.statusCode).json(data);
    } catch (error) {
        console.log(error);
    }
};

const paystackWebhook = async (req, res) => {
    try {
    const data = await paymentServices.paystackWebhook(req.body)
    res.status(data.statusCode).json(data);
    } catch (error) {
        console.log(error);
    }
};



module.exports = {
    initiatePayment,
    paystackWebhook
};