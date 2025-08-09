const productmodel = require('../models/product');

const createProduct = async (req,res) =>{
    const {name,price,instsock} = req.body;
    try{
        const newProduct = new productmodel({
            name,price,instsock
        })
        return res.status(200).json({
            product:newProduct,
            msg:"Product created successfully"
        })
    }catch(err){
        console.log(err);        
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}


module.exports = {
    createProduct
}