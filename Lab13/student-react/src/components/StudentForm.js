import { useState } from "react";



const initialData = { id: '', name: '', program: '' };

export default function StudentForm({ onStudentSave }) {
    const [formData, setFormData] = useState(initialData);
    const handleIdChange = (event) => {
        setFormData({ ...formData, id: event.target.value });
    };
    const handleNameChange = (event) => {
        setFormData({ ...formData, name: event.target.value });
    };
    const handleProgramChange = (event) => {
        setFormData({ ...formData, program: event.target.value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await saveStudent(formData);
            onStudentSave(formData);
            setFormData(initialData);
        } catch (error) {
            alert(error);
            console.error('Error:', error);
        }
    };

    const saveStudent = async (data = {}) => {
        const response = await fetch('http://localhost:3000/api/v1/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const result = await response.json();
            const errorMessage = `${result.message}`;
            throw new Error(errorMessage);
        }

        const result = await response.json();
        console.log('Success:', result);
        return result;
    };



    const handleReset = (event) => {
        event.preventDefault();
        setFormData(initialData);
    };
    return (
        <div className="form-container">
            <h2>Create a student</h2>
            <form id="student-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="student-id">ID:</label>
                    <input type="text" id="student-id" placeholder="Enter student id"
                        onChange={handleIdChange}
                        value={formData.id} />
                </div>
                <div className="form-group">
                    <label htmlFor="student-name">Name:</label>
                    <input type="text" id="student-name" placeholder="Enter student name"
                        onChange={handleNameChange}
                        value={formData.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="student-program">Program:</label>
                    <input type="text" id="student-program" placeholder="Enter student program"
                        onChange={handleProgramChange}
                        value={formData.program} />
                </div>
                <div className="form-actions">
                    <button type="reset" onClick={handleReset}>Reset</button>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}