import {useMediaQuery, useTheme} from '@mui/material'
import {useMemo} from 'react'

export const useBreakpoints = () => {
  const theme = useTheme()

  const xs = useMediaQuery(theme.breakpoints.up('xs'))
  const sm = useMediaQuery(theme.breakpoints.up('sm'))
  const md = useMediaQuery(theme.breakpoints.up('md'))
  const lg = useMediaQuery(theme.breakpoints.up('lg'))
  const xl = useMediaQuery(theme.breakpoints.up('xl'))

  let breakpoint = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  }

  if (xl) {
    breakpoint = {
      ...breakpoint,
      xl,
    }
  } else if (lg) {
    breakpoint = {
      ...breakpoint,
      lg,
    }
  } else if (md) {
    breakpoint = {
      ...breakpoint,
      md,
    }
  } else if (sm) {
    breakpoint = {
      ...breakpoint,
      sm,
    }
  } else if (xs) {
    breakpoint = {
      ...breakpoint,
      xs,
    }
  }

  return breakpoint
}
