 const express = require("express")
 const router = express.Router()
 const adminController = require("../controllers/admin-controller")


// เส้นสร้าง product
router.post("/product", adminController.adminCreateProduct)
router.patch("/product/:productId", adminController.adminUpdateProduct)
router.delete("/product/:productId", adminController.adminDeleteProduct)


// update order status -> จาก status PENDING -> PACKING
router.patch("/order/:orderId/status/:status", adminController.adminUpdateOrderStatus)



 module.exports = router