import React from 'react'


import { Stack, Box, } from '@mui/material'


import { useTheme } from '@emotion/react';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

function Conversatation(props) {

    const theme = useTheme()



   
    return (
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"} >
                <Header/>

            <Box width={"100%"} sx={{ flexGrow: 1 }}>
                <Message/>

            </Box>
                <Footer/>
          

        </Stack>
    )
}



export default Conversatation
