import React from 'react'
import { useTitle } from 'react-use'

const withPage = (Component, { title, route }) => {
  // eslint-disable-next-line react/prop-types
  const WithPage = ({ children, ...rest }) => {
    useTitle(`${title} - Star wars`)
    return (
      <Component {...rest}>{children}</Component>
    )
  }

  WithPage.route = route
  return WithPage
}

export default withPage
