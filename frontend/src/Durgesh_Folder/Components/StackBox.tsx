import { Box } from "@chakra-ui/react";
import React from "react";
type stackbot={
  count:number,
  color:string,
  border:string,
  text:string
}
const StackBox = ({ count, color, border, text }:stackbot) => {
  return (
    <Box
      border={`2px  ${border}`}
      height="43px"
      textAlign="center"
      width="100px"
      background={color}
      color={text}
      padding="10px"
    >
      <h1 style={{ fontSize: "18px", fontWeight: "700" }}>{count}</h1>
    </Box>
  );
};

export { StackBox };
