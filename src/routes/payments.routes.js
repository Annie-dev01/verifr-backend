const express = require('express');
const authMiddleware = require('../middlewares/auth.js')
const router = express.Router();
const paymentController = require('../controllers/payments.controllers');

router.post('/payments', authMiddleware.authenticate, paymentController.initiatePayment)
router.post('/webhook', paymentController.initiatePayment)



module.exports = router;