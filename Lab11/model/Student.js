import _ from "lodash";

const students = [
    { id: 116257, name: "Anna Johnson", program: "MBA" },
    { id: 116258, name: "John Smith", program: "Compro" },
    { id: 116259, name: "Tom Brown", program: "Engineering" },
    { id: 116260, name: "Emily Davis", program: "Biology" },
    { id: 116261, name: "Michael Wilson", program: "MBA" },
    { id: 116262, name: "Sarah Moore", program: "History" },
    { id: 116263, name: "David Taylor", program: "Mathematics" },
    { id: 116264, name: "Laura Anderson", program: "Chemistry" },
    { id: 116265, name: "James White", program: "Physics" },
    { id: 116266, name: "Linda Harris", program: "Art" },
    { id: 116267, name: "Chris Clark", program: "Engineering" },
    { id: 116268, name: "Patricia Lewis", program: "Literature" },
    { id: 116269, name: "Daniel Robinson", program: "Compro" },
    { id: 116270, name: "Jennifer Walker", program: "MBA" },
    { id: 116271, name: "Paul Hall", program: "Biology" },
    { id: 116272, name: "Linda Allen", program: "History" },
    { id: 116273, name: "Nancy Young", program: "Mathematics" },
    { id: 116274, name: "Robert King", program: "Chemistry" },
    { id: 116275, name: "Laura Wright", program: "Physics" },
    { id: 116276, name: "William Scott", program: "Art" },
    { id: 116277, name: "Barbara Green", program: "MBA" },
    { id: 116278, name: "Steven Adams", program: "Compro" },
    { id: 116279, name: "Kimberly Baker", program: "Engineering" },
    { id: 116280, name: "Charles Gonzalez", program: "Biology" },
    { id: 116281, name: "Angela Nelson", program: "History" },
    { id: 116282, name: "Mark Carter", program: "Mathematics" },
    { id: 116283, name: "Betty Mitchell", program: "Chemistry" },
    { id: 116284, name: "Donald Perez", program: "Physics" },
    { id: 116285, name: "Susan Roberts", program: "Art" },
    { id: 116286, name: "Kevin Turner", program: "MBA" },
    { id: 116287, name: "Jessica Phillips", program: "Compro" },
    { id: 116288, name: "Laura Campbell", program: "Engineering" },
    { id: 116289, name: "Brian Parker", program: "Biology" },
    { id: 116290, name: "Rebecca Evans", program: "History" },
    { id: 116291, name: "Thomas Edwards", program: "Mathematics" },
    { id: 116292, name: "Barbara Murphy", program: "Chemistry" },
    { id: 116293, name: "Daniel Ramirez", program: "Physics" },
    { id: 116294, name: "Elizabeth Cooper", program: "Art" },
    { id: 116295, name: "Ronald Rivera", program: "MBA" },
    { id: 116296, name: "Michelle Reed", program: "Compro" },
    { id: 116297, name: "Dorothy Sanders", program: "Engineering" },
    { id: 116298, name: "Steven Price", program: "Biology" },
    { id: 116299, name: "Anthony Bennett", program: "History" },
    { id: 116300, name: "Jessica Wood", program: "Mathematics" },
    { id: 116301, name: "Laura Butler", program: "Chemistry" },
    { id: 116302, name: "Charles Simmons", program: "Physics" },
    { id: 116303, name: "Patricia Foster", program: "Art" },
    { id: 116304, name: "James Washington", program: "MBA" },
    { id: 116305, name: "Karen Hayes", program: "Compro" },
    { id: 116306, name: "Daniel Hughes", program: "Engineering" },
    { id: 116307, name: "Laura Gray", program: "Biology" },
    { id: 116308, name: "Kevin Ramirez", program: "History" },
    { id: 116309, name: "Emily Wells", program: "Mathematics" },
    { id: 116310, name: "Nancy Kelly", program: "Chemistry" },
    { id: 116311, name: "David Brooks", program: "Physics" },
    { id: 116312, name: "Karen Sanders", program: "Art" }
];


export default class Student {
    constructor(id, name, program) {
        this.id = parseInt(id);
        this.name = name;
        this.program = program;
    }
    // getAllStudents
    // getStudentsByQuerystring(consider filter and sort if there is any query string)
    // getStudentById
    // createStudent
    // deleteStudent
    // updateStudent

    static getAllStudents() {
        return _.clone(students);
    }

    static getStudentsByQuerystring(query) {
         const { sortBy, order = 'asc', ...filters } = query;
        
        let filteredStudents = students.filter(student => {
            for (let [key, value] of Object.entries(filters)) {
                if (!String(student[key]).toLowerCase().includes(value.toLowerCase())) {
                    return false;
                }
            }
            return true;
        });

        if (sortBy) {
            filteredStudents.sort((std1, std2) => {
                const comparison = String(std1[sortBy]).localeCompare(String(std2[sortBy]));
                return order === 'desc' ? -comparison : comparison;
            });
        }

        return filteredStudents;
    }

    static getStudentById(id) {
        id = parseInt(id);
        const student = students.find(e => e.id === id);
        if (!student) {
            throw new Error(`Student with ID ${id} not found`);
        }
        return student;
    }


    static createStudent(id, name, program) {
        id = parseInt(id);
        const student = students.find(e => e.id == id);
        if (student) {
            throw new Error(`Student with ID ${id} already exists`);
        }
        const newStudent = new Student(id, name, program);
        students.push(newStudent);
        return newStudent;
    }

    static deleteStudent(id) {
        id = parseInt(id);
        const index = students.findIndex(e => e.id == id);
        if (index === -1) {
            throw new Error(`Student with ID ${id} not found`);
        }
        students.splice(index, 1);
        return true;
    }

    static updateStudent(id, updatedData) {
        id = parseInt(id);
        const index = students.findIndex(student => student.id == id);
        if (index === -1) {
            throw new Error(`Student with ID ${id} not found`);
        }
        students[index] = { ...students[index], ...updatedData };
        return students[index];
    }
}