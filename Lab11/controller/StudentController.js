import Student from '../model/Student.js';

const StudentController = {
    getAllStudents : (req, res, next) => {
        try {
            const students = Student.getAllStudents();
            res.status(200).json(students);
        } catch (error) {
            next(error);
        }
    },
    getStudentsByQuerystring : (req, res, next) => {
        try {
        const { sort, order = 'asc' } = req.query;

            const students = Student.getStudentsByQuerystring(req.query);
            if (students.length > 0) {
                res.status(200).json(students);
            } else {
                res.status(404).json({ message: 'No students found with the given criteria' });
            }
        } catch (error) {
            next(error);
        }
    },
    getStudentById : (req, res, next) => {
        try {
            const student = Student.getStudentById(req.params.id);
            res.status(200).json(student);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    createStudent : (req, res, next) => {
        try {
            const { id, name, program } = req.body;
            const newStudent = Student.createStudent(id, name, program);
            res.status(201).json(newStudent);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updateStudent : (req, res, next) => {
        try {
            const updatedData = req.body;
            const updatedStudent = Student.updateStudent(req.params.id, updatedData);
            res.status(200).json(updatedStudent);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    deleteStudent : (req, res, next) => {
        try {
            Student.deleteStudent(req.params.id);
            res.status(200).json({ message: 'Student deleted successfully' });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
};

export default StudentController;