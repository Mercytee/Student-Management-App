import './css/Style.css';
import React, {useState} from "react";
const CreateStudent = () =>{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nationalId, setNationalId] = useState('');
  
   
    return(
        <div>
                 <h1>Usher High School</h1>
            <br />
            <h2>New Student Registration Form</h2>
            <br />
            <h3>Personal Information</h3>
            <br />

            <form>
           
           <div className='main'>
           <main>
      
           <div >
           <label>
               First Name:
               <br />
               <input
               type = "text"
               value = {firstName}
               onChange={(e)=>{console.log(e.target.value)}}
               />
               
           </label>
           <br />
     
           </div>

           <div >
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

           <div >
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
           <div id="submit-button">
           <button>SUBMIT</button>

           </div>

           </main>
           </div>
        
      
           
       </form>
        </div>
       
    )
    
};;
export default CreateStudent;