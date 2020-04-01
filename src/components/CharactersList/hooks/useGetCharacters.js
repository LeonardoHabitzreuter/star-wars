import request, { urls } from '/request'
import { useSetState, useEffectOnce } from 'react-use'
import { toast } from 'react-toastify'
import { getIdFromUrl } from '/common/url'

const initialState = {
  characters: [],
  loading: true,
  page: 0,
  hasMorePages: true
}

const concatCharacters = (characters, newCharacters) => {
  const withId = newCharacters.map(({ url, ...character }) => ({
    id: getIdFromUrl(url),
    ...character
  }))
  return characters.concat(withId)
}

const useGetCharacters = () => {
  const [state, setState] = useSetState(initialState)

  const fetch = () => {
    setState({ loading: true })

    request
      .get(urls.PEOPLE, { page: state.page + 1 })
      .then(({ data }) => {
        setState({
          characters: concatCharacters(state.characters, data.results),
          page: state.page + 1,
          hasMorePages: !!data.next
        })
      })
      .catch(() => toast.error('There was an error querying for characters, try again.'))
      .then(() => setState({
        loading: false
      }))
  }

  useEffectOnce(() => {
    fetch()
  })

  return [state, fetch]
}

export default useGetCharacters
