const product = require('../models/productModel');

const getProducts = async (req, res) => {
    try {
        const allProducts = await product.find({});
        return res.json(allProducts);

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const newProduct = new product({ name, price });
        await newProduct.save();
        return res.status(200).json({
            product: newProduct
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;
        const updateProduct = await product.findByIdAndUpdate(id, { name, price }, { new: true });
        return res.status(200).json({
            product: updateProduct
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internal server Error"
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteProduct = await product.findByIdAndDelete(id);
        // console.log(deleteProduct);
        
        if (!deleteProduct) {
            return res.status(404).json({
                status: "product not found"
            })
        }
        return res.json({
            status: "product deleted successfully"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}