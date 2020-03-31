/* eslint-disable react/prop-types */
import React from 'react'
import useGetCharacters from '../../hooks/useGetCharactes'
import ContentLoaders from '../ContentLoaders'
import Character from '../Character'
import { Button } from '/ui'
import { Container, StyledCharactersList } from './styles'

const CharactersList = () => {
  const [state, fetch] = useGetCharacters()

  return (
    <Container>
      <StyledCharactersList>
        {state.characters.map(props => (
          <Character key={props.name} {...props} />
        ))}

        <ContentLoaders loading={state.loading} />
      </StyledCharactersList>

      {state.hasMorePages &&
        <Button onClick={fetch}>Show more</Button>
      }
    </Container>
  )
}

export default CharactersList
