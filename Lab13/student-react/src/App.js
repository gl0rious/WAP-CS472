import './App.css';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import { useEffect, useState } from 'react'


function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/students");
        if (!response.ok) {
          throw new Error('Network error');
        }
        const result = await response.json();
        setStudents(result);
      } catch (error) {
        alert(error);
      } finally {
        // setLoading(false);
      }
    };
    fetchData();
  }, []);
  const onStudentSave = (data) => {
    setStudents([...students, data]);
  }
  const onDeleteStudent = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/students/${id}`,
        { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Network error on delete');
      }
      setStudents(students.filter(std => std.id !== id));
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <h1>Student Registration</h1>
      <div class="container">
        <StudentForm onStudentSave={onStudentSave} />
        <StudentTable students={students} onDeleteStudent={onDeleteStudent} />
      </div>
    </>
  );
}

export default App;
