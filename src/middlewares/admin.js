const createError = require("../utils/createError")

const admin = (req, res, next) => {
    try {
        console.log(req.user.role !== "ADMIN")
        if(req.user.role !== "ADMIN") {
            return createError(403,"Forbidden")


        }

        next()
    } catch(err) {
        next(err)
    }
}

module.exports = admin