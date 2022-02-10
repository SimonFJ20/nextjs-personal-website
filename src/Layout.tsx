import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, useTheme } from "@mui/material";
import Topbar from "./Topbar";

const Layout: React.FC = ({children}) => {
    const theme = useTheme();
    console.log(theme.palette.mode);
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <Container>
            {children}
        </Container>
    </ThemeProvider>
}

export default Layout;
