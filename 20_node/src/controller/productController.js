const productmodel = require('../models/product');

const createProduct = async (req,res) =>{
    const {name,price,instsock} = req.body;
    try{
        const newProduct = new productmodel({
            name,price,instsock
        })
    }catch(err){
        console.log(err);        
        return res.status(500).json({
            msg:"Internal server error"
        })
    }
}
