import { Container, Grid, Box, Card, List, ListItem, ListItemText } from '@mui/material';
import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';
import Layout from '../src/Layout'
import { DeviceContext } from './_app';

const Home: NextPage = () => {
  const {isMobile} = useContext(DeviceContext);
  return (
    <>
      <Head>
        <title>SFJ - Homepage</title>
        <meta name="description" content="Simon From Jakobsen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box style={{
          overflow: 'hidden',
          borderRadius: '1rem',
          float: isMobile ? undefined : 'right',
          lineHeight: 0,
          margin: '1rem'
        }}>
          <Image priority={true} src='/avatar.jpg' width={400} height={400} alt="me" />
        </Box>
        <main>
          <h1>😃 About me</h1>

          <p>{`
            My name is Simon From Jakobsen, I am 18 years of age and love computers, especially programming.
            I was born, raised and still live in Viborg, Denmark, studying at Mercantec Viborg.
            I've been programming since I was 10 years of age, starting with Java and HTML.
            Nowadays I do all sort of projects in all sorts of languages.
            I've been interested in technology my whole life, and have started taking it seriously in the recent years.
          `}</p>

          <h2>📝 Occupation</h2>
            
          <p>{`
            I am currently enrolled in an EUX datatechnician education as a datatechnician apprentice.
            focusing on computer science and programming combined with a technical highschool education.
            EUX is a vocational and highschool education combined, spanning a bit longer, and switching every 6 month or so between the two. 
            When finished, I will have achieved the title of »datatechnician specialied in programming« and a danish highschool diploma.
            Time not spent studying is usually spent on either friends, programming or playing piano.
          `}</p>

          <h2>🚀 Passions</h2>

          <p>{`
            Whenever I'm not either working or in school, I like to work on projects,
            often containing software and technology in general.
            If anyone out there needs help or wants to collaborate on something, whether its a website,
            a small game or any other hardware or software related hobby project involving technology,
            you're welcome to contact me, just dont expect anything 😁👍.
          `}</p>

          <p>{`
            Recently I've worked on compiler- and interpreterbuilding.
            I've built my own parsers from scratch, and used parser generators.
            I've created direct AST interpreters and gained a fair bit of knowledge on bytecode compilation,
            X86-64 and low level execution. I've looked into bootloaders and kernel development,
            as I'm interested in trying to build my own very small OS from scratch.
          `}</p>

          <h2>📜 Projects</h2>

          <p>
            <i>{'//'} TODO, something like select project of list and read more about it</i>
          </p>

          <h2 id="contact">👋 Contact</h2>

          <p>
            <Box width={'50%'} marginLeft={'25%'}>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Email"
                  />
                  {"simonfromjakobsen@gmail.com"}
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Phone"
                  />
                  {"+45 6060 2456"}
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="GitHub"
                  />
                  <a href="https://github.com/SimonFJ20" target={'_blank'} rel={'noreferrer'}>
                  {"@SimonFJ20"}
                  </a>
                </ListItem>
              </List>
            </Box>
          </p>
        </main>
      </Layout>
    </>
  )
}

export default Home
