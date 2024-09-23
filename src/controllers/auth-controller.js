const createError = require("../utils/createError")
const prisma = require("../config/prisma")
const bcrypt = require("bcryptjs")
const { v4: uuidv4 } = require('uuid');
const userService = require("../services/user-service")
const jwt = require("jsonwebtoken")



exports.register = async (req, res, next) => {
    
    try {
        const {email, password} = req.body

        // ตรวจสอบว่ามี Email และ Password หรือไม่
        if(!email || !password) {
            return createError(400, " Email and password to be provided")
        }

        // ตรวจสอบว่า Email และ Password เป็น string
        if (typeof email !== "string" || typeof password !== "string") {
            return createError(400, "Typeof email or password is invalid")
        }

        // ตรวจว่ามี User อยู่ในระบบจริงหรือไม่
        const isUserExist = await userService.getUserByEmail(email)

        if(isUserExist) {
            return createError(400, "User already exist")
        }

        // hash password

        const hashedPassword = await bcrypt.hash(password,10)
        // สร้าง user

        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                memberId: uuidv4(),
            }
        })

        res.json({message: "Register"})
    } catch (err) {
        next(err)

    }
}

exports.login = async (req, res, next) => {
    try {
        const {email,password} =req.body

        if(!email || !password) {
            return createError(400,"Email and password are required")
        }

        if(typeof email !== "string" || typeof password !== "string") {
            return createError(400,"Typeof email or password is invalid")
        }

        // Check ว่ามี user ในระบบหรือเปล่า
        const user = await userService.getUserByEmail(email)

        if(!user) {
            return createError(400,"User not found")
        }

        // check password ตรงกันหรือไม่
        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if(!isPasswordMatch) {
            return createError(400, "Email or password is invalid")
        }
        // สร้าง token -> ส่ง token ออกให้ frontend ใช้

        const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET,{
            expiresIn: "30d"
        } )

        



        res.json({ token })
    } catch (err) {
        next(err)

    }
}

exports.forgetPassword= (req, res, next) => {
    try {
        res.json({message: "forgetPassword"})
    } catch (err) {
        next(err)

    }
}

exports.resetPassword = (req, res, next) => {
    try {
        res.json({message: "resetPassword"})
    } catch (err) {
        next(err)

    }
}
exports.confirmRegister= (req, res, next) => {
    try {
        res.json({message: "confirmRegister"})
    } catch (err) {
        next(err)

    }
}

