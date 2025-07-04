const product = require('../models/productModel');

const getProducts = async (req,res) =>{
    try{
        const allProducts = await product.find({});
        return res.json(allProducts);

    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}

module.exports = {
    getProducts,
}