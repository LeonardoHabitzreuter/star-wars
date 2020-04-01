import React from 'react'
import PropTypes from 'prop-types'
import StarshipCard from '../StarshipCard'
import { StarhipsList } from './styles'

const Starships = ({ starships }) => (
  <StarhipsList>
    {starships.map(starship => (
      <StarshipCard key={starship.url} {...starship} />
    ))}
  </StarhipsList>
)

Starships.propTypes = {
  starships: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired,
    name: PropTypes.string,
    model: PropTypes.string,
    manufacturer: PropTypes.string,
    length: PropTypes.string,
    crew: PropTypes.string,
    starship_class: PropTypes.string
  }))
}

export default Starships
