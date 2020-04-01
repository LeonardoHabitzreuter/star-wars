import React from 'react'
import PropTypes from 'prop-types'

const Character = ({ id }) => {
  return (
    <h1>{id}</h1>
  )
}

Character.propTypes = {
  id: PropTypes.string.isRequired
}

export default Character
