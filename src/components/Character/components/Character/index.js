import React from 'react'
import PropTypes from 'prop-types'
import CharacterContainer from '../../containers/CharacterContainer'
import NameLoader from '../NameLoader'
import ErrorCard from '../ErrorCard'
import Starships from '../Starships'
import { Typography } from '/ui'

const Character = ({ id }) => (
  <CharacterContainer id={id}>
    {({ loading, name, hasError, starships }) => (
      <>
        <Typography variant='h4'>Character:</Typography>
        <NameLoader loading={loading} />
        <Typography bold variant='h3'>{name}</Typography>
        <ErrorCard
          onRetry={fetch}
          show={hasError}
          message='There was an error querying for the character, try again.'
        />
        <Starships starships={starships} />
      </>
    )}
  </CharacterContainer>
)

Character.propTypes = {
  id: PropTypes.string.isRequired
}

export default Character
