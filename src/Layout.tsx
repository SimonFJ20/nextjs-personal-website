import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, useTheme } from "@mui/material";
import Footer from "./Footer";
import Topbar from "./Topbar";

const Layout: React.FC = ({children}) => {
    const theme = useTheme();
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <Container>
            {children}
        </Container>
        <Footer />
    </ThemeProvider>
}

export default Layout;
