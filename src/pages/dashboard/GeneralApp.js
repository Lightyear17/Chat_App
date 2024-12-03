
import React from "react";

import Chats from "./Chats";
import { Stack, Box } from "@mui/material";
import Conversatation from "../../components/animate/Conversation";
import { useTheme } from "@emotion/react";

const GeneralApp = () => {
  const theme = useTheme()

  return (
    <Stack direction={"row"} sx={{ width: "100vw" }}>
      <Chats />

      <Box sx={{ height: "100%", 
        width: "calc(100vw - 420px)",
         backgroundColor:theme.palette.mode==="light" ? "#fff" : theme.palette.background.default}}>
          <Conversatation/>

      </Box>
    </Stack>
  )

};

export default GeneralApp;
