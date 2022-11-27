import React from 'react'

export const AfficherComposant = ({condition, children}) => (
  <React.Fragment>{condition && children}</React.Fragment>
)
