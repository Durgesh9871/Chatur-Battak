import {Box, Button,Heading} from "@chakra-ui/react"
import React from 'react';

import { useNavigate } from "react-router";
import {useContext, useEffect,useState} from "react"
import { AuthContext } from "../../Components/Context/AuthContext";
import axios from "axios"; 
import  "./Homepage.css"
const Homepage = () => {
  const {authState,EnterGame}=useContext(AuthContext)
  const generate=async()=>{
    try {
      let data=await axios.post("http://localhost:8080/games/newGame",{name:authState.Name,userId:authState.id},{
          headers:{
            "Authorization":authState.token
          }
      }) 
      EnterGame(data.data.id)
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
 const navigate=useNavigate()
  return (
    <Box className={"main"}>
      <Heading className="head">The Game</Heading>
        <Box className={"gamebox"}>
            <Button onClick={()=>{generate();setTimeout(()=>{navigate("/newgame")},1000)}} className="buttons" bgColor="yellow" _hover={{bgColor:"blue"}}>New Game</Button>
            <Button onClick={()=>navigate("/joingame")} className="buttons" bgColor="yellow" _hover={{bgColor:"blue"}}>Join Game</Button>
        </Box>
    </Box>
  );
}

export default Homepage;
