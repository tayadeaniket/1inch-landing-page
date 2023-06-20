import React from 'react';
import { Stack, Container, Typography, Box, Divider, Grid, IconButton } from '@mui/material';
import Title from '../Title';
import OutlinedButton from '../Buttons/OutlinedButton';

// content
import { footerContent } from '../../utils/content';
const {
  copyright,
  developers,
  governance,
  protocols,
  socials,
  subscribe,
  support,
} = footerContent;

const LinkSection = ({ title, links }) => (
  <Stack>
    <Title>{title}</Title>

    {links.map(({ title }) => (
      <Typography
      key={title}
      variant='body2'
      color="text.secondary"
      sx={{
        cursor: "pointer",
        paddingBottom: 2,
        paddingTop: 2,
        "&:hover": {
          color: "text.primary"
        }
      }}>
        {title}
      </Typography>
    ))}
  </Stack>
);


const Footer = () => {
  return (
    <Box>
      <Divider sx={{ mb: 10 }} />

      <Container>
        <Grid container spacing={8} flexWrap="wrap-reverse">
          {/* links */}
          <Grid item xs={12} md={6} lg={7} xl={8}>
            <Grid container spacing={2}>
              {/* protocols */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...protocols} />
              </Grid>

              {/* governance */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...governance} />
              </Grid>

              {/* support */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...support} />
              </Grid>

              {/* developers */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...developers} />
              </Grid>
            </Grid>
          </Grid>

          {/* suscribe */}
          <Grid item xs={12} md={6} lg={5} xl={4}>
            <Stack>
              <Title sx={{ mb: 1}}>{subscribe.title}</Title>

              <Typography variant='body2' color="text.secondary">
                {subscribe.subtitle}
              </Typography>

              <OutlinedButton arrow sx={{ height: 60, my:3}}>
                Subscribe
              </OutlinedButton>

              <Stack 
              direction='row'
              spacing={1}
              alignItems='center'
              justifyContent='space-between'
              flexWrap='wrap' >
                {socials.map((item, i) => (
                  <IconButton key={i}>
                    <item.icon />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, mb: 5}} />

        <Stack
        direction={{ xs: 'column', md: 'row'}}
        justifyContent='space-between'
        alignItems='center'
        spacing={1}
        sx={{ pb: 6}} >
            <Typography variant='body2' color="text.secondary">
                  {copyright.left}
            </Typography>

            <Typography variant='body2' color="text.secondary">
                  {copyright.center}
            </Typography>

            <Typography variant='body2' color="text.secondary">
                  {copyright.right}
            </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer;