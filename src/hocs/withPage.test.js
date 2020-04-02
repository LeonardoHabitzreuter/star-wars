import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import React from 'react'
import { useTitle } from 'react-use'
import withPage from './withPage'
import { render } from '@testing-library/react'

jest.mock('react-use')

describe('withPage', () => {
  test('should use param to set page title', () => {
    const title = 'test'
    const WithPage = withPage(() => null, { title })

    render(<WithPage />)

    expect(useTitle).toHaveBeenCalledWith(`${title} - Star wars`)
  })

  test('should return a component with a route property', () => {
    const route = 'test'
    const WithPage = withPage(() => null, { route })

    expect(WithPage.route).toBe(route)
  })
})
