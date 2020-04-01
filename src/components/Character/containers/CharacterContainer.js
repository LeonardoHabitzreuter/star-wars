import PropTypes from 'prop-types'
import React, { createContext } from 'react'
import { useSetState, useEffectOnce } from 'react-use'
import request, { urls } from '/request'

const initialState = {
  name: '',
  loading: true,
  hasError: false,
  starships: []
}

export const CharacterContext = createContext({
  starships: [],
  setStarShips: () => { }
})

const CharacterContainer = ({ id, children }) => {
  const [state, setState] = useSetState(initialState)

  const fetch = () => {
    setState({ loading: true, hasError: false })

    request
      .get(`${urls.PEOPLE}/${id}`)
      .then(({ data }) => {
        setState({
          name: data.name,
          starships: data.starships.map(url => ({ url, loading: true, hasError: false }))
        })
      })
      .catch(() => setState({
        hasError: true
      }))
      .then(() => setState({
        loading: false
      }))
  }

  useEffectOnce(() => {
    fetch()
  })

  return (
    <CharacterContext.Provider
      value={{
        starships: state.starships,
        setStarShips: starships => setState({ starships })
      }}
    >
      {children({
        fetch,
        ...state
      })}
    </CharacterContext.Provider>
  )
}

CharacterContainer.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

export default CharacterContainer
