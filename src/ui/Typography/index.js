import React from 'react'
import propTypes from 'prop-types'
import { colors } from '/styles/theme'

import Styled from './styles'

const variants = {
  h1: Styled.H1,
  h2: Styled.H2,
  h3: Styled.H3,
  h4: Styled.H4,
  h5: Styled.H5,
  h6: Styled.H6,
  subtitle: Styled.Subtitle,
  text: Styled.Text,
  body: Styled.Body
}

const Typography = ({ variant, children, ...rest }) => {
  const Component = variants[variant]

  return <Component {...rest}>{children}</Component>
}

Typography.propTypes = {
  children: propTypes.node.isRequired,
  variant: propTypes.oneOf(Object.keys(variants)),
  align: propTypes.oneOf(['left', 'center', 'right']),
  color: propTypes.oneOf(Object.values(colors))
}

Typography.defaultProps = {
  variant: 'body',
  align: 'left',
  color: colors.primary
}

export default Typography
