import {Box, Button,Heading,Text,Input, useToast} from "@chakra-ui/react"
import {useContext, useEffect,useState} from "react"
import React from 'react';
import  "./NewGame.css"
import { AuthContext } from "../../Components/Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NewGame = () => {
  const {authState}=useContext(AuthContext);
  const [flag,setFlag]=useState(false);
  const [fplayer,setf]=useState(undefined)
  const [splayer,setPlayer]=useState(undefined)
  const fontsize={
    base:"12px",
    sm:"12px",
    md:"15px"
  }
  const nav=useNavigate()
  const toast=useToast()
  console.log(authState.gameId,authState.token)
  const generate=async()=>{
    try {
     let data=await axios.get(`http://localhost:8080/games?q=${authState.gameId}`,{
        headers:{
          "Authorization":authState.token
        }
     })
     setPlayer(data.data.data.playerSecondUserName )
     setf(data.data.data.playerFirstUserName)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    generate()
    if(splayer!==undefined){
      toast({
        title: "Game will start in 5 seconds",
        status: "success",
        duration:5000,
        isClosable: true,
      })
      setTimeout(()=>{
        nav("/game")
      },5000)
    }
  }, [flag,splayer]);
  return (
    <Box className={"mmain"}>
      <Heading className="hhead">The Game</Heading>
        <Box className={"ggamebox"} width={{base:"80%",sm:"60%",md:"40%"}}textAlign="left">
            <Box fontFamily="Press2p" textAlign="left" fontSize={fontsize} px="10px"><Text>GameId:{authState.gameId}</Text></Box>
            <Box fontFamily="Press2p" textAlign="left" fontSize={fontsize}  px="10px"><Text>Player 1:{fplayer} </Text></Box>
            <Box fontFamily="Press2p" textAlign="left" fontSize={fontsize} px="10px"><Text>Player 2: {splayer?splayer:"...Waiting"}</Text></Box>
            <Box>
            <Button className="buttons" bgColor="yellow" alignSelf="center" _hover={{bgColor:"blue"}} disabled={true}>Start Game</Button>
            <Button className="buttons" bgColor="yellow" alignSelf="center" _hover={{bgColor:"blue"}} onClick={()=>setFlag(!flag)}>Refresh</Button>

            </Box>
        </Box>
    </Box>
  );
}

export default NewGame;