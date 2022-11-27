import React, {useMemo, useState} from 'react'
import {Outlet} from 'react-router'
import {useBreakpoints} from '../hook/useBreakpoints'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import {AfficherComposant} from '../composants/AfficherComposant'
import {BarreMenuMobile} from './BarreMenuMobile'
import {BarreMenuWeb} from './BarreMenuWeb'
import {CONSTANTES} from '../constantes/constantes'

/**
 * Composant affichant la barre principale de l'application
 * @returns {JSX.Element}
 * @constructor
 */
export default function Layout() {
  // ====== PARAMETRAGE ====== //

  const breakpoints = useBreakpoints()

  // ====== VARIABLES ====== //

  const [anchorElNav, setAnchorElNav] = useState(null)

  const pages = useMemo(() => {
    return Object.keys(CONSTANTES.pages)
      .map(key => CONSTANTES.pages[key])
      .map(p => p.nom)
  }, [])

  // ====== REQUETES ====== //

  // ====== METHODES ====== //

  const handleCloseNavMenu = () => {
    console.log('test')
    setAnchorElNav(null)
  }

  // ====== USE EFFECT ====== //

  // ====== AFFICHAGE ====== //

  return (
    <React.Fragment>
      <AppBar
        position={breakpoints.xs ? 'fixed' : 'static'}
        color='primary'
        sx={{top: 'auto', bottom: 0}}
      >
        <Toolbar disableGutters>
          <AfficherComposant condition={breakpoints.xs || breakpoints.sm}>
            <BarreMenuMobile
              anchorElNav={anchorElNav}
              pages={pages}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          </AfficherComposant>
          <AfficherComposant
            condition={breakpoints.md || breakpoints.lg || breakpoints.xl}
          >
            <BarreMenuWeb
              pages={pages}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          </AfficherComposant>
        </Toolbar>
      </AppBar>
      <Outlet />
    </React.Fragment>
  )
}
