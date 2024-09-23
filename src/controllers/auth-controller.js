exports.register = (req, res, next) => {
    try {
        
        res.json({message: "Register"})
    } catch (err) {
        next(err)

    }
}

exports.login = (req, res, next) => {
    try {
        res.json({message: "login"})
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

