const express = require("express")
const router = express.Router()


// API สำหรับ get และแก้ไข ​Profile
router.get("/me", () => {})
router.patch("/", () => {})

// API สำหรับที่อยู่ของ ​User
router.get("/address/all", () => {})
router.post("/address", () => {})
router.patch("/address/:addressId", () => {})
router.delete("/address/:addressId", () => {})




module.exports = router