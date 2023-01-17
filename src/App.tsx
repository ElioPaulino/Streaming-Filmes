import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Typography } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Route, Routes } from 'react-router-dom';


const Home = () => (
  <Box>
    <Typography variant='h3' component='h1'>
      Home
    </Typography>
  </Box>
);

const Contact = () => (
  <Box>
    <Typography variant='h3' component='h1'>
      Contact
    </Typography>
  </Box>
);


const About = () => (
  <Box>
    <Typography variant='h3' component='h1'>
      Welcome
    </Typography>
  </Box>
);

function App() {
  return <ThemeProvider theme={appTheme}>
  <Boxider theme={appTheme}>
    <Box component='main'
      sx={{
        height: '100vh',
        backgroundColor: "#000"
      }}>
      <Header></Header>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
        </Routes>
      </Layout>
    </Box>
  </ThemeProvider>;
}

export default App;
