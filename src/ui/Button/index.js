import React from 'react'
import PropTypes from 'prop-types'
import { Button, Link } from './styles'

const LinkOrButton = ({ href, children, ...rest }) => (
  !href
    ? <Button {...rest}>{children}</Button>
    : (
      <Link to={href} {...rest}>
        <Button {...rest}>{children}</Button>
      </Link>
    )
)

LinkOrButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['normal', 'small', 'full']),
  modifier: PropTypes.oneOf(['primary', 'secondary']),
  href: PropTypes.string
}

LinkOrButton.defaultProps = {
  type: 'button',
  size: 'normal',
  modifier: 'primary'
}

export default LinkOrButton
