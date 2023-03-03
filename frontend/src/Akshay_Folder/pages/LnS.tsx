import {Box, Button,Heading} from "@chakra-ui/react"
import React from 'react';
import { useNavigate } from "react-router";
import  "./Homepage.css"
const Lns = () => {
  const navigate=useNavigate()
  return (
    <Box className={"main"}>
      <Heading className="head">The Game</Heading>
        <Box className={"gamebox"}>
            <Button onClick={()=>navigate("/login")} className="buttons" bgColor="yellow" _hover={{bgColor:"blue"}}>Login</Button>
            <Button onClick={()=>navigate("/signup")} className="buttons" bgColor="yellow" _hover={{bgColor:"blue"}}>Signup</Button>
        </Box>
    </Box>
  );
}

export default Lns;