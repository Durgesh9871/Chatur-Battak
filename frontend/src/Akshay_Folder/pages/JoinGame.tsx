import React, { useState,useContext } from 'react';
import "./NewGame.css"
import{Box,Heading,Button,Text,Input,Stack,useToast} from "@chakra-ui/react"
import axios from "axios"
import { AuthContext } from '../../Components/Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { backendLink } from '../../BackendLink';
const JoinGame = () => {
  const [value,setValue]=useState("")
  const {authState,EnterGame}=useContext(AuthContext);
  const nav=useNavigate()
  const toast = useToast();
  const fontsize={
    base:"12px",
    sm:"12px",
    md:"15px"
  }
  const handleSubmit=async()=>{
      try {
          let data=await axios.patch(`${backendLink}/games/addSeconPlayer`,{gameId:value,name:authState.Name,userId:authState.id},{
            headers:{
              "Authorization":authState.token
            }
          })
          EnterGame(value)
          nav("/newgame")
        
          console.log(data)
      } catch (error) {
        toast({
          title: "Game Id not found",
          status: "warning",
          duration: 2000,
          isClosable: true,
        });
        console.log(error)
      }
  }
  return (
    <Box className={"mmain"}>
      <Heading className="head">Chatur Battak</Heading>
        <Box fontSize={fontsize} className={"gamebox"} width={{base:"80%",sm:"60%",md:"40%"}}>
          <Stack fontFamily="Press2p" direction="row"alignItems="center" justifyContent="center"><Text>Game Code :</Text><Input width="50%" value={value} onChange={(e)=>setValue(e.target.value)}></Input></Stack>
          <Button className="bbuttons" bgColor="yellow" alignSelf="center" _hover={{bgColor:"blue"}} onClick={handleSubmit}> Join Game</Button>

        </Box>
    </Box>
  );
}

export default JoinGame;
