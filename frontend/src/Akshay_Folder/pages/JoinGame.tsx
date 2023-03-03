import React from 'react';
import "./NewGame.css"
import{Box,Heading,Button,Text,Input,Stack} from "@chakra-ui/react"
const JoinGame = () => {
  return (
    <Box className={"mmain"}>
      <Heading className="head">The Game</Heading>
        <Box className={"gamebox"}>
          <Stack fontFamily="Press2p" direction="row"alignItems="center" justifyContent="center"><Text>Game Code :</Text><Input width="50%"></Input></Stack>
          <Button className="bbuttons" bgColor="yellow" alignSelf="center" _hover={{bgColor:"blue"}}>Join Game</Button>

        </Box>
    </Box>
  );
}

export default JoinGame;
