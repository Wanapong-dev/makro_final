const createError = require("../utils/createError")
const jwt = require("jsonwebtoken")
const userService = require("../services/user-service")

const authenticate = async (req,res,next) => {
    try {
        const authorization = req.headers.authorization

        // check ว่ามี authorization? และเริ่มด้วย Bearer

        if(!authorization || !authorization.startsWith("Bearer")) {
            return createError(401,"Unauthorized")
        }

        // แยก token ออกมา
        const token = authorization.split(" ")[1]

        if(!token) {
            return createError(401,"Unauthorized")
        }

        console.log(process.env.JWT_SECRET)
        // Verify Token
        const jwtPayload = jwt.verify(token, process.env.JWT_SECRET)
        // check user มีในระบบ
        const user = await userService.getUserById(jwtPayload.id)

        if(!user) {
            return createError(401,"Unauthorized")
        }
        // ติด user ไว้ใน request
        req.user = user
        next()

    } catch (err) {
        next(err)
    }
}

module.exports = authenticate