import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Grid,
  Button,
  Flex,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
const Quiz = ({handleAnswer,msg,secondsRemaining,count,flag,questions}) => {
  return (
    <Box
      p="5"
      w="1000px"
      mt="200px"
      ml="200px"
      bg={"#918c27"}
      boxShadow="  0 0 0 10px #98ee52,
  0 0 0 15px #53d480,
  0 0 0 20px #55a466,
  0 0 0 25px #6a8e4e,
  0 0 0 30px #918c27;"
    >
      <Flex>
        <Box w="850px" m="auto" p="2">
          <Heading
            textAlign={"center"}
            size={"md"}
            fontFamily={"Press2p"}
            textShadow={"-1px -1px black, 1px 1px white"}
            mb="5"
          >
            {questions[count].question}
          </Heading>
          <Grid
            gap="5"
            gridTemplateColumns={"repeat(2,1fr)"}
            justifyContent="space-evenly"
          >
            <Button
              className="buttons"
              bgColor="orange"
              _hover={{ bgColor: "green" }}
              onClick={() => handleAnswer(questions[count].options[0])}
              isDisabled={!flag}
            >
              {questions[count].options[0]}
            </Button>
            <Button
              className="buttons"
              bgColor="yellow"
              _hover={{ bgColor: "orange" }}
              onClick={() => handleAnswer(questions[count].options[1])}
              isDisabled={!flag}
            >
              {questions[count].options[1]}
            </Button>
            <Button
              className="buttons"
              bgColor="blue"
              _hover={{ bgColor: "yellow" }}
              onClick={() => handleAnswer(questions[count].options[2])}
              isDisabled={!flag}
            >
              {questions[count].options[2]}
            </Button>
            <Button
              className="buttons"
              bgColor="green"
              _hover={{ bgColor: "blue" }}
              onClick={() => handleAnswer(questions[count].options[3])}
              isDisabled={!flag}
            >
              {questions[count].options[3]}
            </Button>
          </Grid>
        </Box>
        {/* <div>
          <p>{`Time Remaining: ${secondsRemaining}`}</p>
        </div> */}
        <CircularProgress
          value={secondsRemaining * 10}
          size="150px"
          color="green.400"
        >
          <CircularProgressLabel>{secondsRemaining}s</CircularProgressLabel>
        </CircularProgress>
      </Flex>
      <Heading
        textAlign={"center"}
        size={"sm"}
        fontFamily={"Press2p"}
        textShadow={"-1px -1px black, 1px 1px white"}
        mb="5"
      >
        {msg}
      </Heading>
    </Box>
  );
};

export default Quiz;
