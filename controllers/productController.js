const db = require('../models')

// Create Models

const Product = db.products

const Review = db.reviews

// Main Work

// 1. Create product

const addProduct = async (req,res) => {

    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        publish: req.body.publish ? req.body.publish : false
    }

    console.log(info, "==> info")

    // res.status(200).json(info)

    const product = await Product.create(info)
    res.status(200).send(product) 
    console.log(product)
}

// 2. Get All Product

const getAllProducts = async (req, res) => {

    let products = await Product.findAll({})
    res.status(200).send(products)

}

// 3. Get Single Product

const getOneProduct = async (req, res) => {
    
    let id = req.params.id
    let product = await Product.findOne(
        {where:{
        id: id
        }
    })
    res.status(200).send(product)
}

// 4. Update Product

const updateProduct = async (req, res) => {

    let id = req.params.id

    const product = await Product.update(req.body, {where: {id: id}})

    res.status(200).send(product)

}

// 5. Delete Product

const deleteProduct = async (req, res) => {

    let id = req.params.id

    await Product.destroy({where: { id:id}})

    res.status(200).send("Product is deleted")

}

// 6. Get All Published Product

const getPublishedProdcuts = async (req, res) => {

    const products = await Product.findAll({where: {publish: true}})

    res.status(200).send(products)

}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProdcuts
}