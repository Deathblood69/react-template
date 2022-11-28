import React from 'react'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export const Compte = () => {
  // ====== PARAMETRAGE ====== //

  // ====== VARIABLES ====== //

  const [anchorElUser, setAnchorElUser] = React.useState(null)

  // ====== REQUETES ====== //

  // ====== METHODES ====== //

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  // ====== USE EFFECT ====== //

  // ====== AFFICHAGE ====== //

  return (
    <React.Fragment>
      <Box sx={{flexGrow: 0}}>
        <IconButton
          size={'large'}
          onClick={handleOpenUserMenu}
          sx={{p: 0, mr: 2}}
        >
          <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
        </IconButton>
        <Menu
          sx={{mt: '45px'}}
          id='menu-appbar'
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map(setting => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign='center'>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </React.Fragment>
  )
}
