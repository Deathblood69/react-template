import React from 'react'
import {Route, Routes} from 'react-router-dom'
import App from './app/App'
import Layout from '../layout/Layout'
import {CONSTANTES} from '../constantes/constantes'

/**
 * Composant principal de l'application, permet de gérer les routes et l'agencement
 * @returns {JSX.Element}
 * @constructor
 */
export const Template = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path={CONSTANTES.routes.root} element={<Layout />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}
