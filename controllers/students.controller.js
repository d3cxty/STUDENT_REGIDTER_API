import express from 'express';
import student from '../models/students.models.js'

const app = express();
app.use(express.json());



//add student
app.addStudent = async (req, res) => {  // Use POST for adding students
    try {
      const newStudent = new student(req.body);
      const savedStudent = await newStudent.save();
      res.status(201).json(savedStudent); // Send a 201 Created response with the saved student data
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating student' }); // Handle errors
    }
  };

  
//fetch students
app.findStudent = async(req,res)=>{
    
    const Student = await student.find();
    res.json(Student);
    if(!Student){
        res.json({"message": "no students were found"});
    }
};

//fetch student by id
app.findStudentById = async(req,res)=>{
    const{id} = req.params;
    const Student = await student.findById(id);
    res.json(Student);
};

//delete student

app.deleteStudent = async(req,res)=>{
    try {
        const { id } = req.params;
        const deletedstudent = await student.findByIdAndDelete(id);

        if(!deletedstudent){
            return res.status(404).json({"message":"student not found"})
        }
        res.json({"message":"student deleted successfully"})
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting student' });
    }
};

export default app;