import { useSetState, useEffectOnce } from 'react-use'
import request, { urls } from '/request'

const initialState = {
  name: '',
  loading: true,
  hasError: true
}

const useGetCharacter = id => {
  const [state, setState] = useSetState(initialState)

  const fetch = () => {
    setState({ loading: true })

    request
      .get(`${urls.PEOPLE}/${id}`)
      .then(({ data }) => {
        setState({
          name: data.name
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
    // fetch()
  })

  return [state, fetch]
}

export default useGetCharacter
