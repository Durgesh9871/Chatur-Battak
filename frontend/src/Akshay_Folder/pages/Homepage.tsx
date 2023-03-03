import {Box, Button,Heading} from "@chakra-ui/react"
import React from 'react';
import  "./Homepage.css"
const Homepage = () => {

  return (
    <Box className={"main"}>
      <Heading className="head">The Game</Heading>
        <Box className={"gamebox"}>
            <Button className="buttons" bgColor="yellow" _hover={{bgColor:"blue"}}>New Game</Button>
            <Button className="buttons" bgColor="yellow" _hover={{bgColor:"blue"}}>Join Game</Button>
        </Box>
    </Box>
  );
}

export default Homepage;
