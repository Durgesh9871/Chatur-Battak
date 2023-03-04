import { Box, Button, Img , Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState ,useContext} from "react";
import "./mainGame.css";
import sky from "./Sky_cloud.png";
import myAudioFile from "./audio.mp3";
import beach from "./beach.mp3";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import { StackBox } from "../Components/StackBox";
// import styled, { keyframes } from 'styled-components';
import Duck from "./duck.png";
import goldDuck from "./goldDuck.png";
import Quiz from "../../Components/Quiz";
import growDuck from "./growDuck.gif";
import axios from "axios";
import { GameOver } from "../Components/GameOver";
import { AiFillCaretDown } from "react-icons/ai";
import { AuthContext } from "../../Components/Context/AuthContext";



const MainGame = () => {
  const {authState}=useContext(AuthContext)
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
    {
      question: "Javascript is an _______ language?",
      options: [
        "Object-Oriented",
        "Object-Based",
        "Procedural",
        "None of the above",
      ],
      answer: "Object-Oriented",
    },
  ];
  const [value, setValue] = useState(false);
  const [increaseCount, setIncreaseCount] = useState(3);
  const [increaseCountUserTwo, setIncreaseCountUserTwo] = useState(3);
  const [game, setGame] = useState(false);
  const [msg, setMsg] = useState("");
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  const audioRef = useRef(null);
  const beachRef = useRef(null);

  const handlePlayClick = () => {
    audioRef.current.play();
    beachRef.current.play();
    setValue(true);
  };

  const handlePauseClick = () => {
    audioRef.current.pause();
    beachRef.current.pause();
    setValue(false);
  };

  // const handleCount = () => {
  //   setIncreaseCount((prev) => prev + 1);
  // };

  // const handleCountMi = () => {
  //   // let but = document.querySelector(".one0")
  //   setIncreaseCount((prev) => prev - 1);
  // };

  //  Game over
  const handleGameOver = () => {
    setTimeout(() => {
      setGame(true);
    }, 3000);
  };

  const handleAnswer = (ans) => {
    console.log(ans)
    if (questions[count].answer === ans) {
      const payload = {
        gameId: authState.gameId,
        userId: authState.id,
      };
      axios
        .patch(`http://localhost:8080/games/rightAnswer`, payload)
        .then((res) => {
          setMsg("Correct answer. Good job.");
        })
        .catch((err) => console.log("err", err));
    } else {
      const payload = {
        gameId: authState.gameId,
        userId: authState.id,
      };
      axios
        .patch(`http://localhost:8080/games/wrongAnswer`, payload)
        .then((res) => {
          setMsg(`Incorrect answer.Correct answer is ${questions[count].answer}`);
        })
        .catch((err) => console.log("err", err));
    }
    setFlag(false);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/games?q=${authState.gameId}`)
      .then((res) => res.json())
      .then((res) => res.data)
      .then((res) => {
        console.log(increaseCount);
        if (increaseCount === 0 || increaseCountUserTwo == 0 || count == 5) {
          handleGameOver();
        } else {
          if (count < 5) {
            if (secondsRemaining > 0) {
              setTimeout(() => {
                setSecondsRemaining(secondsRemaining - 1);
              }, 1000);
            } else {
              setSecondsRemaining(10);
              setCount(count + 1);
              setFlag(true);
              setMsg("");
              setIncreaseCount(res.playerFirstScore / 10);
              setIncreaseCountUserTwo(res.playerSecondScore / 10);
            }
          } else {
            setCount(0);
          }
        }
      })
      .catch((err) => console.log("err", err));
  }, [count, increaseCount, secondsRemaining, flag, msg]);

  const volumeButtonStyle = {
    border: "2px solid #ffff",
    fontSize: "45px",
    borderRadius: "100%",
    padding: "8px",
    cursor: "pointer",
    backgroundColor: "black",
    color: "#ffff",
  };

  return (
    <Box className="mainGameBox">
      {/*  Game Stop 1st player is here ------------- */}
      <Box id="playerWinner" overflow="hidden" display={game?"block":"none"}>
        {/* Box for crocodile ------- */}
    
        <GameOver />
      </Box>

      {/*  Game Start from here ------------------------ */}
      <Box className="waterMain" overflow="hidden" display={game?"none":"block"}>
        {/* Audio */}

        <audio src={myAudioFile} loop ref={audioRef} />
        <audio src={beach} loop ref={beachRef} />
        {/* <button onClick={handlePlayClick}>Play</button>
      <button onClick={handlePauseClick}>Pause</button> */}

        <Box zIndex="10" position="absolute" right="20px" top="20px">
          {value ? (
            <RxSpeakerLoud
              onClick={handlePauseClick}
              style={volumeButtonStyle}
            />
          ) : (
            <RxSpeakerOff onClick={handlePlayClick} style={volumeButtonStyle} />
          )}{" "}
        </Box>

        <Box display="flex">
          <Box className="sky">
            <Img src={sky} alt="sky1" height="200px" />
          </Box>
          <Box className="sky2">
            <Img src={sky} alt="sky2" height="240px" />
          </Box>
        </Box>

        {/* Croco */}
        <Box>
          <Box className="crocoLunch"> </Box>
          <Box className="crocoLunchRotate"></Box>
        </Box>

        {/*  Stack game of student-----------------------  */}

        {/*  User-1 ---- */}
        <Box
          position="absolute"
          bottom="160px"
          left="40px"
          border="2px   black"
          zIndex="4"
          // height="49%"
          display="flex"
          flexDirection="column-reverse"
        >
          {/* Duck drown in water --------- */}
          {increaseCount === 0 && <Box className="drownDuck"> </Box>}
          {Array(increaseCount)
            .fill("")
            .map((_, i) => {
              return (
                <div key={i}>
                  {(i === increaseCount - 1 && i < 4 && (
                    <>
                    <Box display="flex" flexDirection="column"  alignItems="center" >
                    <Text textAlign="center" fontSize="20px" color="#ffff" fontWeight="700">Player 1</Text>
                   <AiFillCaretDown style={{color:"white" }} />
                    </Box>
                    <Img
                      src={Duck}
                      position="absolute"
                      right="3px"
                      width="6vw"
                      bottom={increaseCount === 1 && "36px"}
                      border="2px  red"
                      alt="Duck"
                    />
                    </>
                    
                  )) ||
                    (i === increaseCount - 1 && i >= 5 && (
                      <>
                      <Box display="flex" flexDirection="column"  alignItems="center" >
                    <Text textAlign="center" fontSize="20px" color="#ffff" fontWeight="600">Player 1</Text>
                   <AiFillCaretDown style={{color:"white" }} />
                    </Box>
                      <Img
                        src={goldDuck}
                        position="absolute"
                        right="3px"
                        width="6vw"
                        bottom={increaseCount === 1 && "36px"}
                        border="2px  red"
                        alt="Duck"
                      />
                      </>
                    )) ||
                    (i === increaseCount - 1 && i === 4 && (
                      <>
                        <Box display="flex" flexDirection="column"  alignItems="center" >
                    <Text textAlign="center" fontSize="20px" color="#ffff" fontWeight="600">Player 1</Text>
                   <AiFillCaretDown style={{color:"white" }} />
                    </Box>
                      <Img
                        src={growDuck}
                        position="absolute"
                        right="3px"
                        width="6vw"
                        bottom={increaseCount === 1 && "36px"}
                        border="2px  red"
                        alt="Duck"
                      />
                      </>
                    ))}
                  <StackBox
                    count={i + 1}
                    color={i % 2 == 0 ? "#deb093" : "black"}
                    border={i % 2 == 0 ? "black" : "#ffff"}
                    text={i % 2 == 0 ? "black" : "#ffff"}
                  />
                </div>
              );
            })}
        </Box>

        {/*  Quiz is here in center */}

        <Box position="absolute" top="100px" left="40px" zIndex="4">
          <Quiz
            msg={msg}
            handleAnswer={handleAnswer}
            questions={questions}
            secondsRemaining={secondsRemaining}
            count={count}
            flag={flag}
          />
        </Box>

        {/* user -2 ------ */}
        {/* Duck drown in water --------- */}

        <Box
          position="absolute"
          bottom="160px"
          right="40px"
          border="2px  black"
          zIndex="4"
          display="flex"
          flexDirection="column-reverse"
        >
          {increaseCountUserTwo === 0 && <Box className="drownDuckSecond"> </Box>}
          {Array(increaseCountUserTwo)
            .fill("")
            .map((_, i) => {
              return (
                <div key={i}>
                  {(i === increaseCountUserTwo - 1 && i < 4 && (
                    <>
                    <Box display="flex" flexDirection="column"  alignItems="center" >
                <Text textAlign="center" fontSize="20px" color="#ffff" fontWeight="700">Player 2</Text>
               <AiFillCaretDown style={{color:"white" }} />
                </Box>
                    <Img
                      src={Duck}
                      position="absolute"
                      right="3px"
                      width="6vw"
                      bottom={increaseCountUserTwo === 1 && "36px"}
                      border="2px  red"
                      alt="Duck"
                    />
                    </>
                  )) ||
                    (i === increaseCountUserTwo - 1 && i >= 5 && (
                      <>
                    <Box display="flex" flexDirection="column"  alignItems="center" >
                    <Text textAlign="center" fontSize="20px" color="#ffff" fontWeight="700">Player 1</Text>
                   <AiFillCaretDown style={{color:"white" }} />
                    </Box>
                      <Img
                        src={goldDuck}
                        position="absolute"
                        right="3px"
                        width="6vw"
                        bottom={increaseCountUserTwo === 1 && "36px"}
                        border="2px  red"
                        alt="Duck"
                      />
                      </>
                    )) ||
                    (i === increaseCountUserTwo - 1 && i === 4 && (
                      <>
                    <Box display="flex" flexDirection="column"  alignItems="center" >
                    <Text textAlign="center" fontSize="20px" color="#ffff" fontWeight="700">Player 1</Text>
                   <AiFillCaretDown style={{color:"white" }} />
                    </Box>
                      <Img
                        src={growDuck}
                        position="absolute"
                        right="3px"
                        width="6vw"
                        bottom={increaseCountUserTwo === 1 && "36px"}
                        border="2px  red"
                        alt="Duck"
                      />
                      </>
                    ))}
                  <StackBox
                    count={i + 1}
                    color={i % 2 === 0 ? "#deb093" : "black"}
                    border={i % 2 === 0 ? "black" : "#ffff"}
                    text={i % 2 === 0 ? "black" : "#ffff"}
                  />
                </div>
              );
            })}
        </Box>

        {/* <Button
          position="absolute"
          onClick={handleCount}
          top="10px"
          left="240px"
        >
          plus
        </Button>
        <Button
          position="absolute"
          onClick={handleCountMi}
          top="50px"
          left="240px"
        >
          sub
        </Button> */}
      </Box>
    </Box>
  );
};

// `;

export { MainGame };
