import {Box, Button,Heading} from "@chakra-ui/react"
import React from 'react';
import { useNavigate } from "react-router";
import  "./Homepage.css"
const Homepage = () => {
 const navigate=useNavigate()
  return (
    <Box className={"main"}>
      <Heading className="head">The Game</Heading>
        <Box className={"gamebox"}>
            <Button onClick={()=>navigate("/newgame")} className="buttons" bgColor="yellow" _hover={{bgColor:"blue"}}>New Game</Button>
            <Button onClick={()=>navigate("/joingame")} className="buttons" bgColor="yellow" _hover={{bgColor:"blue"}}>Join Game</Button>
        </Box>
    </Box>
  );
}

export default Homepage;
