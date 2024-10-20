class Question {
    public qid: number;
    public answer: string;

    constructor(qid: number, answer: string) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(correctAnswer: string): boolean {
        return this.answer === correctAnswer;
    }
}

class Student {
    public studentId: number;
    public answers: Question[];

    constructor(studentId: number) {
        this.studentId = studentId;
        this.answers = [];
    }

    addAnswer(question: Question): void {
        this.answers.push(question);
    }
}

class Quiz {
    private questions: Map<number, string>;
    private students: Student[];

    constructor(questions: Question[], students: Student[]) {
        this.questions = new Map();
        questions.forEach(question => {
            this.questions.set(question.qid, question.answer);
        });
        this.students = students;
    }

    scoreStudentBySid(sid: number): number {
        const student = this.students.find(student => student.studentId === sid);
        if (!student) return 0;
        
        let score = 0;
        student.answers.forEach(answeredQuestion => {
            const correctAnswer = this.questions.get(answeredQuestion.qid);
            if (correctAnswer !== undefined && answeredQuestion.checkAnswer(correctAnswer)) {
                score++;
            }
        });
        return score;
    }

    getAverageScore(): number {
        const totalScore = this.students.reduce((acc, student) => {
            return acc + this.scoreStudentBySid(student.studentId);
        }, 0);
        return totalScore / this.students.length;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];

const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10);

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11);

let average = quiz.getAverageScore();
console.log(average);
