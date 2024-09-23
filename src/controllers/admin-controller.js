exports.adminCreateProduct = (req, res, next) => {
    try {
        res.json({message: "Admin create product"})
    } catch (err) {
        next(err)
    }
}

exports.adminUpdateProduct = (req, res, next) => {
    try {
        res.json({message: "Admin update product"})
    } catch (err) {
        next(err)
    }
}

exports.adminDeleteProduct = (req, res, next) => {
    try {
        res.json({message: "Admin delete product"})
    } catch (err) {
        next(err)
    }
}

exports.adminUpdateOrderStatus = (req, res, next) => {
    try {
        res.json({message: "Admin update order status "})
    } catch (err) {
        next(err)
    }
}