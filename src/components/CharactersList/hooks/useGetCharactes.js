import { useSetState, useEffectOnce } from 'react-use'
import request, { urls } from '/request'

const initialState = {
  characters: [],
  loading: true,
  page: 0,
  hasMorePages: true
}

const useGetCharacters = () => {
  const [state, setState] = useSetState(initialState)

  const fetch = () => {
    setState({ loading: true })

    request
      .get(urls.PEOPLE, { page: state.page + 1 })
      .then(({ data }) => {
        console.log(data)
        setState({
          characters: state.characters.concat(data.results),
          page: state.page + 1,
          hasMorePages: !!data.next
        })
      })
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
