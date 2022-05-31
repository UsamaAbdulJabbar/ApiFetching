import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Home() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


    const signup = () => {
        let obj = {
            name,
            email,
            
        };
        console.log(obj);
        navigate(`/profile  /${name}`, { state: obj });
        navigate(`/profile  /${name}`, { state: obj });
        
    };


    return (
        <>

        <Typography variant='h4'>Login</Typography>


<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField onChange={(e)=>setName(e.target.value)} id="filled-basic" label="Username" variant="filled" />
      
    </Box>
      
      
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField onChange={(e)=>setEmail(e.target.value)} id="filled-basic" label="Email" variant="filled" />
      
    </Box>
      
      

    <Button onClick={signup} variant="contained" color='success' >
      LOGIN
    </Button>

        </>

    )
}
