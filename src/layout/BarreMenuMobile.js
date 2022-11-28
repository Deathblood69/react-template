import React, {useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AdbIcon from '@mui/icons-material/Adb'
import {useBreakpoints} from '../hook/useBreakpoints'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import {TableauComposants} from '../composants/TableauComposants'
import {Grid} from '@mui/material'
import {Compte} from './Compte'

export const BarreMenuMobile = ({pages}) => {
  // ====== PARAMETRAGE ====== //

  const breakpoints = useBreakpoints()

  // ====== VARIABLES ====== //

  const [isOpen, setIsOpen] = useState(false)

  const anchor = breakpoints.xs ? 'bottom' : 'left'

  // ====== REQUETES ====== //

  // ====== METHODES ====== //

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    console.log(open)
    setIsOpen(open)
  }

  // ====== USE EFFECT ====== //

  // ====== AFFICHAGE ====== //

  return (
    <React.Fragment>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={toggleDrawer(anchor, true)}
        color='inherit'
      >
        <MenuIcon />
      </IconButton>
      <Grid container justifyContent={'center'}>
        <Grid item>
          <AdbIcon sx={{mr: 1}} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
        </Grid>
      </Grid>
      <Compte />
      <SwipeableDrawer
        anchor={anchor}
        open={isOpen}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        <Box
          sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
          role='presentation'
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <TableauComposants
              array={pages}
              composant={(text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )}
            />
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  )
}
//   (
//   <React.Fragment>
//     <Box sx={{flexGrow: 1, ml: 1}}>
//       <MenuNavigation />
//       <Menu
//         id='menu-appbar'
//         anchorEl={anchorElNav}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         keepMounted
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//         open={Boolean(anchorElNav)}
//         onClose={handleCloseNavMenu}
//       >
//         {pages.map(page => (
//           <MenuItem key={page} onClick={handleCloseNavMenu}>
//             <Typography textAlign='center'>{page}</Typography>
//           </MenuItem>
//         ))}
//       </Menu>
//     </Box>
//
//   </React.Fragment>
// )
