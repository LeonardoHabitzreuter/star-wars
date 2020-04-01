import request, { urls } from '/request'
import { useSetState, useEffectOnce } from 'react-use'
import { getIdFromUrl } from '/common/url'

const initialState = {
  name: '',
  loading: true,
  hasError: false,
  starships: []
}

const useGetCharacter = id => {
  const [state, setState] = useSetState(initialState)

  const fetch = () => {
    setState({ loading: true, hasError: false })

    request
      .get(`${urls.PEOPLE}/${id}`)
      .then(({ data }) => {
        setState({
          name: data.name,
          hasError: false,
          starships: data.starships.map(getIdFromUrl)
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

  return [state, fetch]
}

export default useGetCharacter
