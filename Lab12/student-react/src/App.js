import './App.css';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <h1>Student Registration</h1>
      <div class="container">
        <StudentForm />
        <StudentTable />
      </div>
    </>
  );
}

export default App;
