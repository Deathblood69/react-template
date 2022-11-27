import * as React from 'react'
import {Outlet} from 'react-router'
import BarreMenu from './BarreMenu'

/**
 * Composant affichant la barre principale de l'application
 * @returns {JSX.Element}
 * @constructor
 */
export default function Layout() {
  return (
    <React.Fragment>
      <BarreMenu />
      <Outlet />
    </React.Fragment>
  )
}
