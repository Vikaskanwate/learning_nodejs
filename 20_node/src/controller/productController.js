const product = require('../models/product');
const productmodel = require('../models/product');

const createProduct = async (req,res) =>{
    const {name,price,instock} = req.body;
    try{
        const newProduct = new productmodel({
            name,price,instock
        })
        await newProduct.save();
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

const getAllProduct = async (req,res)=>{
    try{
        const product = await productmodel.find({});
        return res.status(200).json({
            product:product,
            msg:"success"
        })
    }catch(err){
        console.log(err);        
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

const getProductById = async (req,res)=>{
    const {id} = req.params;
    try{
        const product = await productmodel.findById(id);
        if(product){
            return res.status(200).json({
                product:product
            })
        }
        return res.status(404).json({
            msg:"product not found"
        })
    }catch(err){
        console.log(err);        
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

const updateProduct = async (req,res)=>{
    const {id} = req.params;
    try{
        const {name,price,instock} = req.body;
        const product  = await productmodel.findById(id);
        if(!product){
            return res.status(404).json({
                msg:"Product not found"
            })
        }
        product.name = name || product.name;
        product.price = price || product.price;
        product.instock = instock || product.instock;
        await product.save();
        return res.status(200).json({
            product:product
        })
    }catch(err){
        console.log(err);        
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}

module.exports = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct
}