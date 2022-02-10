import { AppBar, Toolbar, Typography, Button, Link, Avatar, Container, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../pages/_app";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Topbar: React.FC = () => {
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
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Avatar alt="Simon From Jakobsen" src="https://avatars.githubusercontent.com/u/28040410?v=4" style={{ marginRight: '4px' }} />
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Simon From Jakobsen
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5, textDecoration: 0 }}
                    >
                        Home
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5, textDecoration: 0 }}
                    >
                        Blog
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5, textDecoration: 0 }}
                    >
                        Docs
                    </Link>
                </nav>
                <Button href="#" variant="contained" sx={{ my: 1, mx: 1.5 }}>
                    Contact
                </Button>
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'light' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </Container>
    </AppBar>
}

export default Topbar;
