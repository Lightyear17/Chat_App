import React from 'react'
import { Nav_Buttons } from '../../data/index.js'
import Logo from '../../assets/Images/logo.ico'
import { Gear } from "phosphor-react";
import { faker } from '@faker-js/faker';
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import useSettings from "../../hooks/useSettings.js";
import { useTheme } from "@mui/material/styles";
import AntSwitch from '../../components/AntSwitch.js';

function SideBar() {
    const theme = useTheme();
    const [selected, setSelected] = React.useState(0);
    const { onToggleMode } = useSettings()

    return (
       

            <Box
                p={2}
                sx={{
                    backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
                    , height: "100vh", width: 100
                }}>

                <Stack direction="column"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{
                        height: "100%",
                    }}
                    spacing={3}
                >
                    <Stack spacing={5} alignItems={"center"}>
                        <Box sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: 64,
                            width: 64,
                            borderRadius: 1.5,
                        }}>




                            <img src={Logo} alt="chat app logo" />


                        </Box>
                        <Stack spacing={3} sx={{ width: "max-content" }} direction={"column"} alignItems="center">

                            {Nav_Buttons.map((item) => (
                                <React.Fragment key={item.index}>

                                    {item.index === selected ?

                                        (<Box p={1}
                                            sx={{
                                                backgroundColor: theme.palette.primary.main,
                                                borderRadius: 1.5,

                                            }}
                                        >

                                            <IconButton sx={{ width: "max-content", color: "#fff" }} key={item.index}>
                                                {item.icon}
                                            </IconButton>
                                        </Box>) :
                                        (<IconButton onClick={() => {
                                            setSelected(item.index)
                                        }} sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }} key={item.index}>
                                            {item.icon}
                                        </IconButton>)}
                                </React.Fragment>

                            ))}


                            <Divider sx={{ width: "48px" }} />

                            {selected === 3 ?
                                <Box p={1}
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: 1.5,

                                    }}
                                >


                                    <IconButton sx={{ width: "max-content", color: "#fff" }}>
                                        <Gear />
                                    </IconButton>
                                </Box> :
                                <IconButton onClick={() => setSelected(3)} sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}>
                                    <Gear />
                                </IconButton>
                            }
                        </Stack>

                    </Stack>

                    <Stack spacing={4}>

                        <AntSwitch defaultChecked onChange={() => {
                            onToggleMode()
                        }} />
                        <Avatar  src={faker.image.avatar()} />
                    </Stack>


                </Stack>

            </Box >


       
    )
}

export default SideBar