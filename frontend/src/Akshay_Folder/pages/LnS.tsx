import {Box, Button,Heading} from "@chakra-ui/react"
import React from 'react';
import  "./Homepage.css"
const Lns = () => {

  return (
    <Box className={"main"}>
      <Heading className="head">The Game</Heading>
        <Box className={"gamebox"}>
            <Button className="buttons" bgColor="yellow" _hover={{bgColor:"blue"}}>Login</Button>
            <Button className="buttons" bgColor="yellow" _hover={{bgColor:"blue"}}>Signup</Button>
        </Box>
    </Box>
  );
}

export default Lns;