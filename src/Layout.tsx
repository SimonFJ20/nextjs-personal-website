import { ThemeProvider } from "@emotion/react";
import { BottomNavigation, BottomNavigationAction, Container, CssBaseline, Paper, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ArticleIcon from '@mui/icons-material/Article';
import { DeviceContext } from "../pages/_app";
import Footer from "./Footer";
import Topbar from "./Topbar";
import { useRouter } from "next/router";

enum Pages {
    HOME = 0,
    BLOG = 1,
    DOCS = 2,
}

const pathToPage = (path: string): Pages => {
        switch (path) {
        case '/': return Pages.HOME;
        case '/blog': return Pages.BLOG;
        case '/docs': return Pages.DOCS;
        default: return -1;
    }
}

const Layout: React.FC = ({children}) => {
    const theme = useTheme();
    const {isMobile} = useContext(DeviceContext);
    const router = useRouter();
    if (!isMobile) {
        return <ThemeProvider theme={theme}>
            <CssBaseline />
            <Topbar />
            <Container>
                {children}
            </Container>
            <Footer />
        </ThemeProvider>
    } else {
        return <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                {children}
            </Container>
            <Footer />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation showLabels value={pathToPage(router.pathname)}>
                    <BottomNavigationAction href={'/'} label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction href={'/blog'} label="Blog" icon={<NewspaperIcon />} />
                    <BottomNavigationAction href={'/docs'} label="Docs" icon={<ArticleIcon />} />
                </BottomNavigation>
            </Paper>
        </ThemeProvider>
    }
}

export default Layout;
