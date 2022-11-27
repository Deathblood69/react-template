import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import '../locales/i18n'
import {CircularProgress} from '@mui/material'

/**
 * Composant permettant de fournir des contextes à l'application
 * @returns {JSX.Element}
 * @constructor
 */
export const Providers = ({children}) => (
  <Suspense fallback={<CircularProgress />}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  </Suspense>
)

const queryClient = new QueryClient()
