import {Box, Button,Heading,Text,Input} from "@chakra-ui/react"
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const GameOver = () => {
    const [seconds, setSeconds] = useState(10);

//  Timer for minus count --------
    useEffect(() => {
        const timer =
          seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
        return () => clearInterval(timer)
      }, [seconds]);
 
    //    Function for get back in lobby 
     const navigate = useNavigate()
      useEffect(()=>{
        // if(seconds == 0){
        //     navigate("/homepage")
        // }
      },[seconds])


  return (
    <Box mt="200px">
        <Box className={"ggamebox"} textAlign="left">
            <Box fontFamily="Press2p" textAlign="center" color="#ce0000" px="10px" ><Text>Game Over</Text></Box>
            <Box fontFamily="Press2p" textAlign="center" color="" mt="-12px" ><Text>`Back in lobby in {seconds} seconds </Text></Box>
            <Heading>Winner </Heading>
            <Box display="flex" justifyContent="space-between" >
                {/* Player 1 stats------ */}
            <Box fontFamily="Press2p" textAlign="left" px="10px">
                <Text>Player 1</Text>
                <Text mt="10px">Durgesh</Text>
                <Text mt="10px">Score 10</Text>
                </Box>

            <Box  borderRight="2px solid black"></Box>

            {/* Player -2 ------- */}
            <Box fontFamily="Press2p" textAlign="left" px="10px">
                <Text>Player 2</Text>
                 <Text mt="10px">Akshay</Text>
                 <Text mt="10px">Score 3</Text>
            </Box>
            </Box>
            <Link to="/homepage"><Text className="buttons" bgColor="yellow" textAlign="center"  _hover={{bgColor:"blue"}} width="40%" m="auto" disabled={true}>Exit</Text></Link>
        </Box>
    </Box>
  )
}

export  {GameOver}
