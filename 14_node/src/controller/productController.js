const { default: mongoose } = require('mongoose');
const categorymodel = require('../models/category');
const productmodel = require('../models/product');
const product = require('../models/product');

async function createProduct (req,res){
    console.log(req.body);
    const userid = req.user._id;
    const{
        productname,
        description,
        category,
        price,
        available,
        quantity,
        createdBy,
    } = req.body;

    try{
        const existingCategory = await categorymodel.findById(category);
        if(!existingCategory){
            return res.status(404).json({
                msg:"category not found"
            })
        }
        const existingProduct = await productmodel.findOne({
            productname,
            category
        });
        if(existingProduct){
            return res.status(400).json({
                msg:"Product already exists"
            })
        }
        const newProduct = new productmodel({
            productname,
            description,
            category,
            price,
            available,
            quantity,
            createdBy:userid,
            createdAt:Date.now()
        });
        await newProduct.save();
        res.json({
            msg:"product created successfully"
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"server error"
        });
    }
}

async function getProductById(req,res){
    console.log(req.body);
    const{id} = req.params;
    try{
        const product = await productmodel.findById(id);
        console.log(id);
        if(!product){
            res.status(404).json({
                msg:"product not found"
            })
        }
        return res.status(201).json({
            msg:"product created successfully",
            product:product
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

async function getAllProduct(req,res){
    console.log(req.body);
    try{
        const product = await productmodel.find()
        .populate("category","productname");
        const modifiedProducts = product.map((product)=>({
            _id:product._id,
            productname:product.productname,
            category:product.category,
            price:product.price,
            availability:product.available ? "InStock" : "OutOfStock",
            quantity:product.quantity,
            description:product.description,
            updatedAt:product.updatedAt || product.createdAt,
        }));
        res.status(201).json({modifiedProducts})
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:"Internal server error"
        })
    }
}

async  function updateProduct(req,res){
    console.log(req.body);
    const{productname,category,price,available,quantity} = req.body;
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            msg:"Invalid product id"
        });
    }
    try{    
        const product = await productmodel.findById(category);
        if(!product){
            return res.status(404).json({
                msg:"product not found"
            })
        }
        product.productname = productname || product.productname;
        product.category = category || product.category,
        product.price = price || product.price,
        product.available = available !== undefined ? available : product.available
        await product.save();
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:"server error"
        })
    }
}

async function deleteProduct (req,res) {
    console.log(req.body);
    const {id} = req.params;
    try{
        const product = await productmodule.findByIdAndDelete(id);
        console.log(id);
        if (!product) {
          return res.status(404).send({ msg: "Product not found" });
        }
    
        res.status(201).send({ msg: "Product Deleted Sucessfully" });
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:"server error"
        })
    }
}

module.exports={
    createProduct,
    getProductById,
    getAllProduct,
    updateProduct,
    deleteProduct
}