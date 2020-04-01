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
        {state.characters.map(character => (
          <CharacterCard key={character.id} {...character} />
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
