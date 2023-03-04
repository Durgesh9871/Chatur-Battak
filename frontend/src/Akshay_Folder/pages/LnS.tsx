import {Box, Button,Heading} from "@chakra-ui/react"
import React from 'react';
import { useNavigate } from "react-router";
import  "./Homepage.css"
import {useContext, useEffect,useState} from "react"
import { AuthContext } from "../../Components/Context/AuthContext";
import axios from "axios"; 
const Lns = () => {
  const navigate=useNavigate()

    const fontsize={
      base:"12px",
      sm:"12px",
      md:"15px"
    }
  
  return (
    <Box className={"main"}>
      <Heading className="head">The Game</Heading>
        <Box className={"gamebox"} width={{base:"80%",sm:"60%",md:"40%"}}>
            <Button onClick={()=>{navigate("/login")}} className="buttons" bgColor="yellow" _hover={{bgColor:"blue"}}>Login</Button>
            <Button onClick={()=>navigate("/signup")} className="buttons" bgColor="yellow" _hover={{bgColor:"blue"}}>Signup</Button>
        </Box>
    </Box>
  );
}

export default Lns;