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
type QuizProp={
  handleAnswer:any,
  msg:string,
  secondsRemaining:number,
  count:number,
  flag:boolean,
  questions:any
}
const Quiz = ({handleAnswer,msg,secondsRemaining,count,flag,questions}:QuizProp) => {
  return (
    <Box
      p="5"
      w="900px"
      mt="28.5%"
      ml="30.5%"
      bg={"#918c27"}
      border="2px  red"
      boxShadow="  0 0 0 10px #98ee52,
  0 0 0 10px #53d480,
  0 0 0 12px #55a466,
  0 0 0 14px #6a8e4e,
  0 0 0 16px #918c27;"
    >
    
      <Flex>
        <Box w="850px" m="auto" p="2" border="2px  pink">
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
        mb=""
      >
        {msg}
      </Heading>
    </Box>
  );
};

export default Quiz;
