import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import CharacterPage from '/pages/Character'
import { Typography } from '/ui'
import { StyledCharacter, Row, Characteristic, DetailsButton } from './styles'

const mountLink = R.replace(':id', R.__, CharacterPage.route)

const Character = props => (
  <StyledCharacter>
    <Typography bold variant='h5'>{props.name}</Typography>
    <Row>
      <Characteristic bold>Height: <Typography>{props.height}</Typography></Characteristic>
      <Characteristic bold>Mass: <Typography>{props.mass}</Typography></Characteristic>
    </Row>
    <Row>
      <Characteristic bold>Birth year: <Typography>{props.birth_year}</Typography></Characteristic>
      <Characteristic bold>Gender: <Typography>{props.gender}</Typography></Characteristic>
    </Row>
    <DetailsButton
      href={mountLink(props.id)}
      modifier='secondary'
    >
      Details
    </DetailsButton>
  </StyledCharacter>
)

Character.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  height: PropTypes.string,
  mass: PropTypes.string,
  birth_year: PropTypes.string,
  gender: PropTypes.string
}

export default Character
