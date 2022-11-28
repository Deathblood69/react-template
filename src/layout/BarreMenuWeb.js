import React from 'react'
import AdbIcon from '@mui/icons-material/Adb'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {TableauComposants} from '../composants/TableauComposants'

export const BarreMenuWeb = ({pages = [], handleCloseNavMenu = () => {}}) => (
  <React.Fragment>
    <AdbIcon sx={{ml: 1, mr: 1}} />
    <Typography
      variant='h6'
      noWrap
      component='a'
      href='/'
      sx={{
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      LOGO
    </Typography>
    <Box sx={{flexGrow: 1, display: 'flex'}}>
      <TableauComposants
        array={pages}
        composant={page => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{my: 2, color: 'white', display: 'block'}}
          >
            {page}
          </Button>
        )}
      />
    </Box>
  </React.Fragment>
)
