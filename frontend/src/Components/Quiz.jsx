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
const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: [
        "Mount Kilimanjaro",
        "Mount Everest",
        "Mount Denali",
        "Mount Aconcagua",
      ],
      answer: "Mount Everest",
    },
    {
      question: "Who invented the telephone?",
      options: [
        "Thomas Edison",
        "Alexander Graham Bell",
        "Nikola Tesla",
        "Guglielmo Marconi",
      ],
      answer: "Alexander Graham Bell",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Venus", "Mars", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Rembrandt van Rijn",
      ],
      answer: "Leonardo da Vinci",
    },
  ];
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    if (count < 4) {
      if (secondsRemaining > 0) {
        setTimeout(() => {
          setSecondsRemaining(secondsRemaining - 1);
        }, 1000);
      } else {
        setSecondsRemaining(10);
        setCount(count + 1);
        setFlag(true);
        setMsg("");
      }
    } else {
      setCount(0);
    }
  }, [secondsRemaining, count]);
  const handleAnswer = (ans) => {
    if (questions[count].answer === ans) {
      setMsg("Correct answer. Good job.");
    } else {
      setMsg(`Incorrect answer.Correct answer is ${questions[count].answer}`);
    }
    setFlag(false);
  };
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
