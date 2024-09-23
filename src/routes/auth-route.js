const express = require('express')
const authController = require("../controllers/auth-controller")
const router = express.Router()


router.post("/register",authController.register)
router.post("/login", authController.login)
router.post("/forget-password", authController.forgetPassword)
router.post("/reset-password/:token", authController.resetPassword)
router.post("/confirm-register/:token", authController.confirmRegister)



module.exports = router