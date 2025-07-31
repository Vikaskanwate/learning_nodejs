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
        console.log(err);
        
        res.status(500).json({
            msg:"Internal server error",
            success:false
        })
    }
}

const getAllStudent = async (req,res)=>{
    try{
        const students = await studentModel.find({});
        if(students){
            return res.status(200).json({
                student : students,
                success:true
            })
        }else{
            return res.status(404).json({
                msg:"no student registered"
            })
        }
    }catch(err){
        console.log(err);
        
        res.status(500).json({
            msg:"Internal server error",
            success:false
        })
    }
}

const getStudentById = async (req,res)=>{
    const {id} = req.params;
    try{
        const student = await studentModel.findById(id);
        if(student){
           return res.status(200).json({
                student:student,
                success:true
           })
        }else{
            return res.status(404).json({
                msg:"student with id not found",
                success:true
            })
        }
    }catch(err){
        console.log(err);
        
        res.status(500).json({
            msg:"Internal server error",
            success:false
        })
    }
}

const updateStudent = async (req,res)=>{
    const {name,course} = req.body;
    const {id} = req.params;
    try{
        const existingStudent = await studentModel.findById(id);
        if(!existingStudent){
           return res.status(400).json({
                msg:"student does not exist"
           })
        }
        existingStudent.name = name || existingStudent.name;
        existingStudent.course = course || existingStudent.course;

        return res.status(200).json({
            student: existingStudent,
            msg:"student updated"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:"Internal server error",
            success:false
        }) 
    }
}

const deleteStudent = async (req,res)=>{
    const {id} = req.params;
    try{
        const deletedStudent = await studentModel.findByIdAndDelete(id);
        if(deletedStudent){
            return res.status(200).json({
                msg:"student deleted succssfully"
            })
        }else{
            return res.status(400).json({
                msg:"student not deleted"
            })
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg:"Internal server error",
            success:false
        }) 
    }
}

module.exports = {
    createStudent,
    getAllStudent,
    getStudentById,
    updateStudent,
    deleteStudent
}