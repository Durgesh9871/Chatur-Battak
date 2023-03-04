import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Context/AuthContext";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import "./Signup.css";
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = React.useContext(AuthContext);
  const Navigate = useNavigate();
  const toast = useToast();
  const HandleLogin = () => {
    const payload = {
      email,
      password,
    };
    fetch("http://localhost:8080/user/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.token);
        console.log(res);
        if (res.token) {
          login(res.token, res.name, res.email,res._id);
          toast({
            title: "Login Success.",
            description: "You have successfully logged in",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setTimeout(() => {
            Navigate("/homepage");
          }, 2200);
        }
      })
      .catch((err) => {
        console.log("err :>> ", err);
        toast({
          title: "Login Failed.",
          description: "Please Enter Correct Details",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };
  return (
    <Box w="100%" h="100vh" className="background-image" color="#03001C">
      <Container
        bg="transparent"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: "2", md: "3", lg: "4" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm", lg: "lg" }} fontFamily="Press2p">
                Log In to your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Already have an account?</Text>
                <Button onClick={()=>Navigate("/signup")} variant="link" colorScheme="blue">
                  Sign up
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "8", lg: "10" }}
            px={{ base: "4", sm: "10", lg: "12" }}
            bg={"#918c27"}
            boxShadow="  0 0 0 10px #98ee52,
          0 0 0 15px #53d480,
          0 0 0 20px #55a466,
          0 0 0 25px #6a8e4e,
          0 0 0 30px #918c27;"
            borderRadius={{ base: "none", sm: "xl" }}
            border="1px solid #562B08"
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    bg="#B6EADA"
                    border="1px solid #562B08"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                  
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button
                  color="#B6EADA"
                  variant="link"
                  colorScheme="blue"
                  size="sm"
                 
                >
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button  onClick={() => HandleLogin()}  variant="primary"     className="bbuttons"
                      bgColor="yellow" alignSelf="center" _hover={{bgColor:"blue"}}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
