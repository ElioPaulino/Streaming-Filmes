import React from 'react'
import {Box} from '@mui/material'
import {Container} from '@mui/system'

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <Box>
        <Container 
        maxWidth="lg" 
        sx={{ mt:4, mb:4, color: 'white' }}>
            {children}
        </Container>
    </Box>
  );
}
