import React from 'react'
import PropTypes from 'prop-types'
import useGetCharacter from '../../hooks/useGetCharacter'
import NameLoader from '../NameLoader'
import ErrorCard from '../ErrorCard'
import Starships from '../Starships'
import { Typography } from '/ui'

const Character = ({ id }) => {
  const [state, fetch] = useGetCharacter(id)

  return (
    <>
      <Typography variant='h4'>Character:</Typography>
      <NameLoader loading={state.loading} />
      <Typography bold variant='h3'>{state.name}</Typography>
      <ErrorCard
        onRetry={fetch}
        show={state.hasError}
        message='There was an error querying for the character, try again.'
      />
      <Starships loadingCharacter={state.loading} starships={state.starships} />
    </>
  )
}

Character.propTypes = {
  id: PropTypes.string.isRequired
}

export default Character
