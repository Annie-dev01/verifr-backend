const express = require('express');
const companyController = require('../controllers/companies.controllers');
const authMiddleware = require("../middlewares/auth");
const inputValidators = require("../middlewares/inputValidators");


const router = express.Router()
// I defined the routes and associated them with controller functions here

router.post('/create-account', inputValidators.createCompanyValidator, companyController.createAccount);

router.post('/create-admin', authMiddleware.authenticate, inputValidators.createStaffValidator,
companyController.createAdmin);
router.post('/create-staff', authMiddleware.authenticate, inputValidators.createStaffValidator, companyController.createStaff);
router.post('/login', inputValidators.adminLoginValidator, companyController.login);
router.get('/', companyController.getAllCompanies);
router.post('/forgot-password', companyController.forgotPassword);
router.post('/reset-password', companyController.resetPassword);
router.get('/staff', companyController.findStaff);


module.exports = router;
