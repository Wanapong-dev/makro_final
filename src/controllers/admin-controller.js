const createError = require("../utils/createError")
const {createProductSchema} =require("../validators/product")
const cloudinary =require("../config/cloudinary")
const prisma =require("../config/prisma")
const fs =require("fs/promises")

exports.adminCreateProduct = async (req, res, next) => {
    try {

        req.body.length =  +req.body.length
        req.body.width = +req.body.width
        req.body.height = +req.body.height
        req.body.weight = +req.body.weight
        req.body.stock = +req.body.stock
        req.body.categoryId = +req.body.categoryId
        


        const data = req.body
        console.log(data)
        // await createProductSchema.validateAsync(req.body)
        
        
        console.log("cloudinary = ",cloudinary)
        if(req.files.length === 0) {
            return createError(400, "At least 1 image to be uploaded")
        }

        const imagePromiseArray = []

        for(let file of req.files) {
            const promiseUrl = cloudinary.uploader.upload(file.path);
            imagePromiseArray.push(promiseUrl)
        }

        

        const imageArray = await Promise.all(imagePromiseArray)

        const newProduct = await prisma.product.create({
            data: {
                ...data,
                productImages: {
                    createMany: {
                        data: imageArray.map(el => ({url: el.secure_url}))
                    }
                }
            },
            include: {
                productImages: true,
            }
        })

        
        res.json({message: "Admin create product"})
    } catch (err) {
        next(err)
    } finally {
        const toDeletePromiseArray = req.file.map(file => fs.unlink(file.path))
        await Promise.all(toDeletePromiseArray)
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