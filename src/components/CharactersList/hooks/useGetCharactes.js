import { useSetState, useEffectOnce } from 'react-use'
import request, { urls } from '/request'
import { toast } from 'react-toastify'

const initialState = {
  characters: [],
  loading: true,
  page: 0,
  hasMorePages: true
}

const results = [{ name: 'Anakin Skywalker', height: '188', mass: '84', birth_year: '41.9BBY', gender: 'male', starships: ['https://swapi.co/api/starships/59/', 'https://swapi.co/api/starships/65/', 'https://swapi.co/api/starships/39/'], url: 'https://swapi.co/api/people/11/' }, { name: 'Wilhuff Tarkin', height: '180', mass: 'unknown', birth_year: '64BBY', gender: 'male', starships: [], url: 'https://swapi.co/api/people/12/' }, { name: 'Chewbacca', height: '228', mass: '112', birth_year: '200BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/14/', films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/', 'https://swapi.co/api/films/7/'], species: ['https://swapi.co/api/species/3/'], vehicles: ['https://swapi.co/api/vehicles/19/'], starships: ['https://swapi.co/api/starships/10/', 'https://swapi.co/api/starships/22/'], created: '2014-12-10T16:42:45.066000Z', edited: '2014-12-20T21:17:50.332000Z', url: 'https://swapi.co/api/people/13/' }, { name: 'Han Solo', height: '180', mass: '80', eye_color: 'brown', birth_year: '29BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/22/', films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/', 'https://swapi.co/api/films/7/'], species: ['https://swapi.co/api/species/1/'], vehicles: [], starships: ['https://swapi.co/api/starships/10/', 'https://swapi.co/api/starships/22/'], created: '2014-12-10T16:49:14.582000Z', edited: '2014-12-20T21:17:50.334000Z', url: 'https://swapi.co/api/people/14/' }, { name: 'Greedo', height: '173', mass: '74', birth_year: '44BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/23/', films: ['https://swapi.co/api/films/1/'], species: ['https://swapi.co/api/species/4/'], vehicles: [], starships: [], created: '2014-12-10T17:03:30.334000Z', edited: '2014-12-20T21:17:50.336000Z', url: 'https://swapi.co/api/people/15/' }, { name: 'Jabba Desilijic Tiure', height: '175', mass: '1,358', birth_year: '600BBY', gender: 'hermaphrodite', homeworld: 'https://swapi.co/api/planets/24/', films: ['https://swapi.co/api/films/4/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/'], species: ['https://swapi.co/api/species/5/'], vehicles: [], starships: [], created: '2014-12-10T17:11:31.638000Z', edited: '2014-12-20T21:17:50.338000Z', url: 'https://swapi.co/api/people/16/' }, { name: 'Wedge Antilles', height: '170', mass: '77', eye_color: 'hazel', birth_year: '21BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/22/', films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/'], starships: ['https://swapi.co/api/starships/12/'], created: '2014-12-12T11:08:06.469000Z', edited: '2014-12-20T21:17:50.341000Z', url: 'https://swapi.co/api/people/18/' }, { name: 'Jek Tono Porkins', height: '180', mass: '110', eye_color: 'blue', birth_year: 'unknown', gender: 'male', homeworld: 'https://swapi.co/api/planets/26/', films: ['https://swapi.co/api/films/1/'], species: ['https://swapi.co/api/species/1/'], vehicles: [], starships: ['https://swapi.co/api/starships/12/'], created: '2014-12-12T11:16:56.569000Z', edited: '2014-12-20T21:17:50.343000Z', url: 'https://swapi.co/api/people/19/' }, { name: 'Yoda', height: '66', mass: '17', eye_color: 'brown', birth_year: '896BBY', gender: 'male', starships: [], url: 'https://swapi.co/api/people/20/' }, { name: 'Palpatine', height: '170', mass: '75', eye_color: 'yellow', birth_year: '82BBY', gender: 'male', homeworld: 'https://swapi.co/api/planets/8/', films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/5/', 'https://swapi.co/api/films/4/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/3/'], starships: [], url: 'https://swapi.co/api/people/21/' }]

const concatCharacters = (characters, newCharacters) => {
  const withId = newCharacters.map(({ url, ...character }) => ({
    id: url[url.length - 2],
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
      .catch(() => toast.error('Houve um erro ao buscar os personagens, tente novamente.'))
      .then(() => setState({
        loading: false
      }))
  }

  useEffectOnce(() => {
    // fetch()
    setState({
      characters: concatCharacters(state.characters, results),
      loading: false
    })
  })

  return [state, fetch]
}

export default useGetCharacters
