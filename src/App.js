import './App.css';
import './Css/Styling.css';

function App() {
  return (
    <div>
      <h1>Usher High School</h1>
      <h1>Student Portal</h1>
      <div className="button-container">
        <button className="register-button">Register New Student</button> 
      </div>
      <table class = 'center'>
        <caption>All Students</caption>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>National Id</th>
          <th>Tasks</th>
        </thead>
        <tbody>
          <tr>
            <td>Mercy</td>
            <td>Ngwenya</td>
            <td>09-3456123D15</td>
            <td><button>View Student</button> <button>Edit Student</button> <button>Delete Student</button></td>
          </tr>

          <tr>
            <td>Charity</td>
            <td>Moyo</td>
            <td>23-3456123K15</td>
            <td><button>View Student</button> <button>Edit Student</button> <button>Delete Student</button></td>
          </tr>
        </tbody>
        <tr>
          
          </tr>
      </table>
    </div>
  );
}

export default App;
