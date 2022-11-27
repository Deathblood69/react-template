import React from 'react'

export const TableauComposants = ({
  array = [<React.Fragment />],
  composant = <React.Fragment />,
}) => array.map((value, index) => composant(value, index))
