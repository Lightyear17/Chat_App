import { useTheme } from '@emotion/react'
import {Stack, Box, Divider, Typography } from '@mui/material'

import React from 'react'

 const TextMsg = ({item}) =>{
const theme = useTheme()
    return(
           <Stack direction="row" justifyContent={item?.incoming ? 'start' : 'end'}>
                <Box p={1.5} sx={{backgroundColor:item?.incoming ?theme.palette.background.default : theme.palette.primary.main,
                borderRadius:1.5,
                width:"max-content",
                }}>
                        <Typography variant='body2' color={item.incoming ? theme.palette.text  :"#fff"}>
                            {item.message}
                        </Typography>
                </Box>
           </Stack>
    )

}

const TimeLine = ({item}) => {
    const theme = useTheme()
  return (
    <Stack direction="row" alignitem="center" justifyContent="space-between">
            <Divider width="46%"/>
            
            <Typography variant='caption' sx={{color:theme.palette.text}}>

                {item.text}
            </Typography>
            <Divider width="46%"/>
    </Stack>
  )
}

export {TimeLine,TextMsg}