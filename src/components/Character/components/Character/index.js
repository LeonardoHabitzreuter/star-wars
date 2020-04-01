import React from 'react'
import PropTypes from 'prop-types'
import useGetCharacter from '../../hooks/useGetCharacter'
import NameLoader from '../NameLoader'
import ErrorCard from '../ErrorCard'
import { Typography } from '/ui'

const Character = ({ id }) => {
  const [state, fetch] = useGetCharacter(id)

  return (
    <>
      <Typography variant='h4'>Character:</Typography>
      <NameLoader loading={state.loading} />
      <Typography bold variant='h3'>{state.name}</Typography>
      <ErrorCard hasError={state.hasError} onRetry={fetch} />
    </>
  )
}

Character.propTypes = {
  id: PropTypes.string.isRequired
}

export default Character
