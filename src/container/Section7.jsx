import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Title from '../components/Title';
import ServiceCard from '../components/Cards/ServiceCard';

// content
import { section7Content } from '../utils/content';
const { ITEMS, subtitle, title } = section7Content;

const Section7 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20, lg: 25 }}}>
      <Title variant={{ xs: "h3", md: "h2"}} sx={{ mb: 2}}>
        {title}
      </Title>

      <Typography 
      variant='body2'
      color="text.secondary"
      sx={{ mb: {xs: 5, md: 8}}} >
        {subtitle}
      </Typography>

      <Grid container spacing={3}>
        {ITEMS.map((item) => (
          <Grid item xs={12} md={6}>
            <ServiceCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Section7