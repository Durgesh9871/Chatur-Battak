import {Box, Button,Heading,Text,Input} from "@chakra-ui/react"
import React from 'react';
import  "./NewGame.css"
const NewGame = () => {

  return (
    <Box className={"mmain"}>
      <Heading className="hhead">The Game</Heading>
        <Box className={"ggamebox"} textAlign="left">
            <Box fontFamily="Press2p" textAlign="left" px="10px"><Text>GameId:{}</Text></Box>
            <Box fontFamily="Press2p" textAlign="left" px="10px"><Text>Player 1: </Text></Box>
            <Box fontFamily="Press2p" textAlign="left" px="10px"><Text>Player 2: ...Waiting</Text></Box>
            <Button className="buttons" bgColor="yellow" alignSelf="center" _hover={{bgColor:"blue"}} disabled={true}>Start Game</Button>
        </Box>
    </Box>
  );
}

export default NewGame;