import React from 'react';
import { Box, styled } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';
import Admin from './Admin';

const Container = styled(Box)(({ theme }) => ({
  width: '59%',
  margin: '110px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%',
  },
}));

const Frontpage = () => {
  return (
    <Box>
      <Header />
      <Container>
        <InfoHeader />
        <Articles />
      </Container>
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Frontpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
