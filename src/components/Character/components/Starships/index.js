import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import StarshipCard from '../StarshipCard'
import { Card, Typography } from '/ui'
import { StarhipsList } from './styles'

// eslint-disable-next-line react/prop-types
const EmptyState = ({ show }) => show && (
  <Card>
    <Typography variant='h6'>This character has no starships.</Typography>
  </Card>
)

const Starships = ({ loadingCharacter, starships }) => (
  <>
    <EmptyState show={!loadingCharacter && R.isEmpty(starships)} />

    <StarhipsList>
      {starships.map(starship => (
        <StarshipCard key={starship} id={starship} />
      ))}
    </StarhipsList>
  </>
)

Starships.propTypes = {
  loadingCharacter: PropTypes.bool.isRequired,
  starships: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
}

export default Starships
