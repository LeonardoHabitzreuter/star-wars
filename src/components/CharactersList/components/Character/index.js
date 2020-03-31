import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '/ui'
import { StyledCharacter, Row, Characteristic } from './styles'

const Character = props => (
  <StyledCharacter>
    <Typography bold variant='h5'>{props.name}</Typography>
    <Row>
      <Characteristic>Height: {props.height}</Characteristic>
      <Characteristic>Mass: {props.mass}</Characteristic>
    </Row>
    <Row>
      <Characteristic>Birth year: {props.birth_year}</Characteristic>
      <Characteristic>Gender: {props.gender}</Characteristic>
    </Row>
  </StyledCharacter>
)

Character.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string,
  mass: PropTypes.string,
  birth_year: PropTypes.string,
  gender: PropTypes.string
}

export default Character
