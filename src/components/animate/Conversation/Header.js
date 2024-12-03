import React from 'react'
import { Stack, Box, Avatar, Typography,  IconButton, Divider } from '@mui/material'

import { CaretDown,  MagnifyingGlass,  Phone,  VideoCamera } from 'phosphor-react';
import { useTheme } from '@emotion/react';
import { faker } from '@faker-js/faker';
import StyledBadge from '../../StyledBadge.js'

function Header() {
    const theme = useTheme()

    const avatarSrc = faker.internet.avatar() || "https://via.placeholder.com/150";
  return (
    <Box
    p={2}
    sx={{
        width: "100%",
        boxShadow: "0 0 2px  rgb(0,0,0,0.25)",
        backgroundColor: theme.palette.primary.mode === "light" ? "#fff" : theme.palette.background.paper

    }}>

    <Stack sx={{ height: "100%", width: "100%" }} direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
        <Stack direction={"row"} spacing={2} >
            <Box>
                <StyledBadge overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                >

                    <Avatar src={avatarSrc} alt={faker.name.fullName()}/>
                </StyledBadge>

            </Box>
            <Stack spacing={0.2}>
                <Typography variant='subtitle2'>{faker.name.fullName()}</Typography>
                <Typography variant='caption'>Online</Typography>
            </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <IconButton>
                <VideoCamera />
            </IconButton>

            <IconButton>

                <Phone />
            </IconButton>

            <IconButton>
                <MagnifyingGlass />
            </IconButton>

            <Divider orientation="vertical" flexItem />

            <IconButton>
                <CaretDown />
            </IconButton>

        </Stack>
    </Stack>

</Box>
  )
}

export default Header