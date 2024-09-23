const express = require("express")
const router =express.Router()

// เอา product ทั้งหมดที่อยู่ในcart มาแสดง
router.get("/my-cart", () => {})
// เพิ่ม product เข้าตระกร้าสินค้า
router.post("/product/:productID", () => {})
// อัพเดทจำนวนสินค้่าในตระกร้า
router.patch("/order-product/:orderProductId", () => {})

// ลบสินค้าออกจากตระกร้าสินค้า
router.delete("/order-product/:orderProductId", () => {})

//  Order
//  Checkout (เฉพาะกรณีเมื่อกดcheckout แล้วของใน cart หายไป)
router.patch("/:orderId", () => {})

// เอาทุก order ที่ไม่ใช่ status cart มาแสดง
router.get("/all", () => {})

module.exports = router


