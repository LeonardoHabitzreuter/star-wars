import React from 'react'
import PropTypes from 'prop-types'
import StarshipCard from '../StarshipCard'
import { StarhipsList } from './styles'

const Starships = ({ starships }) => (
  <StarhipsList>
    {starships.map(starship => (
      <StarshipCard key={starship} id={starship} />
    ))}
  </StarhipsList>
)

Starships.propTypes = {
  starships: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
}

export default Starships
