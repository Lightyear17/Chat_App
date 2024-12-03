import React from 'react'
import { Box, Stack, IconButton, InputAdornment,TextField, Icon } from '@mui/material';
import { styled } from '@mui/system';
import { LinkSimple, Smiley, PaperPlaneTilt } from 'phosphor-react';
import { useTheme } from '@emotion/react';
// import StyledInput from '../StyledInput';


function Footer() {
    
    const StyledInput = styled(TextField)(({ theme }) => ({
        "&.MuiTextField-root": {
            paddingTop: "12px",
            paddingBottom: "12px",
        }
    }))
    const theme =  useTheme()

  return (
    <Box sx={{ height: 100, width: "100%", backgroundColor:theme.palette.mode ==="light" ? "#FBFAFF": theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)" }} p={2} >
    <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <StyledInput fullWidth placeholder='write a message...' variant='filled' InputProps={{
            disableUnderline: true,  
            startAdornment:<InputAdornment position="start" >
                <IconButton>
                    <Icon>
                        <LinkSimple />
                    </Icon>
                </IconButton>
            </InputAdornment>,
            endAdornment:<InputAdornment position="end">
            <IconButton>
                <Icon>
                    <Smiley />
                </Icon>
            </IconButton>
        </InputAdornment>
        }} />
        <Box sx={{height:48,width:48,backgroundColor:theme.palette.primary.main,borderRadius:1.5}}>
            <Stack sx={{height:"100%",width:"100%"}}
                alignItems={"center"}
                justifyContent={"center"}
            >

            <IconButton>  
                
                <PaperPlaneTilt color='#fff'/>    
            </IconButton>   
            </Stack>

        </Box>
    </Stack>
</Box>
  )
}

export default Footer