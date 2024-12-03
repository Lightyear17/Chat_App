import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../../data'
import { TextMsg, TimeLine } from './MsgType'

export default function Message() {
    return (
        <Box p={3}>
            <Stack spacing={3}>
                {Chat_History.map((item,index) => {

                    switch (item.type) {
                        case "divider":
                               return <TimeLine  key={index} item={item}/>
                            
                        case "msg":
                            switch (item.subtype) {
                                case "img":
                                    break;
                                case "doc":
                                    break;
                                case "link":
                                    break;
                                case "reply":
                                    break;
                                default:
                                   return <TextMsg  key={index} item={item}/>
                                   
                            }
                            break;

                        default:
                            return <></>
                            
                    }


                })}
            </Stack>

        </Box>
    )
}
