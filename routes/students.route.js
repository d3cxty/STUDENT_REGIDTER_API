import express from 'express';
import app from '../controllers/students.controller.js';
const router = express.Router();
router.use(express.json());

router.post('/student/add',app.addStudent);
router.get('/student/find/',app.findStudent);
router.get('/student/find/:id',app.findStudentById);
router.delete('/student/delete/:id',app.deleteStudent)

export default router;