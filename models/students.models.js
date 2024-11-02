import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: {
      type: String,
      required: false,
      default: ""
    },
    school: {
      type: String,
      required: false,
      default: ""
    },
    trade: {
      type: String,
      required: false,
      default: ""
    },
    age: {
      type: Number,
      required: false,
      default: ""
    },
    
  },
  {
    timestamp: true,
  }
);

const students = mongoose.model('Students', studentSchema)

export default students;