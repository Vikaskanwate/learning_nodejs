const student = require('../model/student')

const getStudents = async (req,res)=>{
    try{
        const students = await student.find({});
        res.status(200).json({
            students
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

const addStudent = async (req,res)=>{
    try{
        const {firstName,lastName,course} = req.body;
        const newStudent = new student({
            firstName,
            lastName,
            course
        });
        await newStudent.save();
        res.status(200).json({
            student:newStudent
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        });
    }
}

const findStudentById = async (req,res)=>{
    try{
        const {id} = req.params;
        console.log(id);
        const stud = await student.findById(id);
        if(!stud){
            res.status(400).json({
                message:`student not with id ${id}`
            })
        }
        res.status(200).json({
            message:stud
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        });
    }
}

const updateStudent = async ()=>{
    try{
        const {firstName,lastName,course} = req.body
        
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}


module.exports = {
    getStudents,
    addStudent,
    findStudentById
}
