import Axios from 'axios'
import { useContext } from 'react'
import { useEffectOnce } from 'react-use'
import { CharacterContext } from '../containers/CharacterContainer'

const useGetStarship = url => {
  const { starships, setStarShips } = useContext(CharacterContext)

  const fetchStarship = url => {
    const updateStarship = obj => setStarShips(
      starships.map(starship => (
        starship.url !== obj.url
          ? starship
          : { ...starship, ...obj }
      ))
    )

    Axios
      .get(url)
      .then(({ data }) => updateStarship({ ...data, loading: false }))
      .catch(() => updateStarship({ url, hasError: true, loading: false }))
  }

  useEffectOnce(() => {
    console.log(url, 'effect')
    fetchStarship(url)
  })

  return fetchStarship
}

export default useGetStarship
