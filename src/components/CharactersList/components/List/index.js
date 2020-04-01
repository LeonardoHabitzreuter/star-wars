/* eslint-disable react/prop-types */
import React from 'react'
import useGetCharacters from '../../hooks/useGetCharacters'
import ContentLoaders from '../ContentLoaders'
import CharacterCard from '../CharacterCard'
import { Button } from '/ui'
import { Container, StyledCharactersList } from './styles'

const CharactersList = () => {
  const [state, fetch] = useGetCharacters()

  return (
    <Container>
      <StyledCharactersList>
        {state.characters.map(props => (
          <CharacterCard key={props.id} {...props} />
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
