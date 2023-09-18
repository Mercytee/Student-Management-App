import './css/Style.css';
import React, {useState} from "react";
const CreateStudent = () =>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nationalId, setNationalId] = useState('');
  
   
    return(
        <form>
           
            <div className='main'>
            <main>
            <h1>Usher High School</h1>
            <br />
            <h2>New Student Registration Form</h2>
            <br />
            <h3>Personal Information</h3>
            <br />
            <div className = "label-container">
            <label>
                First Name:
                <br />
                <input
                type = "text"
                value = {firstName}
                />
                
            </label>
            <br />
      
            </div>

            <div className = "label-container">
            <label>
                Last Name:
                <br />
                <input
                type = "text"
                value = {firstName}
                />
                
            </label>
            <br />
            
            </div>

            <div className = "label-container">
            <label>
                National Id:
                <br />
                <input
                type = "text"
                value = {firstName}
                />
               
            </label>
            <br />
            
            </div>
            <div className='label-container'>
            <button>SUBMIT</button>

            </div>

            </main>
            </div>
         
       
            
        </form>
    )
    
};;
export default CreateStudent;