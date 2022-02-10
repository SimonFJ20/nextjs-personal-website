import { AppBar, Toolbar, Typography, Button, Link, Avatar, Container, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../pages/_app";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Footer: React.FC = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    
    return <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
    >
        <Container>
            <p style={{textAlign: 'center'}}>Copyright © 2022 Simon From Jakosen</p>
        </Container>
    </AppBar>
}

export default Footer;
