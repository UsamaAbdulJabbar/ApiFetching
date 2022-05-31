import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
   import '../App.css';
import About from "../components/about";
import Home from "../components/home";
import Service from "../components/service";
import Dashboard from "../components/dashboard";
import Api from "../components/api";
import ResponsiveDrawer from "../components/maindashboard";
import GetApiFunction from "../apiFunctions/getApiFunction";
import PostApiFunction from "../apiFunctions/postApiFunction";
import PutApiFunction from "../apiFunctions/putApiFunction";
import DelApiFunction from "../apiFunctions/delApiFunction";
import CommentsApiFunction from "../apiFunctions/comments";

function RoutingApp(){

    return(
        <>
        <Router>
      
            <Routes>
                <Route path="/" element={<ResponsiveDrawer/>}/>
                <Route path="/api/getApiFunction" element={<Api/>}/>
                <Route path="/getApiFunction" element={<GetApiFunction/>}/>
                <Route path="/postApiFunction" element={<PostApiFunction/>}/>
                <Route path="/putApiFunction" element={<PutApiFunction/>}/>
                <Route path="/delApiFunction" element={<DelApiFunction/>}/>
                <Route  path="/comments" element={<CommentsApiFunction/>} />
            </Routes>
        </Router>
        
        
        
        </>
    )


}



export default RoutingApp;