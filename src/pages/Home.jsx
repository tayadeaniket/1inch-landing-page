import React from 'react';

// Components
import Navbar from '../components/Navbar/MainNavbar';
import Footer from '../components/Footer/Footer';

// Containers
import Section1 from '../container/Section1';
import Section2 from '../container/Section2';
import Section3 from '../container/Section3';
import Section4 from '../container/Section4';
import Section5 from '../container/Section5';
import Section6 from '../container/Section6';
import Section7 from '../container/Section7';
import Section8 from '../container/Section8';
import Section9 from '../container/Section9';
import Section10 from '../container/Section10';
import Section11 from '../container/Section11';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Section1 />
      <Box sx={{ background: '#06070A'}}>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />

        {/* Footer */}
        <Footer />
      </Box>
    </div>
  )
}

export default Home