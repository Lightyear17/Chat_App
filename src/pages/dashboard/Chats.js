import React from 'react'
import {
    alpha, Box, IconButton, InputBase, Stack, Typography, createTheme,
    ThemeProvider,
    Button,
    Divider,
    Avatar,
    Badge
} from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import styled from '@emotion/styled'
import { faker } from '@faker-js/faker';
import { ChatList } from '../../data/index.js'
import {SimpleBarStyle} from '../../components/Scrollbar.js'
import { useTheme } from '@emotion/react'

const theme = createTheme()

const Search = styled("div")(({ theme }) => ({


    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",

}))

const StyledInputWrapper = styled(InputBase)(({ theme }) => ({

    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: "100%",

    }
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",


}))

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
    const theme = useTheme()
    const avatarSrc = faker.internet.avatar() || "https://via.placeholder.com/150";
    return (
        <Box sx={{
            width: "100%",
            height: 60,
            borderRadius: 1,
            backgroundColor: theme.palette.mode === "Light" ?  "#fff" : theme.palette.background.default, 
            justifyContent:"flex-start",
            alignItems:"center",
            display: "flex",
            overflow: "hidden",
            
        }}
            p={2}
        >
            <Stack direction={"row"}  display={"flex"}  width={"400px"} justifyContent={"space-between"}>
                <Stack direction={"row"} spacing={2} justifyContent={"space-between"} >

                    {online ? (

                        <StyledBadge overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant="dot">

                            <Avatar src={avatarSrc} />
                        </StyledBadge>
                    ) : (<Avatar src={avatarSrc} />)}
                    <Stack spacing={0.3}>
                        <Typography variant='subtitle2' >{name}</Typography>
                        <Typography variant='caption'>{msg}</Typography>
                    </Stack>
                </Stack>
                <Stack spacing={2} alignItems={"center"} >
                    <Typography sx={{ fontWeight: 600 }} variant='caption'>{time}</Typography>
                    <Badge badgeContent={unread} color="primary" />
                </Stack>
            </Stack>


        </Box>
    )
}

function Chats() {
    const theme = useTheme()
    return (

        <Box sx={{
            position: "relative",
           
            width: 320,
            backgroundColor: theme.palette.mode === "Light"? "#F8FAFF" : theme.palette.background.paper,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}>

            <Stack p={3} spacing={2} sx={{ height: "100vh"}}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
                    <Typography variant='h5'>
                        Chats
                    </Typography>

                    <IconButton>
                        <CircleDashed size={24} />
                    </IconButton>
                </Stack>
                <Stack sx={{ width: "100%" }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color='#709CE6' />
                        </SearchIconWrapper>
                        <StyledInputWrapper placeholder="Search" />
                    </Search>
                    <Stack spacing={1}>
                        <Stack direction={"row"} alignItems={"center"} spacing={1.5}>

                            <ArchiveBox size={24} />
                            <Button>Archive </Button>
                        </Stack>
                    </Stack>
                    <Divider />

                </Stack>
                <Stack  spacing={2} direction="column" sx={{flexGrow:1,overflowY:"scroll", height:"100vh"}}>
                    <SimpleBarStyle timeout={500} clickOnTrack={false}>

                    <Stack spacing={2.4} >
                        <Typography variant='caption' color={"#676767"}>Pinned</Typography>
                    {ChatList.filter((chat) => chat.pinned).map((chat) => (
                        <ChatElement {...chat} key={chat.id}  />
                    ))}
                    {/* <ChatElement /> */}
                    </Stack>

                    <Stack spacing={2.4} >
                        <Typography variant='caption' color={"#676767"}>All Chat</Typography>
                    {ChatList.filter((chat) => !chat.pinned).map((chat) => (
                        <ChatElement {...chat} key={chat.id} />
                    ))}
                    {/* <ChatElement /> */}
                    </Stack>
                    </SimpleBarStyle>
                </Stack>

            </Stack>

        </Box>

    )
}

export default Chats