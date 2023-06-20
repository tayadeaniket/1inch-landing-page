import React from 'react';
import { Container, Grid, Box} from '@mui/material';
import Title from '../components/Title';
import OutlinedButton from '../components/Buttons/OutlinedButton';

// content
import { Section11Content } from '../utils/content';
const { ITEMS, title  } = Section11Content;

const Section11 = () => {
  return (
    <Container sx={{ my: {xs: 10, md: 20, lg: 25}}}>
      <Title variant={{ xs: "h3", md: "h2"}} sx={{ mb: {xs: 5, md: 8}}}>
        {title}
      </Title>

      <Grid 
        container
        rowSpacing={6}
        spacing={3}
        sx={{ mb: 10, position: "relative"}}>
        {ITEMS.map(({ link, image}) => (
          <Grid 
          item
          xs={6} sm={4} md={3} lg={2}>
            <Box
            sx={{
              cursor: "pointer",
              "&:hover": {
                filter: "contrast(40%)"
              }
            }}>
              <img 
              src={image}
              style={{ maxHeight: '60px', objectFit: 'content'}} />
            </Box>
          </Grid>
        ))}

        <Box 
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          right: 0,
          height: 80,
          background: "linear-gradient(180deg, #06070a85, #06070a)"
        }} />
      </Grid>

      <OutlinedButton arrow fit>
          Explore ecosystem
        </OutlinedButton>
    </Container>
  )
}

export default Section11