import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import './Banner.css'
import Typical from 'react-typical'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PDF from '../../../images/Md_ Saddaul Islam Sheam - Google Docs.pdf'

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    });
  })
  return (
    <Box className="background" id="home">
      <Container sx={{ height: '95vh' }}>
        <Box data-aos="fade-right" sx={{ display: 'flex', alignItems: 'center', height: '95vh' }}>
          <Box>
            <Typography sx={{ color: '#fff', fontSize: '27px', fontFamily: 'Ubuntu' }}>
              Hello, my name is
            </Typography>
            <Typography sx={{ color: '#fff', fontSize: '75px', fontFamily: 'Ubuntu', fontWeight: 600 }}>
              Saddaul Siam
            </Typography>
            <Typography sx={{ color: '#fff', fontSize: '35px', fontFamily: 'Ubuntu', fontWeight: 500 }}>
              <Box sx={{ display: 'flex' }}> <Box sx={{ mr: 1, }}>And I'm a</Box> <Box sx={{ color: 'crimson' }}><Typical
                loop={Infinity}
                wrapper="span"
                delay="1000"
                steps={[
                  'Web Developer',
                  2000,
                  'Web Designer',
                  2000,
                  'Programmer',
                  2000
                ]}
              /></Box>
              </Box>
            </Typography>
            <Box sx={{ pt: 3 }}>
              <a href={PDF} download="Resume of Md Saddaul Islam Sheam" target='_blank' rel="noreferrer"
                style={{ textDecoration: "none" }}><Button variant="contained" color="error" sx={{ px: 4, py: 2 }}>Download Resume</Button></a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;