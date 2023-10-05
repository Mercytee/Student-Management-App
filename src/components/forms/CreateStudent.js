import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import './css/Style.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import { GlobalStyles } from '@mui/material';
import { global_theme } from "../themes/theme";

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },

  overrides: {
    MuiTypography: {
      h1: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '1rem',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
      },
      h3: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      },
    },
    MuiInputLabel: {
      root: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      },
    },
  },
});

const CreateStudent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationalId, setNationalId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, nationalId);
  };


  return (
    <center>
      <ThemeProvider theme={global_theme}>
        {/* <GlobalStyles 
                    styles={{ 
                        h1: { color: "green" }, 
                        p: { color: "gray" }, 
                        button: { backgroundColor: "green", padding: 20 }, 
                        a: { textDecoration: "none", color: "white" }, 
                        TextField:{variant:"outlined", size: "small",
                        color:"warning", marginRight:"10"},
                        Button:{variant:"contained", color: "primary"},
                    }} 
                    
                            
                />  */}
        <div>
          <Typography variant="h1" component="h1" >Usher High School</Typography>
          <br />
          <h2>New Student Registration Form</h2>
          <br />
          <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Personal Information
          </Typography>
          <br />

          <form onSubmit={handleSubmit}>
            <div className='main'>
              <main>

                <div >
                  <Typography label>

                    <br />
                    <TextField
                      label="First Name"
                      variant="outlined"
                      size="small"
                      style={{ marginRight: 10 }}
                      onChange={(event) => setFirstName(event.target.value)}
                    />


                  </Typography>
                  <br />

                </div>

                <div >
                  <Typography label>

                    <br />
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      size="small"
                      color="warning"
                      style={{ marginRight: 10 }}
                      onChange={(event) => setLastName(event.target.value)}
                    />


                  </Typography>
                  <br />

                </div>
                <div >
                  <Typography label>

                    <br />
                    <TextField
                      label="National Id "
                      variant="outlined"
                      size="small"
                      width="25ch"
                      color="warning"
                      style={{ marginRight: 10 }}
                      onChange={(event) => setNationalId(event.target.value)}
                    />


                  </Typography>
                  <br />

                </div>


                <div>

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ padding: '10px 20px' }}
                  >
                    Submit
                  </Button>
                </div>

              </main>
            </div>



          </form>
        </div>


      </ThemeProvider>
    </center>

  )

};;
export default CreateStudent;

function submitButton() {
  return <Button variant="contained" color="primary">SUBMIT</Button>;
}

function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>

  );
}