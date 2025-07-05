const customer = require('../models/customer');

const getCustomers = async(req,res)=>{
    try{
        const allProducts = await customer.find({});
        return res.status(200).json(allProducts);
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}

const createCustomer = async(req,res)=>{
    try{
        const {firstName , lastName , totalAmount} = req.body;

        console.log(req.body);

        const newCustomer = new customer({firstName,lastName,totalAmount});
        console.log(newCustomer);
        await newCustomer.save();
        return res.status(200).json({
            customer: newCustomer
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

const updateCustomer = async (req,res)=>{
    try{
        const {id} = req.params;
        const {firstName,lastName,totalAmount} = req.body;
        const updateCustomer = await customer.findByIdAndUpdate(id,{firstName,lastName,totalAmount},{new:true});
        return res.status(200).json({
            customer:updateCustomer
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}

const deleteCustomer = async (req,res)=>{
    try{

        const {id} = req.params;
        // console.log(id);
        
        const deleted = await customer.findByIdAndDelete(id);
    
        if(!deleted){
            return res.status(404).json({
                status:"product not found"
            });
        }
        return res.status(200).json({
            status:"product deleted successfully"
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            messgae:"Internal server error"
        })
    }
}

module.exports = {
    getCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
}
