import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { Typography } from '@mui/material';


export default function Api() {

   

    const [first, setFirst] = useState("")

    const GetApi = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((res)=>{setFirst(res.data);console.log(res)}).catch((err)=>console.log(err));
            
    }

    const PostApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/todos',{
            userId:"1527",
            title:"Usama Ahmed",
            name:"sjkcjk"
        }).then((res)=>{setFirst(res.data);console.log(res)}).catch((err)=>console.log(err));
    }

    const PutApi=()=>{
     
        axios.put('https://jsonplaceholder.typicode.com/todos/1',{
            userId:"1527",
            title:"usama",
            
        }).then((res)=>{setFirst(res.data);console.log(res)}).catch((err)=>console.log(err));
    }

    const DelApi=()=>{
        
        axios.delete('https://jsonplaceholder.typicode.com/todos/2',{
            userId:"1527",
            title:"Usama Ahmed",
            
        }).then((res)=>{setFirst(res.data);console.log(res)}).catch((err)=>console.log(err));
    }

    return (
        <>

            <Button onClick={GetApi} variant="outlined">Get Api</Button>
            <Button onClick={PostApi} variant="outlined">Post Api</Button>
            <Button onClick={PutApi} variant="outlined">Put Api</Button>
            <Button onClick={DelApi} variant="outlined">Delete Api</Button>
            
        <div>
        {
            first ?
            first.title: ""
        }
        </div>
        <div>
        {
            first ?
            first.userId:""
        }
        </div>

        </>



    )
}
