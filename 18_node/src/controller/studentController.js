const studentModel = require('../models/student');

const createStudent = async (req,res)=>{
    const {name,course} = req.body;
    try{
        const Student = await studentModel.findOne({name});
        if(!Student){
            const newStudent = new studentModel({
                name,
                course
            })

            await newStudent.save();
            return res.status(200).json({
                msg:"student created successfull",
                success:true
            })
        }

        return res.status(400).json({
            msg:"student already exists",
            success:true
        })
    
    }catch(err){
        res.status(500).json({
            msg:"Internal server error",
            success:false
        })
    }
}

const getAllStudent = async (req,res)=>{
    
}

module.exports = {
    createStudent
}