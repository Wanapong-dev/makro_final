require("dotenv").config();
const express = require("express")
const errorHandler = require("./middlewares/error")
const notFoundHandler =require("./middlewares/not-found")
const cors = require("cors")
const adminRoutes = require("./routes/admin-route")
const authRoutes = require("./routes/auth-route")
const orderRoutes = require("./routes/order-route")
const productRoutes = require("./routes/product-route")
const userRoutes =require("./routes/user- route")


const app = express()
app.use (cors())

app.use(express.json())

app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/product", productRoutes)
app.use("/order", orderRoutes)

app.use("/admin", adminRoutes)


app.use(errorHandler)
app.use("*", notFoundHandler)

const port = process.env.PORT
app.listen(port, () => console.log(`Server is running on ${port}`))

