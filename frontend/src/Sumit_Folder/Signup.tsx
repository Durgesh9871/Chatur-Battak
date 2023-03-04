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
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Signup.css";
export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const Navigate = useNavigate();
  const HandleSubmit = () => {
    const payload = {
      name,
      email,
      password,
    };
    fetch("http://localhost:8080/user/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message === "Email already register") {
          toast({
            title: "Account already register",
            description: "Please Login ",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setTimeout(() => {
            Navigate("/login");
          }, 2200);
        } else {
          toast({
            title: "Account has been created",
            description: "Welcome to Shubhyatra",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setTimeout(() => {
            Navigate("/login");
          }, 2200);
        }
      })
      .catch((err) => {
        console.log("err :>> ", err);
        toast({
          title: "Signup  Failed",
          description: "Please Enter All Data",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };
  return (
    <Box w="100%" className="background-image" color="#03001C">
      <Container
        bg="transparent"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: "2", md: "3", lg: "4" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm", lg: "lg" }} fontFamily="Press2p">
                Sign up to your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>
                <Button onClick={()=>Navigate("/login")} variant="link" colorScheme="blue">
                  Log In
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
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    bg="#B6EADA"
                    border="1px solid #562B08"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
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
                <Button
                  onClick={() => HandleSubmit()}
                  variant="primary"
                  className="bbuttons"
                  bgColor="yellow" alignSelf="center" _hover={{bgColor:"blue"}}
                  
                >
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
