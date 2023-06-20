import React from 'react';
import Title from '../components/Title';
import { section3Content } from '../utils/content';
import { Container, Grid, Stack, Typography } from '@mui/material';

const { title, ITEMS } = section3Content;

const Section3 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20 } }}>
      <Container maxWidth="md">
        <Title variant={{ xs: "h3", md: "h1"}} sx={{ textAlign: "center"}}>
          {title}
        </Title>
      </Container>

      <Grid container spacing={5} sx={{ mt: 4 }} justifyContent='center'> 
        {ITEMS.map(({ name, logo}) => (
          <Grid item xs={4} md={3} lg={2} key={name}>
            <Stack alignItems='center'>
              <img 
              src={logo}
              style={{ height: "120px", objectFit: "contain"}} />

              <Typography variant='body2' color="text.secondary">{name}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Section3;