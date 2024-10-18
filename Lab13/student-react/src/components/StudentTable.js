
// const initialStudents = [
//     { id: 116257, name: "Anna Smith", program: "MBA" },
//     { id: 615789, name: "John Doe", program: "Compro" },
//     { id: 116868, name: "Tom Jerryh", program: "MBA" }
// ];

export default function StudentTable({ students, onDeleteStudent }) {
    return (
        <>
            <h2>All Students</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Program</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, i) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.program}</td>
                                <td><button onClick={() => onDeleteStudent(student.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}