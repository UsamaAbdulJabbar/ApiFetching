import React from 'react'



import { Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

function Dashboard() {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Typography variant='h5'>user Name : {params.id}</Typography>
      <Typography variant="h5">Email:{location.state.email}</Typography>
      
    </>
  );
}

export default Dashboard;
