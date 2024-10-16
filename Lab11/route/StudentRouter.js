import StudentController from "../controller/StudentController.js";
import express from "express"

const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        if (Object.keys(req.query).length > 0) {
            return StudentController.getStudentsByQuerystring(req, res, next);
        } else {
            return StudentController.getAllStudents(req, res, next);
        }
    })
    .post(express.json(), StudentController.createStudent);

router.route('/:id')
    .delete(express.json(), StudentController.deleteStudent)
    .put(express.json(), StudentController.updateStudent)
    .get(StudentController.getStudentById);


export default router;