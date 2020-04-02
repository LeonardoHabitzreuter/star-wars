import { getIdFromUrl } from './url'

describe('getIdFromUrl', () => {
  test.each([
    ['http://localhost/7/', '7'],
    ['http://localhost:3000/10/', '10'],
    ['https://localhost:3000/164/', '164']
  ])('should return (%i)', (url, id) => {
    const result = getIdFromUrl(url)

    expect(result).toBe(id)
  })
})
