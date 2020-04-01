import request, { urls } from '/request'
import { useEffectOnce, useSetState } from 'react-use'

const initialState = {
  loading: true,
  hasError: false,
  name: '',
  model: '',
  passengers: '',
  length: '',
  crew: '',
  starship_class: '',
  cargo_capacity: ''
}

const useGetStarship = id => {
  const [state, setState] = useSetState(initialState)

  const fetchStarship = () => {
    request
      .get(`${urls.STARSHIPS}/${id}`)
      .then(({ data }) => setState({ ...data, hasError: false }))
      .catch(() => setState({ hasError: true }))
      .then(() => setState({ loading: false }))
  }

  useEffectOnce(() => {
    fetchStarship()
  })

  return [state, fetchStarship]
}

export default useGetStarship
